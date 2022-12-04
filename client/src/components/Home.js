import '../styles/Home.css';
import Carousel from './carousel';
import ImageCategories from './imageCategories';
import Movies from './moviesSection';

const Home = () => {
    return(
        <div className='home'>
            <Carousel />
            <ImageCategories />
            <Movies />
        </div>
    )
}

export default Home;