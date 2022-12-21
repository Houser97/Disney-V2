import '../styles/MoviesSeriesSection.css'
import { AnimatedMovies, AnimatedSeries, Recommended, MarvelMovies } from '../assets/constants'
import MovieSeriesCarousel from './MovieSeriesCarousel'
import { useContext, useEffect, useState } from 'react'
import { userContext } from '../App'


const MoviesSeriesSection = () => {
    const titleRecommendedSection = "Recommended for you"
    const titleMarvelSection = "Marvel Series and Specials"
    const titleAnimatedMoviesSection = "Animated Movies"
    const titleAnimatedSeriesSection = "Animated Series"

    const isUser = useContext(userContext)[0]

    const [watchlist, setWatchlist] = useState(null)

    useEffect(() => {
      if(isUser){
        setWatchlist(isUser.watchlist)
      }
    }, [isUser])
    


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