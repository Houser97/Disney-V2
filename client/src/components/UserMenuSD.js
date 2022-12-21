import React, { useEffect, useState } from 'react'
import '../styles/UserMenuSD.css'
import DarthVader from '../assets/images/Avatars/DarthVaderAvatar.png'
import { AvatarImages } from '../assets/constants'

const UserMenuSD = ({user}) => {

  const [avatar, setAvatar] = useState(null)
  const [username, setUsername] = useState(null)

  useEffect(() => {
    /*const user = JSON.parse(sessionStorage.getItem('user'));*/
    const avatarImage = AvatarImages.filter(avatarObject => avatarObject.ref === user.avatar)
    setAvatar(avatarImage[0].image);
    setUsername(user.username)
  }, [user])

  return (
    <div className='profile-user-SD'>
        <div className='profile-picture-header'>
            <img src={avatar} alt ="headerpicture" className='header-picture-profile' ></img>
        </div>
        <div className='signOut-user-SD'>
            <div className='username-header'>{username}</div>
            <div className='button-log-out'>
                Log Out
            </div>
        </div>
    </div>
  )
}

export default UserMenuSD