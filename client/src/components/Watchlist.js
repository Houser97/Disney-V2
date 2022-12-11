import '../styles/Watchlist.css';
import MovieSerieCard from './MovieSerieCard';

const Watchlist = ({userID}) => {

    return(
        <div className='watchlist-section'>
            {userID === null ? (
                <div className='watchlist-userID-null'>
                    <h3>Log In to start adding movies to the watchlist</h3>
                </div>
            ):( <div>Nothing</div>/*
                
                    (moviesInWatchList.length === 0) ? (
                        <div className='watchlist-userID-noNull'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
                                <g fill="none" fillRule="evenodd" opacity=".2">
                                    <circle cx="60" cy="60" r="57.5" stroke="#FFF" strokeWidth="5"/>
                                    <path fill="#F9F9F9" d="M63.626 57.254h17.739a3.5 3.5 0 0 1 3.5 3.5v.434a3.5 3.5 0 0 1-3.5 3.5h-17.74v17.739a3.5 3.5 0 0 1-3.5 3.5h-.433a3.5 3.5 0 0 1-3.5-3.5v-17.74H38.453a3.5 3.5 0 0 1-3.5-3.5v-.433a3.5 3.5 0 0 1 3.5-3.5h17.74V39.515a3.5 3.5 0 0 1 3.5-3.5h.433a3.5 3.5 0 0 1 3.5 3.5v17.739z"/>
                                </g>
                            </svg>
                            <h3>Your watchlist is empty</h3>
                            <div className='empty-watchlist-description'>Content you add to your watchlist will appear here.</div>
                        </div>
                    ):(
                        <div className='watchlist-movies'>
                            <h1 className='watchlist-title' > Watchlist</h1>
                            <div className='section-cards'>
                                {
                                    moviesInWatchList.map(function watchlist(movie, i){
                                        return(
                                            <MovieCard  key={`${i}-watchlist-movie-serie`} movie={movie} imageFirestore={movie}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                
            */)}
        </div>
    )
}

export default Watchlist;