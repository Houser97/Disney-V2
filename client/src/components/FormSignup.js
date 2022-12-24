import {  useContext, useEffect, useRef, useState } from 'react';
import '../styles/FormSignup.css';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../assets/hooks/windowSize.js';
import { userContext } from '../App';

const FormSignup = () => {
    let navigate = useNavigate();

    const errorMessagePwd = useRef(null);
    const emailMessage = useRef(null);
    const leftArrow = useRef(null);

    const containerForm = useRef(null);

    const windowSize = useWindowSize()

    const [isMobile, setIsMobile] = useState(windowSize.width <= 470)    
    const [email, setEmail] = useState(null);
    const [pwd, setPwd] = useState(null);
    const [repeatPwd, setRepeatPwd] = useState(null);
    const [username, setUsername] = useState(null);
    const [validationErrors, setValidationErrors] = useState(null);

    const API = useContext(userContext).API;

    useEffect(() => {
        if(email !== null){
            fetch(`${API}/api/check_email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email})
            }).then(response => response.json())
            .then(data => {
                if(data === null){
                    translateForms();
                    leftArrow.current.classList.remove('arrow-hide')
                    emailMessage.current.style.opacity = 0;
                    setValidationErrors(null)
                } else if(Array.isArray(data)){
                    setValidationErrors(data)
                    emailMessage.current.style.opacity = 0;
                } else {
                    emailMessage.current.style.opacity = 1;
                    setValidationErrors(null)
                }
            })
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email])

    useEffect(() => {
        if(pwd !== null){
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
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pwd])

    useEffect(() => {
        if(pwd !== repeatPwd){
            errorMessagePwd.current.style.display = "flex";
        } else if(pwd == repeatPwd && pwd !== null){
            translateForms();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [repeatPwd])

    useEffect(() => {
        if(username && pwd && email){
            fetch(`${API}/api/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, pwd, username})
            }).then(response => response.json())
            .then(response => {
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
        };
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
        let currentTranslateX = containerForm.current.style.transform;
        currentTranslateX = currentTranslateX.replace(/[^\d.]/g, '')
        currentTranslateX = +currentTranslateX + TranslateX
        containerForm.current.style.transform = `translateX(-${currentTranslateX}px)`
    }

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        setEmail([...e.target][0].value);
        //e.target.style.opacity = 0;
    }

    const handlePwdSubmit = (e) => {
        e.preventDefault();
        setPwd([...e.target][0].value);
    }

    const handleRepeatPwdSubmit = (e) => {
        e.preventDefault();
        setRepeatPwd([...e.target][0].value)
    }

    const handleLastSubmit = (e) => {
        e.preventDefault();
        setUsername([...e.target][0].value)
    }

    const translateFormsLeft = () => {
        const TranslateX = isMobile ? 280 : 370;
        let currentTranslateX = containerForm.current.style.transform;
        currentTranslateX = currentTranslateX.replace(/[^\d.]/g, '')
        currentTranslateX = +currentTranslateX - TranslateX
        if(currentTranslateX === 0){
            leftArrow.current.classList.add('arrow-hide');
            containerForm.current.style.transform = `translateX(-${currentTranslateX}px)`;
        } else if(currentTranslateX < 0){
            leftArrow.current.classList.add('arrow-hide')
        } else {
            containerForm.current.style.transform = `translateX(-${currentTranslateX}px)`;
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
                    <form className='email-section' onSubmit={handleEmailSubmit}>
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

                    <form className='pdw-section' onSubmit={handlePwdSubmit}>
                        <div className='input-label-login'>
                            <label htmlFor='login'>Enter your password</label>
                            <input id='pwd' className='input-login' type="password" minLength="6" required></input>
                        </div>
                        <div className='button-login-section'>
                            <button className='button-login'>CONTINUE</button>
                        </div>
                    </form>

                    <form className='pdw-section' onSubmit={handleRepeatPwdSubmit}>
                        <div className='input-label-login pwd-repeat'>
                            <label htmlFor='login'>Repeat your password</label>
                            <input id='pwdRepeat' className='input-login' type="password" required></input>
                            <div ref={errorMessagePwd} className='pwds-incorrect'>Passwords do not match</div>
                        </div>
                        <div className='button-login-section'>
                            <button className='button-login'>CONTINUE</button>
                        </div>
                    </form>

                    <form className='pdw-section-repeat username' onSubmit={handleLastSubmit}>
                        <div className='input-label-login username'>
                            <label htmlFor='username'>Enter new username</label>
                            <input id='username' className='input-login' type="text" required></input>
                        </div>
                        <div className='button-login-section'>
                            <button className='button-login'>CONTINUE</button>
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