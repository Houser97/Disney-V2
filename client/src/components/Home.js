import '../styles/Home.css';
import Carousel from './Carousel';
import MainCategories from './MainCategories'
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