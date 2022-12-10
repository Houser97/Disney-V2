import { useEffect, useRef, useState } from 'react';
import '../styles/MoviesAndSeries.css';
import DropdownMenu from './DropdownMenu';
import MovieSerieCard from './MovieSerieCard.js';
import { movies } from '../assets/constants';

const MoviesAndSeries = ({titleSection, HeaderRef}) => {

    const MoviesOrSeries = titleSection === 'Movies' ? 
                            movies.filter(movie => movie.isMovie)
                            :
                            movies.filter(movie => !movie.isMovie)

    const [moviesOrSeries, setMoviesOrSeries] = useState(MoviesOrSeries);
    const [filter, setFilter] = useState("ALL MOVIES A-Z");

    const containerToFix = useRef(null);
    const header = HeaderRef.current;
    /*
    const fixTitleSection = () => {
        if(document.documentElement.scrollTop !== 0){
            containerToFix.current.style.position = "fixed";
        } else {
            containerToFix.current.style.position = "relative";
            header.style.backgroundColor = "rgb(26, 29, 41)" 
        }
    }*/

    useEffect(() => {
        if(document.documentElement.scrollTop !== 0){
            header.style.opacity = 0;
        } else {
            header.style.opacity = 1;
        }
        return () => {
            header.style.opacity = 0;
        }
    },[])

    useEffect(() => {
        if(filter === "ANIMATED"){
            setMoviesOrSeries(MoviesOrSeries.filter(movie => movie.isAnimated));
        } else if (filter === "KIDS"){
            setMoviesOrSeries(MoviesOrSeries.filter(movie => movie.isForKids))
        } else if (filter === "ALL MOVIES A-Z") {
            setMoviesOrSeries(MoviesOrSeries)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter])

    /*useEffect(() => {
        window.addEventListener("scroll", fixTitleSection);
        header.style.backgroundColor = "rgb(26, 29, 41)" 

        return () => {
            window.removeEventListener("scroll", fixTitleSection);
            if(document.documentElement.scrollTop !== 0){
                header.style.backgroundColor = "rgb(14, 16, 26)";
            }
            else {header.style.backgroundColor = "transparent";}
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])*/


    return(
        <div className='moviesAndSeries-section'>
            <div className='title-section-placeholder'>
                <div /*ref={containerToFix}*/ className='title-section-container'>
                    <div className='title-section-movies-series'>{titleSection}</div>
                    <DropdownMenu setFilter={setFilter} />
                </div>
            </div>

            <div className='section-cards'>
                {moviesOrSeries.map(function iterateMovies(movie, iterator){
                    return(
                        <MovieSerieCard key={`${iterator}-movie-serie-react`} movie={movie} />
                    )
                })}
            </div>
        </div>
    )
}

export default MoviesAndSeries;