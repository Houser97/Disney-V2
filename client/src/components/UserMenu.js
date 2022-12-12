import React from 'react'
import '../styles/UserMenu.css'
import DarthVader from '../assets/images/Avatars/DarthVaderAvatar.png'

const UserMenu = () => {
  return (
    <div className='profile-user'>
        <div className='profile-picture-header'>
            <img src={DarthVader} alt ="headerpicture" className='header-picture-profile' ></img>
        </div>
        <div className='signOut-user'>
            <div className='username-header'>Username</div>
            <div className='button-log-out'>
                Log Out
            </div>
        </div>
    </div>
  )
}

export default UserMenu