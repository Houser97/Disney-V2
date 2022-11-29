import '../styles/Carousel.css';
import Obiwan from '../images/Obi-wan-poster.webp';
import Daredevil from '../images/Daredevil.png';
import DrStrange from '../images/DrStrange.png';
import Rons from '../images/Rons.png';
import Malcolm from '../images/Malcolm.png';
import Thor from '../images/Thor.PNG'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SliderCreated from './slider';

const Carousel = () => {

    const movies = [{image: Obiwan},
                    {image: Daredevil},
                    {image: DrStrange},
                    {image: Rons},
                    {image: Malcolm},
                    {image: Thor}];

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
                {movies.map(
                    function iterateMovies(item, iterator){
                        return(
                            <SliderCreated key={iterator} image={item.image}/>
                        )
                    }
                )}
            </CarouselSlick>
        </div>
    )
}

export default Carousel;