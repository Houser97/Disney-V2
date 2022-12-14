import React from 'react'
import '../styles/UserMenuSD.css'
import DarthVader from '../assets/images/Avatars/DarthVaderAvatar.png'

const UserMenuSD = () => {
  return (
    <div className='profile-user-SD'>
        <div className='profile-picture-header'>
            <img src={DarthVader} alt ="headerpicture" className='header-picture-profile' ></img>
        </div>
        <div className='signOut-user-SD'>
            <div className='username-header'>Username</div>
            <div className='button-log-out'>
                Log Out
            </div>
        </div>
    </div>
  )
}

export default UserMenuSD