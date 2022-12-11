import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HeaderSD from './components/HeaderSD';
import Home from './components/Home';
import Search from './components/Search';
import MoviesAndSeries from './components/MoviesAndSeries';
import Watchlist from './components/Watchlist';

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
            {/*<Route path='/originals' element = {<Originals key={"originals-component"} headerRefPlaceholder = {header}/>}/>
            <Route path='/login' element = {<LogInSection formToOpen={"1"} key={"logInSection"} headerRef={header} footerRef = {footer} setUserID ={setUserID} userID = {userID} setUsername1 ={setUsernameHeader} />} ></Route>
            <Route path='/signup' element = {<LogInSection formToOpen={"2"} key={"signUpSection"} headerRef={header} footerRef = {footer} setUserID ={setUserID} userID = {userID} setUsername1 ={setUsernameHeader} />} ></Route>
            <Route path="/avatar" element = {<ChooseAvatar headerRef={header} footerRef ={footer} setUserPicture = {setUserPictureHeader} />} ></Route>           
            <Footer footerRef = {footer}/>*/}
          </Routes>
          <Footer />
        </div>
      </div>
    {/*</userContext.Provider>*/}
  </BrowserRouter>
  );
}

export default App;
