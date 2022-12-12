import {  useEffect, useRef, useState } from 'react';
import '../styles/FormSignup.css';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../assets/hooks/windowSize.js';

const FormSignup = ({setUsername1}) => {
    let navigate = useNavigate();

    const emailSection = useRef(null);
    const pwdSection = useRef(null);
    const pwdSectionRepeat = useRef(null);
    const errorMessagePwd = useRef(null);

    const containerForm = useRef(null);

    const windowSize = useWindowSize()

    const [isMobile, setIsMobile] = useState(windowSize.width <= 470)
    let currentTranslateX = 0;

    useEffect(() => {
      if(windowSize.width <= 470){
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }, [windowSize])
    

    const [userData, setUserData] = useState([]); 

    useEffect(() => {
        if(userData.length === 3){
            const email = userData[0];
            const pwd = userData[1];
            const pwdRepat = userData[2];

            if(pwd !== pwdRepat){
                errorMessagePwd.current.style.display = "flex";
                setUserData([...userData.slice(0, 2)]);
            } else if(pwd === pwdRepat) {
                translateForms();
                /*createUser(email, pwd);*/
            }
        }
        //console.log(userData)//
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData])

    const translateForms = () => {
        const TranslateX = isMobile ? 280 : 370;
        let currentTranslateX = containerForm.current.style.transform;
        currentTranslateX = currentTranslateX.replace(/[^\d.]/g, '')
        currentTranslateX = +currentTranslateX + TranslateX
        containerForm.current.style.transform = `translateX(-${currentTranslateX}px)`
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        translateForms();
        e.target.style.opacity = 0;
        const formArray = [...e.target];
        const input = formArray[0].value;
        setUserData(oldArray => [...oldArray, input]);
    }

    const handlePwdSubmit = (e) => {
        e.preventDefault();
        const formArray = [...e.target];
        const input = formArray[0].value;
        setUserData(oldArray => [...oldArray, input]);
    }

    const handleLastSubmit = (e) => {
        e.preventDefault();
        const formArray = [...e.target];
        const input = formArray[0].value;
        setUsername1(input);
        setUserData(oldArray => [...oldArray, input]);
        navigate("/avatar");
    }

    return(
        <div className='form-log-in-sign-up'>
                <div className='form-data-carousel'>
                    <div ref={containerForm} className='form-container'>
                        <form ref={emailSection} className='email-section' onSubmit={handleSubmit}>
                            <div className='input-label-login'>
                                <label htmlFor='login'>Enter your email</label>
                                <input id='login' className='input-login' type="email" required></input>
                            </div>
                            <div className='button-login-section'>
                                <button className='button-login'>CONTINUE</button>
                            </div>
                        </form>

                        <form ref={pwdSection} className='pdw-section' onSubmit={handleSubmit}>
                            <div className='input-label-login'>
                                <label htmlFor='login'>Enter your password</label>
                                <input id='pwd' className='input-login' type="password" minLength="6" required></input>
                            </div>
                            <div className='button-login-section'>
                                <button className='button-login'>CONTINUE</button>
                            </div>
                        </form>

                        <form ref={pwdSectionRepeat} className='pdw-section' onSubmit={handlePwdSubmit}>
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