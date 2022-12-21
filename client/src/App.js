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

export const userContext = createContext()

function App() {

  const [isUserLogged, setIsUserLogged] = useState(null)
  const [watchlist, setWatchlist] = useState(isUserLogged ? isUserLogged.watchlist:[])
  const [updateWatchlist, setUpdateWatchlist] = useState(false)

  const arraysMatch = (arr1, arr2) => {
    if(arr1.length !== arr2.length) return false
    const lengthArr1 = arr1.length
    for(let i = 0; i < lengthArr1; i++){
      if(arr1[i] !== arr2[i]) return false
    } 
    return true;
  }

  useEffect(() => {
    fetch('/api/check_if_user_is_logged')
    .then(response => response.json())
    .then(data => {
      sessionStorage.setItem('user', JSON.stringify(data))
      setIsUserLogged(data)
    })
  }, [])

  useEffect(() => {
    if(isUserLogged){
      setWatchlist(isUserLogged.watchlist)
    } else {
      setWatchlist([])
    }
  }, [isUserLogged])

  useEffect(() => {
    //console.log(watchlist)
    const currentWatchlist = JSON.parse(sessionStorage.getItem('user')).watchlist
    if(!arraysMatch(currentWatchlist, watchlist) && updateWatchlist){    
        fetch('/api/update_watchlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({watchlist})
      }).then(response => response.json())
      .then(data => console.log(data))
    }
  }, [watchlist])

  const valueProvider = [isUserLogged, setIsUserLogged, watchlist, setWatchlist, setUpdateWatchlist]

  return (
    <BrowserRouter basename='/'>
      <userContext.Provider value={valueProvider}>
        <div className="App">
          <div className='full-height'>
            <Header userID = {false}/>
            <HeaderSD />
            <Routes >
              <Route path='/' element = {<Home />}/>
              <Route path='/search' element = {<Search />}/>
              <Route path='/movies' element = {<MoviesAndSeries key={"movieSectionRender"} titleSection = {"Movies"} />} ></Route>
              <Route path='/series' element = {<MoviesAndSeries key={"serieSectionRender"} titleSection = {"Series"} />} ></Route>
              <Route path='/watchlist' element = {<Watchlist userID={null} />} ></Route>
              <Route path='/originals' element = {<Originals key={"originals-component"}/>}/>
              <Route path='/login' element = {<Login formToOpen={"1"} key={"logInSection"}  />} ></Route>
              <Route path='/signup' element = {<Login formToOpen={"2"} key={"signUpSection"} />} ></Route>
              <Route path="/avatar" element = {<Avatar />} ></Route>           
            </Routes>
            <Footer />
          </div>
        </div>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;
