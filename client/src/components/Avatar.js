import { useEffect, useState } from 'react';
import '../styles/chooseAvatar.css';
import AvatarCard from './avatarCard';
import { AvatarImages } from '../assets/constants';

const ChooseAvatar = ({setUserPicture}) => {

    return(
        <div className='choose-avatar-section'>
            <div className='instruction-avatar'>Choose Avatar</div>
            <div className='avatars-grid'>
                {avatarsImages.map(function iterateAvatars(avatar, i){
                    return(
                        <AvatarCard key={`${i}-avatar-image`} avatarImage = {avatar} setUserPicture = {setUserPicture} />
                    )
                })}
            </div>
        </div>
    )
}

export default ChooseAvatar;