import {  useEffect, useRef, useState } from 'react';
import '../styles/FormSignup.css';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../assets/hooks/windowSize.js';

const FormSignup = () => {
    let navigate = useNavigate();

    const emailSection = useRef(null);
    const pwdSection = useRef(null);
    const pwdSectionRepeat = useRef(null);
    const errorMessagePwd = useRef(null);
    const emailMessage = useRef(null);

    const containerForm = useRef(null);

    const windowSize = useWindowSize()

    const [isMobile, setIsMobile] = useState(windowSize.width <= 470)    
    const [email, setEmail] = useState(null);
    const [pwd, setPwd] = useState(null);
    const [repeatPwd, setRepeatPwd] = useState(null);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        if(email !== null){
            fetch('/api/check_email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email})
            }).then(response => response.json())
            .then(data => {
                if(data === null){
                    translateForms();
                    emailMessage.current.style.opacity = 0;
                } else {
                    emailMessage.current.style.opacity = 1;
                }
            })
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email])

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
            fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, pwd, username})
            }).then(response => response.json())
            .then(response => {
                if( typeof(response) === 'object') {
                    window.sessionStorage.setItem('user', JSON.stringify(response))
                    setEmail(null);
                    setPwd(null);
                    setRepeatPwd(null);
                    setUsername(null);
                    navigate("/avatar")
                };
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
        translateForms();
        e.target.style.opacity = 0;
    }

    const handleRepeatPwdSubmit = (e) => {
        e.preventDefault();
        setRepeatPwd([...e.target][0].value)
    }

    const handleLastSubmit = (e) => {
        e.preventDefault();
        setUsername([...e.target][0].value)
    }

    return(
        <div className='form-log-in-sign-up'>
                <div className='form-data-carousel'>
                    <div ref={containerForm} className='form-container'>
                        <form ref={emailSection} className='email-section' onSubmit={handleEmailSubmit}>
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

                        <form ref={pwdSection} className='pdw-section' onSubmit={handlePwdSubmit}>
                            <div className='input-label-login'>
                                <label htmlFor='login'>Enter your password</label>
                                <input id='pwd' className='input-login' type="password" minLength="6" required></input>
                            </div>
                            <div className='button-login-section'>
                                <button className='button-login'>CONTINUE</button>
                            </div>
                        </form>

                        <form ref={pwdSectionRepeat} className='pdw-section' onSubmit={handleRepeatPwdSubmit}>
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
            </div>
    )
}

export default FormSignup;