import '../styles/Search.css';
import {movies} from '../assets/constants/index.js';
import React, { useState } from 'react';
import MovieSerieCard from './MovieSerieCard';
import { Link } from 'react-router-dom';

const Search = () => {

    const [filteredMovies, setFilteredMovies] = useState(movies);

    const filterMovies = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filter = e.currentTarget.value.toLowerCase().replace(/\s/g, '');
        let moviesToDisplay = movies.filter(movie => {
            const title = movie.title.toLowerCase().replace(/\s/g, '');
            return title.includes(filter);
        })
        setFilteredMovies(moviesToDisplay)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return(
        <div className='search-section'>
            <div className='search-container'>
                <form className='search-form' onSubmit={handleSubmit}>
                    <input id='search-movie' className='input' name='search' placeholder='Search by title' onChange={filterMovies} autoComplete = "off"></input>
                    <div className='effect-background'></div>
                </form>
            </div>

            <div className='container-sm-search'>
                <div className='search-container-sm'>
                    <form className='search-form' onSubmit={handleSubmit}>
                        <svg className='magnify' viewBox="0 0 24 24">
                            <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg>
                        <input id='search-movie' className='input' name='search' placeholder='Search' onChange={filterMovies} autoComplete = "off"></input>
                    </form>
                </div>
                <div className='search-container-sm-nav'>
                    <Link className='link-nav' to = "/originals">
                        <div className='nav-search'>
                            <div className='svg-option-search'>
                                <svg viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                                </svg>
                            </div>
                            <div className='text-option-nav'>Originals<span className='span-style'></span></div> 
                        </div>
                    </Link>
                    <Link className='link-nav' to = "/movies">
                        <div className='nav-search'>
                            <div className='svg-option-search'>
                                <svg viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A2.5,2.5 0 0,0 9.5,6.5A2.5,2.5 0 0,0 12,9A2.5,2.5 0 0,0 14.5,6.5A2.5,2.5 0 0,0 12,4M4.4,9.53C3.97,10.84 4.69,12.25 6,12.68C7.32,13.1 8.73,12.39 9.15,11.07C9.58,9.76 8.86,8.35 7.55,7.92C6.24,7.5 4.82,8.21 4.4,9.53M19.61,9.5C19.18,8.21 17.77,7.5 16.46,7.92C15.14,8.34 14.42,9.75 14.85,11.07C15.28,12.38 16.69,13.1 18,12.67C19.31,12.25 20.03,10.83 19.61,9.5M7.31,18.46C8.42,19.28 10,19.03 10.8,17.91C11.61,16.79 11.36,15.23 10.24,14.42C9.13,13.61 7.56,13.86 6.75,14.97C5.94,16.09 6.19,17.65 7.31,18.46M16.7,18.46C17.82,17.65 18.07,16.09 17.26,14.97C16.45,13.85 14.88,13.6 13.77,14.42C12.65,15.23 12.4,16.79 13.21,17.91C14,19.03 15.59,19.27 16.7,18.46M12,10.5A1.5,1.5 0 0,0 10.5,12A1.5,1.5 0 0,0 12,13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 12,10.5Z" />
                                </svg>
                            </div>
                            <div className='text-option-nav'>Movies<span className='span-style'></span></div> 
                        </div>
                    </Link>
                    <Link className='link-nav' to = "/series">
                        <div className='nav-search'>
                            <div className='svg-option-search'>
                                <svg viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M8.16,3L6.75,4.41L9.34,7H4C2.89,7 2,7.89 2,9V19C2,20.11 2.89,21 4,21H20C21.11,21 22,20.11 22,19V9C22,7.89 21.11,7 20,7H14.66L17.25,4.41L15.84,3L12,6.84L8.16,3M4,9H17V19H4V9M19.5,9A1,1 0 0,1 20.5,10A1,1 0 0,1 19.5,11A1,1 0 0,1 18.5,10A1,1 0 0,1 19.5,9M19.5,12A1,1 0 0,1 20.5,13A1,1 0 0,1 19.5,14A1,1 0 0,1 18.5,13A1,1 0 0,1 19.5,12Z" />
                                </svg>
                            </div>
                            <div className='text-option-nav'>Series<span className='span-style'></span></div> 
                        </div>
                    </Link>
                </div>
            </div>

            <div className='filtered-movies' id = 'filtered-movies'>
                {
                    filteredMovies.map(function iterateMovies(movie){
                        return(
                            <MovieSerieCard key={`search-${movie.title}`} movie={movie}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Search;