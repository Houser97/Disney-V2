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

function App() {
  return (
    <BrowserRouter basename='/'>
    {/*<userContext.Provider value={valueProvider}>*/}
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
            <Route path='/login' element = {<Login formToOpen={"1"} key={"logInSection"} /*headerRef={header} footerRef = {footer} setUserID ={setUserID} userID = {userID} setUsername1 ={setUsernameHeader}*/ />} ></Route>
            <Route path='/signup' element = {<Login formToOpen={"2"} key={"signUpSection"}  /*setUsername1 ={setUsernameHeader}*/ />} ></Route>
            <Route path="/avatar" element = {<Avatar /*setUserPicture = {setUserPictureHeader}*/ />} ></Route>           
          </Routes>
          <Footer />
        </div>
      </div>
    {/*</userContext.Provider>*/}
  </BrowserRouter>
  );
}

export default App;
