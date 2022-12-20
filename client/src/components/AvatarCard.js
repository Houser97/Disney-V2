import '../styles/AvatarCard.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
/*import { userContext } from '../App';*/

const AvatarCard = ({avatar}) => {
    const navigate = useNavigate()


    const UpdateAvatar = (e) => {
        /*console.log(e.target.childNodes[0].src);
        setUserPicture(e.target.childNodes[0].src);
        setShouldRegisterNewUser("yes");*/
        navigate("/")
    }

    return(
        <div className='avatarCard' onClick={UpdateAvatar}>
            <img src = {avatar.image} alt = "avatar" className='avatar-image'></img>
        </div>
    )
}

export default AvatarCard;