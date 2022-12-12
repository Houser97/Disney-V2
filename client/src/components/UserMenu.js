import React from 'react'
import '../styles/UserMenu.css'

const UserMenu = () => {
  return (
    <div className='profile-user'>
        <div className='username-header'>Username</div>
            <div className='profile-picture-header'>
                <img /*src={userPicture}*/ alt ="headerpicture" className='header-picture-profile' ></img>
            </div>
        <div className='signOut-user'>
            <div className='button-log-out'>
                Log Out
            </div>
        </div>
    </div>
  )
}

export default UserMenu