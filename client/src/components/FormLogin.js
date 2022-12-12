import { useEffect, useRef, useState } from 'react';
import '../styles/FormLogin.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const FormLogIn = ({setUserID, userID}) => {

    let navigate = useNavigate()

    const emailSection = useRef(null);
    const pwdSection = useRef(null);
/*
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        if(userData.length === 2){
            const email = userData[0];
            console.log(email);
            const pwd = userData[1];
            console.log(pwd);
            navigate("/")
        }
        //console.log(userData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData])
*/
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.style.marginLeft = "-380px"
        e.target.style.opacity = 0;
        
        const formArray = [...e.target];
        //console.log(formArray)
        const input = formArray[0].value;

        /*setUserData(oldArray => [...oldArray, input]);*/
    }

    const handleLastSubmit = (e) => {
        e.preventDefault();

        const formArray = [...e.target];
        const input = formArray[0].value;

        /*setUserData(oldArray => [...oldArray, input]);*/

    }

    return (
        <div className='form-log-in-sign-up'>
            <div className='form-data-carousel'>
                <form ref={emailSection} className='email-section' onSubmit={handleSubmit}>
                    <div className='input-label-login'>
                        <label htmlFor='login'>Log in with your email</label>
                        <input id='login' className='input-login' type="email" required></input>
                    </div>
                    <div className='button-login-section'>
                        <button className='button-login'>CONTINUE</button>
                    </div>
                </form>

                <form ref={pwdSection} className='pdw-section' onSubmit={handleLastSubmit}>
                    <div className='input-label-login'>
                        <label htmlFor='login'>Enter your password</label>
                        <input id='pwd' className='input-login' type="password" required></input>
                    </div>
                    <div className='button-login-section'>
                        <button className='button-login'>CONTINUE</button>
                    </div>
                </form>
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