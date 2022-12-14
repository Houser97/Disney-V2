import '../styles/Login.css';
import logo from '../assets/images/disney-logo.png';
import FormLogin from './FormLogin';
import FormSignup from './FormSignup';

const Login = ({formToOpen, setUsername1, setUserID, userID}) => {
    return(
        <div className='log-in-section'>
            <a className='image-log-in' href='/'>
                <img src={logo} alt = "disney-logo" className='disney-logo-login'></img>
            </a>
            {formToOpen === "1" ? <FormLogin setUserID ={setUserID} userID = {userID} /> : <FormSignup setUsername1 = {setUsername1} />}
        </div>
    )
}

export default Login;