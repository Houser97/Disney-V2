import '../styles/AvatarCard.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
/*import { userContext } from '../App';*/

const AvatarCard = ({avatarImage, setUserPicture}) => {
    const navigate = useNavigate()

    /*const setShouldRegisterNewUser = useContext(userContext)[3];


    const createUserOnClick = (e) => {
        /*console.log(e.target.childNodes[0].src);
        setUserPicture(e.target.childNodes[0].src);
        setShouldRegisterNewUser("yes");
        navigate("/")
    }*/

    return(
        <div className='avatarCard' /*onClick={createUserOnClick}*/>
            <img src = {avatarImage} alt = "avatar" className='avatar-image'></img>
        </div>
    )
}

export default AvatarCard;