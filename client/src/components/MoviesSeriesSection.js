import '../styles/MoviesSeriesSection.css'
import { AnimatedMovies, AnimatedSeries, Recommended, MarvelMovies } from '../assets/constants'
import MovieSeriesCarousel from './MovieSeriesCarousel'

const MoviesSeriesSection = () => {
    const titleRecommendedSection = "Recommended for you"
    const titleMarvelSection = "Marvel Series and Specials"
    const titleAnimatedMoviesSection = "Animated Movies"
    const titleAnimatedSeriesSection = "Animated Series"

    return(
        <div className='movies-series-section'>
            <MovieSeriesCarousel key={"movie-carousel-1"} movies={Recommended} title = {titleRecommendedSection} />
            <MovieSeriesCarousel key={"movie-carousel-2"} movies={MarvelMovies} title = {titleMarvelSection} />
            <MovieSeriesCarousel key={"movie-carousel-3"} movies={AnimatedMovies} title = {titleAnimatedMoviesSection} />
            <MovieSeriesCarousel key={"movie-carousel-4"} movies={AnimatedSeries} title = {titleAnimatedSeriesSection} />
        </div>
    )
}

export default MoviesSeriesSection;