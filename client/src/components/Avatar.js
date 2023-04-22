import '../styles/Avatar.css';
import AvatarCard from './AvatarCard';
import { AvatarImages } from '../assets/constants';
import { userContext } from '../App';
import { useContext } from 'react';

const Avatar = () => {

    const isUser = useContext(userContext).isUserLogged;

    return(
        <div className='choose-avatar-section'>
            {isUser ? (
                <div>
                    <div className='instruction-avatar'>Choose Avatar</div>
                    <div className='avatars-grid'>
                        {AvatarImages.map(function iterateAvatars(avatar){
                            return(
                                <AvatarCard key={`${avatar.ref}-avatar-image`} avatar = {avatar} />
                            )
                        })}
                    </div>
            </div>
            ):(<div className='avatar-no-user'>Log in in order to update avatar</div>)}
        </div>
    )
}

export default Avatar;