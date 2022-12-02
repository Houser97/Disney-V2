import '../styles/Carousel.css';
import { carouselImages } from '../assets/constants';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SliderCreated from './slider';

const Carousel = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return(
        <div className='carousel-section' id='carousel'>
            <CarouselSlick {...settings} className = "carousel">
                {carouselImages.map(
                    function iterateMovies(image, iterator){
                        return(
                            <SliderCreated key={iterator} image={image}/>
                        )
                    }
                )}
            </CarouselSlick>
        </div>
    )
}

export default Carousel;