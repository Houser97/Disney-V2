import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HeaderSD from './components/HeaderSD';
import Home from './components/Home';
import Search from './components/Search';
import MoviesAndSeries from './components/MoviesAndSeries';
import Watchlist from './components/Watchlist';
import Originals from './components/Originals';
import Login from './components/Login';
import Avatar from './components/Avatar';
import { createContext, useEffect, useState } from 'react';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import Loading from './components/Loading';

interface userData {
  username: string;
  watchlist: number[];
  avatar: string;
  _id: string;
}

interface UserContextProps {
  isUserLogged: userData | null;
  setIsUserLogged: React.Dispatch<React.SetStateAction<userData | null>>;
  watchlist: number[];
  setWatchlist: React.Dispatch<React.SetStateAction<number[]>>;
  setUpdateWatchlist: React.Dispatch<React.SetStateAction<boolean>>;
  API: string;
}

export const userContext = createContext<UserContextProps>({
  isUserLogged: null,
  setIsUserLogged: () => null,
  watchlist: [],
  setWatchlist: () => [],
  setUpdateWatchlist: () => false,
  API: 'http://localhost:5000',
})

if(process.env.NODE_ENV === 'production'){disableReactDevTools()}

function App() {
  //Antes tenía definido null, pero se asignó un objeto con las propiedades a recuperar de la API
  //Se debe ajustar el código para determinar cuándo es que hay usuario y cuando no.
  const [isUserLogged, setIsUserLogged] = useState<userData | null>(null)
  const [watchlist, setWatchlist] = useState(isUserLogged ? isUserLogged.watchlist:[])
  //Estado que hace trigger a useEffect para actualizar watchlist
  const [updateWatchlist, setUpdateWatchlist] = useState(false)
  //Se inicializa isLoading con TRUE para evitar ver que los componentes comnutan en lo que el programa reacciona al renderizado condicional.
  const [isLoading, setIsLoading] = useState(true)
  const API = 'http://localhost:5000';

  const arraysMatch = (arr1:[], arr2:[]):boolean => {
    if(arr1.length !== arr2.length) return false
    const lengthArr1 = arr1.length
    for(let i = 0; i < lengthArr1; i++){
      if(arr1[i] !== arr2[i]) return false
    } 
    return true;
  }

  // Se usa para determinal la duración que tiene el Loading.
  const randomValue = ():number => {
    //Se multiplica por 5 para obtener un valor entre 0 y 5, luego se le suma 4 para tener un valor entre 6 y 10.
    return 100 * Math.floor(Math.random()*5+6);
  }

  useEffect(() => {
    setIsLoading(true)
    fetch(`${API}/api/check_if_user_is_logged`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setIsUserLogged(data)
      setTimeout(() => {
        setIsLoading(false)
      }, randomValue())
    })
  }, [])

  //Quitar o ajustar useEffect, ya que causa problemas en AVATAR con el componente de Loading CHECKED.
  //Se quitó setIsLoading
  useEffect(() => {
    if(isUserLogged){
      //console.table(isUserLogged)
      setWatchlist(isUserLogged.watchlist)
    } else {
      setWatchlist([])
    }
  }, [isUserLogged])

  //useEffect para hacer update a watchlist
  useEffect(() => {
    //console.log(watchlist)
    if(isUserLogged && updateWatchlist){
        fetch(`${API}/api/update_watchlist`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({watchlist})
      })
    }
  }, [watchlist, updateWatchlist])

  const valueProvider = {isUserLogged,  setIsUserLogged, watchlist, setWatchlist, setUpdateWatchlist, API}

  return (
    <BrowserRouter basename='/'>
      <userContext.Provider value={valueProvider}>
        { isLoading ? 
        <div className='loading-app'>
          <Loading />
        </div>
        :        
        <div className="App">
            <Header />
            <HeaderSD />
            <Routes >
              <Route path='/' element = {<Home />}/>
              <Route path='/search' element = {<Search />}/>
              <Route path='/movies' element = {<MoviesAndSeries key={"movieSectionRender"} titleSection = {"Movies"} />} ></Route>
              <Route path='/series' element = {<MoviesAndSeries key={"serieSectionRender"} titleSection = {"Series"} />} ></Route>
              <Route path='/watchlist' element = {<Watchlist />} ></Route>
              <Route path='/originals' element = {<Originals key={"originals-component"}/>}/>
              <Route path='/login' element = {<Login formToOpen={1} key={"logInSection"}  />} ></Route>
              <Route path='/signup' element = {<Login formToOpen={0} key={"signUpSection"} />} ></Route>
              <Route path="/avatar" element = {<Avatar />} ></Route>           
            </Routes>
            <Footer />
        </div>
        }
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;
