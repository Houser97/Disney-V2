import React, {  useContext, useEffect, useRef, useState } from 'react';
import '../styles/FormSignup.css';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../assets/hooks/windowSize.js';
import { userContext } from '../App';
import Loading from './Loading';

interface validationErrors {
    location: string,
    msg: string,
    param: string,
    value: string
}

const FormSignup = () => {
    let navigate = useNavigate();

    const errorMessagePwd = useRef<HTMLDivElement | null>(null);
    const emailMessage = useRef<HTMLDivElement | null>(null); // Div que contiene mensaje para indicar que el email ya ha sido usado.
    const leftArrow = useRef<HTMLDivElement | null>(null);

    const containerForm = useRef<HTMLDivElement | null>(null);

    const windowSize = useWindowSize()

    const [isMobile, setIsMobile] = useState(windowSize.width <= 470)    
    const [email, setEmail] = useState<string | null>(null);
    const [pwd, setPwd] = useState<string | null>(null);
    const [repeatPwd, setRepeatPwd] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [validationErrors, setValidationErrors] = useState<validationErrors[] | null>(null);

    // Estado para deshabilitar botón de Login cuando la petición está en curso
    const [disableSubmit, setDisableSubmit] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const API = useContext(userContext).API;

    useEffect(() => {
        if(!email) return undefined;
        fetch(`${API}/api/check_email`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email})
        }).then(response => response.json())
        .then(data => {
            if(data === null){
                translateForms();
                leftArrow.current?.classList.remove('arrow-hide')
                if(emailMessage.current){
                    emailMessage.current.style.opacity = '0';
                }
                setValidationErrors(null)
            } else if(Array.isArray(data)){
                setValidationErrors(data)
                if(emailMessage.current){
                    emailMessage.current.style.opacity = '0';
                }
            } else {
                if(emailMessage.current){
                    emailMessage.current.style.opacity = '1';
                }
                setValidationErrors(null)
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email])

    useEffect(() => {
        if(!pwd) return undefined;
        fetch(`${API}/api/check_password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({pwd})
        }).then(response => response.json())
        .then(data => {
            if(Array.isArray(data)){
                setValidationErrors(data)
            } else {
                setValidationErrors(null)
                translateForms();
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pwd])

    useEffect(() => {
        if(pwd !== repeatPwd && errorMessagePwd.current){
            errorMessagePwd.current.style.display = "flex";
        } else if(pwd == repeatPwd && pwd !== null){
            translateForms();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [repeatPwd])

    useEffect(() => {
        if(!username && !pwd && !email) return undefined;
        setIsLoading(true);
        setDisableSubmit(true)
        fetch(`${API}/api/signup`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, pwd, username})
        }).then(response => response.json())
        .then(response => {
            setIsLoading(false);
            setDisableSubmit(false)
            if( !Array.isArray(response)) {
                window.sessionStorage.setItem('user', JSON.stringify(response))
                setEmail(null);
                setPwd(null);
                setRepeatPwd(null);
                setUsername(null);
                navigate("/avatar")
            } else {
                setValidationErrors(response);
            }
        })
    }, [username])
    
    useEffect(() => {
        if(windowSize.width <= 470){
          setIsMobile(true)
        } else {
          setIsMobile(false)
        }
      }, [windowSize])

    const translateForms = () => {
        const TranslateX = isMobile ? 280 : 370;
        if(!containerForm.current) return;
        let currentTranslateX = containerForm.current.style.transform;
        currentTranslateX = currentTranslateX.replace(/[^\d.]/g, '')
        const translateXValue = +currentTranslateX + TranslateX
        containerForm.current.style.transform = `translateX(-${translateXValue}px)`
    }

    const handleFormsSubmit = (e: React.FormEvent<HTMLFormElement>, inputId:string) => {
        e.preventDefault();
        let inputValue = (e.currentTarget.elements.namedItem(inputId) as HTMLInputElement).value

        switch(inputId){
            case 'login':
                setEmail(inputValue);
                break;
            case 'pwd':
                setPwd(inputValue);
                break;
            case 'pwdRepeat':
                setRepeatPwd(inputValue);
                break;
            default:
                setUsername(inputValue)
        }

        inputValue = ''
    }

    const buttonContent = () => {
        if(isLoading) return <Loading />
        return 'CONTINUE'
    }

    const translateFormsLeft = () => {
        const TranslateX = isMobile ? 280 : 370;
        if(!containerForm.current) return;
        let currentTranslateX = containerForm.current.style.transform;
        currentTranslateX = currentTranslateX.replace(/[^\d.]/g, '')
        const translateXValue = +currentTranslateX - TranslateX
        if(translateXValue === 0){
            leftArrow.current?.classList.add('arrow-hide');
            containerForm.current.style.transform = `translateX(-${translateXValue}px)`;
        } else if(translateXValue < 0){
            leftArrow.current?.classList.add('arrow-hide')
        } else {
            containerForm.current.style.transform = `translateX(-${translateXValue}px)`;
        }
    }

    return(
        <div className='form-log-in-sign-up'>
            <div ref={leftArrow} className='arrow arrow-left arrow-hide' onClick={() => translateFormsLeft()}>
                <svg className='arrow-svg' viewBox="0 0 24 24">
                    <path fill="gray" d="M11,6V14L7.5,10.5L6.08,11.92L12,17.84L17.92,11.92L16.5,10.5L13,14V6H11M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22Z" />
                </svg>
            </div>
            <div className='form-data-carousel'>
                <div ref={containerForm} className='form-container'>
                    <form className='email-section' onSubmit={e => handleFormsSubmit(e, 'login')}>
                        <div className='input-label-login'>
                            <label htmlFor='login'>Enter your email</label>
                            <input id='login' className='input-login' type="email" required></input>
                        </div>
                        <div ref={emailMessage} className='error-email'>
                            This email has already been used.
                        </div>
                        <div className='button-login-section'>
                            <button className='button-login'>CONTINUE</button>
                        </div>
                    </form>

                    <form className='pdw-section' onSubmit={e => handleFormsSubmit(e, 'pwd')}>
                        <div className='input-label-login'>
                            <label htmlFor='login'>Enter your password</label>
                            <input id='pwd' className='input-login' type="password" minLength={6} required></input>
                        </div>
                        <div className='button-login-section'>
                            <button className='button-login'>CONTINUE</button>
                        </div>
                    </form>

                    <form className='pdw-section' onSubmit={e => handleFormsSubmit(e, 'pwdRepeat')}>
                        <div className='input-label-login pwd-repeat'>
                            <label htmlFor='login'>Repeat your password</label>
                            <input id='pwdRepeat' className='input-login' type="password" required></input>
                            <div ref={errorMessagePwd} className='pwds-incorrect'>Passwords do not match</div>
                        </div>
                        <div className='button-login-section'>
                            <button className='button-login'>CONTINUE</button>
                        </div>
                    </form>

                    <form className='pdw-section-repeat username' onSubmit={e => handleFormsSubmit(e, 'username')}>
                        <div className='input-label-login username'>
                            <label htmlFor='username'>Enter new username</label>
                            <input id='username' className='input-login' type="text" required></input>
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
            <ul className='error-messages'>
                {validationErrors ? 
                (
                    validationErrors.map((error, i) => {
                        return(
                            <li key={`error-msg${i}`} className='li-error-msg'>{error.msg}</li>
                        )
                    })
                ):(
                    <div className='no-errors-msg'></div>
                )
            }
            </ul>
        </div>
    )
}

export default FormSignup;