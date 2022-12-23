import '../styles/Login.css';
import logo from '../assets/images/disney-logo.png';
import FormLogin from './FormLogin';
import FormSignup from './FormSignup';

const Login = ({formToOpen}) => {
    return(
        <div className='log-in-section'>
            <a className='image-log-in' href='/'>
                <img src={logo} alt = "disney-logo" className='disney-logo-login'></img>
            </a>
            {formToOpen === "1" ? <FormLogin /> : <FormSignup />}
        </div>
    )
}

export default Login;