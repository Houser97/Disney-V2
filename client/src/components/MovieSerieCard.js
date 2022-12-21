import '../styles/MovieSerieCard.css';
/*import { userContext } from '../App';*/
import { useContext, useEffect, useState } from 'react';
import { userContext } from '../App';

const MovieSerieCard = ({movie}) => {

    const isUserLogged = useContext(userContext)[0]
    const [isInWatchList, setIsInWatchList] = useState(false);

    const watchlist = useContext(userContext)[2]
    const setWatchlist = useContext(userContext)[3]

    useEffect(() => {
        if(watchlist.length > 0){      
            const isMovieInWatchlist = watchlist.includes(movie.ref)
            isMovieInWatchlist ? setIsInWatchList(true):setIsInWatchList(false)
        }
    }, [watchlist])
    
    
    const handleWatchList = () => {
        /*const imageMovie = e.target.parentNode.childNodes[1].src;*/
        if(isInWatchList) {
            setIsInWatchList(false);
            setWatchlist(()=> watchlist.filter(watchlist => movie.ref !== watchlist))
        } else {
            setIsInWatchList(true)
            setWatchlist(oldArray => [...oldArray, movie.ref])
        }
    }

    return(
        <div className='movie-card' id='movie-card'>
            <div className='effect-border'></div>
            <img src= {movie.image} alt = "Daredevil" className='image-movie-card'></img>
            {
                isUserLogged ? (
                    <div className='add-icon-movieCard' onClick={handleWatchList}>
                        {
                            !isInWatchList ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 120 120">
                                <g fill="none" fillRule="evenodd" opacity=".2">
                                    <circle cx="60" cy="60" r="57.5" stroke="#FFF" strokeWidth="5"/>
                                    <path fill="#F9F9F9" d="M63.626 57.254h17.739a3.5 3.5 0 0 1 3.5 3.5v.434a3.5 3.5 0 0 1-3.5 3.5h-17.74v17.739a3.5 3.5 0 0 1-3.5 3.5h-.433a3.5 3.5 0 0 1-3.5-3.5v-17.74H38.453a3.5 3.5 0 0 1-3.5-3.5v-.433a3.5 3.5 0 0 1 3.5-3.5h17.74V39.515a3.5 3.5 0 0 1 3.5-3.5h.433a3.5 3.5 0 0 1 3.5 3.5v17.739z"/>
                                </g>
                            </svg>
                            ):(                       
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'><path fill='#0072D2' d='M12.935 26.59a1.472 1.472 0 0 0 2.038 0l13.105-14.452a1.37 1.37 0 0 0 0-1.978 1.472 1.472 0 0 0-2.038 0L13.954 23.63 9.21 19.018a1.472 1.472 0 0 0-2.038 0 1.37 1.37 0 0 0 0 1.978l5.763 5.594z'/></svg>
                            )
                        }
                    </div>
                ) : (
                    <div className='add-icon-userID-null'>
                        nothing
                    </div>
                )
            }
        </div>
    )
}

export default MovieSerieCard;