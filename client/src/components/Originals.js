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
            originalsPlaceholder.current.style.height = "140px";
            originalsPlaceholder.current.style.transition = "0.250s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s";

            originalsContainer.current.style.fontSize = "30px";
            originalsContainer.current.style.height = originalsPlaceholder.current.style.height;
            originalsContainer.current.style.position = "fixed";
            originalsContainer.current.style.transition = "0.250s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s";
        } else {
            originalsPlaceholder.current.style.height = "230px";
            originalsPlaceholder.current.style.transition = "0.35s ease-in-out 0s";

            originalsContainer.current.style.height = "230px";
            originalsContainer.current.style.fontSize = "50px";
            originalsContainer.current.style.position = "relative";
            originalsContainer.current.style.transition = "0.35s ease-in-out 0s";
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
            <div ref={originalsPlaceholder} className='originals-placeholder'>
                <div ref={originalsContainer} className='originals-title'>
                    ORIGINALS
                </div>
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