import '../styles/MovieSeriesCarousel.css';
import MovieSerieCard from './MovieSerieCard.js';
import Slider from 'react-slick';

const MovieSeriesCarousel = ({movies, title}) => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: false,
    }
            
    return(
        <div className='container-movies'>
            <div className='title-section'>{title}</div>
            <div className='images-section-movies' id='images-section-movies'>
                <Slider {...settings} className = "slider-section-movies">
                {
                    movies.map(function iterateMovies(movie, i){
                        return(
                            <MovieSerieCard key={`${i}-movie-carousel-section`} movie = {movie} />
                        )
                    })
                }
                </Slider>
            </div>
            
        </div>
    )
}

export default MovieSeriesCarousel;