import '../styles/AvatarCard.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../App';

interface avatarProps {
    avatar: {
        ref: string,
        image: string, //Es string ya que hace referencia a la ruta de la imagen importada.
    }
}

const AvatarCard = ({avatar}: avatarProps) => {
    const navigate = useNavigate()
    const setIsUserLogged = useContext(userContext).setIsUserLogged;
    const API = useContext(userContext).API;

    const UpdateAvatar = () => {
        /*console.log(e.target.childNodes[0].src);*/
        fetch(`${API}/api/update_avatar`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({avatar: avatar.ref})
        })
        .then(response => response.json())
        .then(data => {
            window.sessionStorage.setItem('user', JSON.stringify(data))
            setIsUserLogged(data)
            navigate("/")  
        })
    }

    return(
        <div className='avatarCard' onClick={UpdateAvatar}>
            <img src = {avatar.image} alt = "avatar" className='avatar-image'></img>
        </div>
    )
}

export default AvatarCard;