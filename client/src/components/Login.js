import '../styles/Login.css';
import logo from '../assets/images/disney-logo.png';
import FormLogin from './FormLogin';
import FormSignup from './FormSignup';
import { userContext } from '../App';
import { useContext } from 'react';

const Login = ({formToOpen}) => {

    const isUser = useContext(userContext).isUserLogged;

    return(
        <div className='log-in-section'>
            <a className='image-log-in' href='/'>
                <img src={logo} alt = "disney-logo" className='disney-logo-login'></img>
            </a>
            {isUser ? (<div className='user-already-logged'>You are already logged in</div>):(
                formToOpen === "1" ? <FormLogin /> : <FormSignup />
            )}
            
        </div>
    )
}

export default Login;