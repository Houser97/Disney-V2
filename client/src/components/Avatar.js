import '../styles/Avatar.css';
import AvatarCard from './avatarCard';
import { AvatarImages } from '../assets/constants';

const ChooseAvatar = ({setUserPicture}) => {

    return(
        <div className='choose-avatar-section'>
            <div className='instruction-avatar'>Choose Avatar</div>
            <div className='avatars-grid'>
                {AvatarImages.map(function iterateAvatars(avatar, i){
                    return(
                        <AvatarCard key={`${i}-avatar-image`} avatarImage = {avatar.image} setUserPicture = {setUserPicture} />
                    )
                })}
            </div>
        </div>
    )
}

export default ChooseAvatar;