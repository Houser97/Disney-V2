import '../styles/Search.css';
import {movies} from '../assets/constants/index.js';
import { useState } from 'react';
import MovieSerieCard from './MovieSerieCard';

const Search = () => {

    const [filteredMovies, setFilteredMovies] = useState(movies);

    const filterMovies = (e) => {
        const filter = e.target.value.toLowerCase().replace(/\s/g, '');
        let moviesToDisplay = movies.filter(movie => {
            const title = movie.title.toLowerCase().replace(/\s/g, '');
            return title.includes(filter);
        })
        setFilteredMovies(moviesToDisplay)
    }

    const handleSubmit = (e) => {
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
                    <form className='search-form' onSubmit={handleSubmit}>
                        <input id='search-movie' className='input' name='search' placeholder='Search by title' onChange={filterMovies} autoComplete = "off"></input>
                        <div className='effect-background'></div>
                    </form>
                </div>
            </div>

            <div className='filtered-movies' id = 'filtered-movies'>
                {
                    filteredMovies.map(function iterateMovies(movie, iterator){
                        return(
                            <MovieSerieCard key={iterator} movie={movie}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Search;