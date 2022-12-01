import { useEffect, useState } from 'react';
import '../styles/AvatarCatalog.css';
import AvatarCard from './avatarCard';
import spidermanAvatar from '../images/avatars/SpiderManAvatar.png';
import buzzAvatar from '../images/avatars/BuzzAvatar.png';
import darthAvatar from '../images/avatars/DarthVaderAvatar.png';
import drStrangeAvatar from '../images/avatars/DrStrangeAvatar.png';
import obiwanAvatar from '../images/avatars/ObiWanAvatar.png';
import ironmanAvatar from '../images/avatars/IronManAvatar.png';
import danteAvatar from '../images/avatars/DanteAvatar.png';
import doriAvatar from '../images/avatars/DoriAvatar.png';
import elsaAvatar from '../images/avatars/ElsaAvatar.png';
import jackAvatar from '../images/avatars/JackAvatar.png';
import MoonAvatar from '../images/avatars/MoonAvatar.png';
import nemoAvatar from '../images/avatars/NemoAvatar.png';
import perryAvatar from '../images/avatars/PerryAvatar.png';
import PumbaAvatar from '../images/avatars/PumbaAvatar.png';
import RocketAvatar from '../images/avatars/RatchetAvatar.png';
import sparkyAvatar from '../images/avatars/SparkyAvatar.png';
import stitchAvatar from '../images/avatars/StitchAvatar.png';
import WandaAvatar from '../images/avatars/WandaAvatar.png';
import WAvatar from '../images/avatars/WAvatar.png';

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