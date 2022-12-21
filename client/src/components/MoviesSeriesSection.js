import '../styles/MoviesSeriesSection.css'
import { AnimatedMovies, AnimatedSeries, Recommended, MarvelMovies } from '../assets/constants'
import MovieSeriesCarousel from './MovieSeriesCarousel'
import { createContext, useContext, useEffect, useState } from 'react'
import { userContext } from '../App'

export const watchlistContext = createContext()

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
    
    const valueProvider = [watchlist, setWatchlist]

    return(
        <div className='movies-series-section'>
            <watchlistContext.Provider value={valueProvider}>
                <MovieSeriesCarousel key={"movie-carousel-1"} movies={Recommended} title = {titleRecommendedSection} />
                <MovieSeriesCarousel key={"movie-carousel-2"} movies={MarvelMovies} title = {titleMarvelSection} />
                <MovieSeriesCarousel key={"movie-carousel-3"} movies={AnimatedMovies} title = {titleAnimatedMoviesSection} />
                <MovieSeriesCarousel key={"movie-carousel-4"} movies={AnimatedSeries} title = {titleAnimatedSeriesSection} />
            </watchlistContext.Provider>
        </div>
    )
}

export default MoviesSeriesSection;