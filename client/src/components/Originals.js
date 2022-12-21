import '../styles/Originals.css';
import { useEffect, useRef, useState } from 'react';
import MovieSerieCard from './MovieSerieCard'
import { movies } from '../assets/constants';

const Originals = ({}) => {
    const originals = movies.filter(movie => movie.isOriginal === true);
    const originalsContainer = useRef(null);

    const changeTitle = () => {
        if(document.documentElement.scrollTop !== 0){
            originalsContainer.current.style.transform = 'scale(0.5)'
        } else {
            originalsContainer.current.style.transform = 'scale(1)'
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", changeTitle)

        return () => {
            window.removeEventListener("scroll", changeTitle);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className='originals-section'>
            <div className='originals-placeholder'></div>
            {/*El elemento anterior sirve para como fondo para que las tarjetas se recorten
            alcanzando el título de ORIGINALS, ya que ORIGINALS se encoge tanto vertical como horizontalmente,
            lo cual requiere que haya un contenedor abajo de width 100% que pueda hacerla de recorte. */}
            <div ref={originalsContainer} className='originals-title'>
                ORIGINALS
            </div>

            <div className='originals-cards-section'>
                {
                    originals.map(function iterateMovies(movie, iterator){
                        return(
                            <MovieSerieCard key={`original-movie-card-${iterator}`} movie={movie} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Originals;