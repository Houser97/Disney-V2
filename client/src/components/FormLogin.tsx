import { useContext, useEffect, useRef, useState } from 'react';
import '../styles/FormLogin.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../assets/hooks/windowSize.js';
import { userContext } from '../App';
import Loading from './Loading';

const FormLogIn = () => {

    let navigate = useNavigate()
    const windowSize = useWindowSize()

    const [isMobile, setIsMobile] = useState(windowSize.width <= 470)

    const containerForm = useRef<HTMLDivElement | null>(null); //Se usa para mover los formularios
    const leftArrow = useRef<HTMLDivElement | null>(null);

    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [validationErrors, setValidationErrors] = useState<string | null>(null)

    // Estado para deshabilitar botón de Login cuando la petición está en curso
    const [disableSubmit, setDisableSubmit] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const setIsUserLogged = useContext(userContext).setIsUserLogged;
    const API = useContext(userContext).API;

    useEffect(() => {
      if(windowSize.width <= 470){
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }, [windowSize])

    useEffect(() => {
        if(password !== null && email !== null){
            setIsLoading(true)
            setDisableSubmit(true)
            fetch(`${API}/api/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })
            .then(response => response.json())
            .then(response => {
                setIsLoading(false)
                setDisableSubmit(false)
                if(response){
                    setEmail(null);
                    setPassword(null);
                    setIsUserLogged(response)
                    navigate('/')
                } else {
                    setValidationErrors('Email or password incorrect')
                }
            })
        }
        // eslint-disable-next-line
    }, [password])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const TranslateX = isMobile ? 280 : 370;
        // Se valida que no sea null para evitar errores con TypeScript.
        if(containerForm.current){
            containerForm.current.style.transform = `translateX(-${TranslateX}px)`
        }
        /*El error se produce porque e.target es de tipo EventTarget, y no es un array. 
        La forma correcta de acceder al valor del campo del formulario es a través del índice
        de los elementos hijos del formulario, usando HTMLFormElement.elements. */
        //const email = [...e.target][0].value
        let email = (e.currentTarget.elements[0] as HTMLInputElement).value;
        setEmail(email);
        email = ''
        if(leftArrow.current){
            leftArrow.current.classList.remove('arrow-hide');
        }
    }

    const handleLastSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let pwd = (e.currentTarget.elements[0] as HTMLInputElement).value
        setPassword(pwd);
        pwd = ''
    }

    const translateFormsLeft = () => {
        const TranslateX = isMobile ? 280 : 370;
        if(!containerForm.current) return
        let currentTranslateX = containerForm.current.style.transform;
        currentTranslateX = currentTranslateX.replace(/[^\d.]/g, '')
        const translateXValue = +currentTranslateX - TranslateX
        containerForm.current.style.transform = `translateX(-${translateXValue}px)`
        if(leftArrow.current){
            leftArrow.current.classList.add('arrow-hide')
        }
    }

    const buttonContent = () => {
        if(isLoading) return <Loading />
        return 'CONTINUE'
    }

    return (
        <div className='form-log-in-sign-up'>
            <div ref={leftArrow} className='arrow arrow-left arrow-hide' onClick={() => translateFormsLeft()}>
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
                            <button className='button-login' disabled = {disableSubmit}>
                                {
                                   buttonContent() 
                                } 
                            </button>
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
            <ul className='error-messages'>
                {validationErrors ? 
                (
                   <li className='li-error-msg'>{validationErrors}</li>
                ):(
                    <div className='no-errors-msg'></div>
                )
            }
            </ul>
        </div>
    )
}

export default FormLogIn;