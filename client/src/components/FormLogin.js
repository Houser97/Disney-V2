import { useContext, useEffect, useRef, useState } from 'react';
import '../styles/FormLogin.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../assets/hooks/windowSize.js';
import { userContext } from '../App';

const FormLogIn = () => {

    let navigate = useNavigate()
    const windowSize = useWindowSize()

    const [isMobile, setIsMobile] = useState(windowSize.width <= 470)

    const containerForm = useRef(null); //Se usa para mover los formularios
    const leftArrow = useRef(null);
    const rightArrow = useRef(null);

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const setIsUserLogged = useContext(userContext).setIsUserLogged;

    useEffect(() => {
      if(windowSize.width <= 470){
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }, [windowSize])

    useEffect(() => {
        if(password !== null && email !== null){
            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })
            .then(response => response.json())
            .then(response => {
                setEmail(null);
                setPassword(null);
                setIsUserLogged(response)
                navigate('/')
            })
        }
    }, [password])

    const handleSubmit = (e) => {
        e.preventDefault();
        const TranslateX = isMobile ? 280 : 370;
        containerForm.current.style.transform = `translateX(-${TranslateX}px)`
        setEmail([...e.target][0].value);
        leftArrow.current.classList.remove('arrow-hide')
    }

    const handleLastSubmit = (e) => {
        e.preventDefault();
        setPassword([...e.target][0].value);
    }

    const translateFormsArrows = (isLeft, isLast, isBeginning) => {
        const TranslateX = isMobile ? 280 : 370;
        let currentTranslateX = containerForm.current.style.transform;
        currentTranslateX = currentTranslateX.replace(/[^\d.]/g, '')
        currentTranslateX = +currentTranslateX - TranslateX
        containerForm.current.style.transform = `translateX(-${currentTranslateX}px)`
        leftArrow.current.classList.add('arrow-hide')
    }

    return (
        <div className='form-log-in-sign-up'>
            <div ref={leftArrow} className='arrow arrow-left arrow-hide' onClick={() => translateFormsArrows(true, false, true)}>
                <svg className='arrow-svg' viewBox="0 0 24 24">
                    <path fill="gray" d="M11,6V14L7.5,10.5L6.08,11.92L12,17.84L17.92,11.92L16.5,10.5L13,14V6H11M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22Z" />
                </svg>
            </div>

            {/*<div ref={rightArrow}  className='arrow arrow-right' onClick={() => translateFormsArrows(false, true, false)}>
                <svg className='arrow-svg' viewBox="0 0 24 24">
                    <path fill="gray" d="M11,6V14L7.5,10.5L6.08,11.92L12,17.84L17.92,11.92L16.5,10.5L13,14V6H11M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22Z" />
                </svg>
            </div>*/}

            <div className='form-data-carousel'>
                <div ref={containerForm} className='form-container'>
                    <form  className='email-section' onSubmit={handleSubmit}>
                        <div className='input-label-login'>
                            <label htmlFor='login'>Log in with your email</label>
                            <input id='login' className='input-login' type="email" required></input>
                        </div>
                        <div className='button-login-section'>
                            <button className='button-login'>CONTINUE</button>
                        </div>
                    </form>

                    <form className='pdw-section' onSubmit={handleLastSubmit}>
                        <div className='input-label-login'>
                            <label htmlFor='login'>Enter your password</label>
                            <input id='pwd' className='input-login' type="password" required></input>
                        </div>
                        <div className='button-login-section'>
                            <button className='button-login'>CONTINUE</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='sign-up-section'>
                New to Disney+?
                <Link to="/signup" className='link'>
                    <div className='signup-link'>Sign up</div>
                </Link>
            </div>
        </div>
    )
}

export default FormLogIn;