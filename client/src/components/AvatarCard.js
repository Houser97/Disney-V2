import '../styles/AvatarCard.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
/*import { userContext } from '../App';*/

const AvatarCard = ({avatar}) => {
    const navigate = useNavigate()

    const UpdateAvatar = (e) => {
        /*console.log(e.target.childNodes[0].src);*/
        const src = e.target.childNodes[0].src
        fetch('/api/update_avatar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({avatar: avatar.ref})
        })
        .then(response => response.json())
        .then(data => {
            window.sessionStorage.setItem('user', JSON.stringify(data))
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