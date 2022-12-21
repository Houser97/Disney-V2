import '../styles/MovieSerieCard.css';
/*import { userContext } from '../App';*/
import { useContext, useEffect, useState } from 'react';
import { userContext } from '../App';

const MovieSerieCard = ({movie, imageFirestore}) => {
     /*

    useEffect(() => {
        if(imageFirestore !== undefined) setShouldPlaceCheckedSVG("yes");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[imageFirestore])
    
    /*let userID = useContext(userContext)[0];
    const setMoviesInWatchList = useContext(userContext)[1];
    let moviesInWatchList = useContext(userContext)[2];
    const URL = useContext(userContext)[6];
    
    // Colocar palomita si imagen se encuentra ya en la lista por ver //
    useEffect(() => {
       
            let moviesReference = [];
            let moviesInWatchListHelper = [...moviesInWatchList];
            // /Disney-website/ contiene 16 caracteres
            // http:// contiene 7 caracteres, pero no hace falta contemplarlo.
            const lengthToCutURL = URL.length -16;
            moviesInWatchListHelper.forEach(link => {
                
                moviesReference.push(link.slice(lengthToCutURL))}
            )
            if(moviesReference.indexOf(image) >= 0){
                setShouldPlaceCheckedSVG("yes");
            }
            //console.log(moviesReference)
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldPlaceCheckedSVG, moviesInWatchList])
    */

    const isUserLogged = useContext(userContext)[0]
    const [isInWatchList, setIsInWatchList] = useState(false);

    const handleWatchList = () => {
        /*const imageMovie = e.target.parentNode.childNodes[1].src;*/
        if(isInWatchList) {
            setIsInWatchList(false);
        } else {
            setIsInWatchList(true)
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