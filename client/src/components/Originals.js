import '../styles/Originals.css';
import { useEffect, useRef, useState } from 'react';
import MovieSerieCard from './MovieSerieCard'
import { movies } from '../assets/constants';

const Originals = ({}) => {
    const [originals, setOriginals] = useState(movies)
    const originalsContainer = useRef(null);
    const originalsPlaceholder = useRef(null);

    const changeTitle = () => {
        if(document.documentElement.scrollTop !== 0){
            originalsPlaceholder.current.style.transform = 'scaleY(0.5)'
            originalsContainer.current.style.transform = 'scale(0.5)'
        } else {
            originalsPlaceholder.current.style.transform = 'scaleY(1)'
            originalsContainer.current.style.transform = 'scale(1)'
        }
    }

    useEffect(()=>{
        const originalsArray = originals.filter(movie => movie.isOriginal === true);
        setOriginals(originalsArray);

        window.addEventListener("scroll", changeTitle)


        return () => {
            window.removeEventListener("scroll", changeTitle);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className='originals-section'>
            <div ref={originalsPlaceholder} className='originals-placeholder'></div>
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
                            <MovieSerieCard key={`${iterator}-original`} movie={movie} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Originals;