import '../styles/Avatar.css';
import AvatarCard from './AvatarCard';
import { AvatarImages } from '../assets/constants';
import { userContext } from '../App';
import { useContext, useEffect } from 'react';

const Avatar = () => {

    const isUser = useContext(userContext).isUserLogged;
    const setIsUserLogged = useContext(userContext).setIsUserLogged;
    const API = useContext(userContext).API;

    //El useEffect se necesita para usuarios que acaban de hacer signup.
    useEffect(() => {
        fetch(`${API}/api/check_if_user_is_logged`, {
            method: 'GET',
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
          sessionStorage.setItem('user', JSON.stringify(data))
          setIsUserLogged(data)
        })
      }, [])    

    return(
        <div className='choose-avatar-section'>
            {isUser ? (
                <div>
                    <div className='instruction-avatar'>Choose Avatar</div>
                    <div className='avatars-grid'>
                        {AvatarImages.map(function iterateAvatars(avatar, i){
                            return(
                                <AvatarCard key={`${i}-avatar-image`} avatar = {avatar} />
                            )
                        })}
                    </div>
            </div>
            ):(<div className='avatar-no-user'>Log in in order to update avatar</div>)}
        </div>
    )
}

export default Avatar;