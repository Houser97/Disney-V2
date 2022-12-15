import { useEffect, useState } from 'react';
import '../styles/chooseAvatar.css';
import AvatarCard from './avatarCard';
import { AvatarImages } from '../assets/constants';

const ChooseAvatar = ({headerRef, footerRef, setUserPicture}) => {

    const [avatarsImages] = useState([spidermanAvatar, buzzAvatar,
                                      darthAvatar,     drStrangeAvatar,
                                      obiwanAvatar,    ironmanAvatar,
                                      WandaAvatar,     elsaAvatar,
                                      sparkyAvatar,    doriAvatar,
                                      danteAvatar,     stitchAvatar,
                                      RocketAvatar,    jackAvatar,
                                      WAvatar,         perryAvatar,
                                      PumbaAvatar,     MoonAvatar,
                                      nemoAvatar])

    const header = headerRef.current;
    const footer = footerRef.current;

    useEffect(() => {
        header.style.display = "none";
        footer.style.display = "none";

        return () => {
            header.style.display = "flex";
            footer.style.display = "flex";
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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