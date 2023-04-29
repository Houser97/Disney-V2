/*import '../styles/Home.css';*/
import Carousel from './Carousel';
import MainCategories from './MainCategories'
import MoviesSeriesSection from './MoviesSeriesSection';

const Home = () => {
    return(
        <div className='home'>
            <Carousel />
            <MainCategories />
            <MoviesSeriesSection />
        </div>
    )
}

export default Home;