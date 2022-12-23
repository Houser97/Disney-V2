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

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const setIsUserLogged = useContext(userContext)[1]

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
        e.target.style.opacity = 0;
        setEmail([...e.target][0].value)
    }

    const handleLastSubmit = (e) => {
        e.preventDefault();
        setPassword([...e.target][0].value);
    }

    return (
        <div className='form-log-in-sign-up'>
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