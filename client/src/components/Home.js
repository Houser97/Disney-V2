import '../styles/Home.css';
import Carousel from './components/Carousel';
import MainCategories from './components/MainCategories'
/*import Movies from './moviesSection';*/

const Home = () => {
    return(
        <div className='home'>
            <Carousel />
            <MainCategories />
            {/*<Movies />*/}
        </div>
    )
}

export default Home;