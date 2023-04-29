import '../styles/MovieSeriesCarousel.css';
import MovieSerieCard from './MovieSerieCard';
import Slider from 'react-slick';
import useWindowSize from '../assets/hooks/windowSize.js'
import { useEffect, useState } from 'react';

interface moviesType {
    image: string, 
    title: string, 
    isMovie: boolean, 
    isForKids: boolean, 
    isOriginal: boolean, 
    isAnimated: boolean,
    ref: number
}

interface MovieSeriesCarouselProps {
    title: string,
    movies: moviesType[]
}

const MovieSeriesCarousel = ({movies, title}: MovieSeriesCarouselProps) => {

    const windowSize = useWindowSize()

    const [isMobile, setIsMobile] = useState(windowSize.width <= 400 ? 
        'small': windowSize.width <= 800 ? 'medium':'large')

    useEffect(() => {
      if(windowSize.width <= 550){
        setIsMobile('small')
      } else if(windowSize.width <= 800) {
        setIsMobile('medium')
      } else {
        setIsMobile('large')
      }
    }, [windowSize])
    

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: isMobile === 'large' ? 4 : isMobile === 'medium' ? 3 : 2,
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
                            <MovieSerieCard key={`movieSeries-carousel-section-${i}`} movie = {movie} />
                        )
                    })
                }
                </Slider>
            </div>
            
        </div>
    )
}

export default MovieSeriesCarousel;