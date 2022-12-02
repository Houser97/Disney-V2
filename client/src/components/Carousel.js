import '../styles/Carousel.css';
import { carouselImages } from '../assets/constants';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SliderCreated from './Slider';

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
            <Slider {...settings} className = "carousel">
                {carouselImages.map(
                    function iterateMovies(image, iterator){
                        return(
                            <SliderCreated key={iterator} image={image}/>
                        )
                    }
                )}
            </Slider>
        </div>
    )
}

export default Carousel;