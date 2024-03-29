import { useEffect, useState } from 'react';
import '../styles/MoviesAndSeries.css';
import DropdownMenu from './DropdownMenu';
import MovieSerieCard from './MovieSerieCard';
import { movies } from '../assets/constants';

interface MoviesAndSeriesProp {
    titleSection: string
}

const MoviesAndSeries = ({titleSection}: MoviesAndSeriesProp) => {

    const MoviesOrSeries = titleSection === 'Movies' ? 
                            movies.filter(movie => movie.isMovie)
                            :
                            movies.filter(movie => !movie.isMovie)

    const [moviesOrSeries, setMoviesOrSeries] = useState(MoviesOrSeries);
    const [filter, setFilter] = useState("ALL MOVIES A-Z");

    useEffect(() => {
        if(filter === "ANIMATED"){
            setMoviesOrSeries(MoviesOrSeries.filter(movie => movie.isAnimated));
        } else if (filter === "KIDS"){
            setMoviesOrSeries(MoviesOrSeries.filter(movie => movie.isForKids))
        } else {
            setMoviesOrSeries(MoviesOrSeries)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter])

    return(
        <div className='moviesAndSeries-section'>
            <div className='title-section-placeholder'>
                <div className='title-section-container'>
                    <div className='title-section-movies-series'>{titleSection}</div>
                    <DropdownMenu setFilter={setFilter} />
                </div>
            </div>

            <div className='section-cards'>
                {moviesOrSeries.map(function iterateMovies(movie){
                    return(
                        <MovieSerieCard key={`movieANDserie-react-${movie.title}`} movie={movie} />
                    )
                })}
            </div>
        </div>
    )
}

export default MoviesAndSeries;