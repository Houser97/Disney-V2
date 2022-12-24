import React, { useEffect, useState } from 'react'
import '../styles/UserMenuSD.css'
import { AvatarImages } from '../assets/constants'
import { Link } from 'react-router-dom'

const UserMenuSD = ({user}) => {

  const [avatar, setAvatar] = useState(null)
  const [username, setUsername] = useState(null)

  useEffect(() => {
    const avatarImage = AvatarImages.filter(avatarObject => avatarObject.ref === user.avatar)
    setAvatar(avatarImage[0].image);
    setUsername(user.username)
  }, [user])

  const logout = () => {
    fetch('/api/logout')
    .then(response => response.json())
    .then(data => {
      if(data){
        window.location.reload(true)
      }
    })
  }

  return (
    <div className='profile-user-SD'>
        <div className='profile-picture-header'>
            <img src={avatar} alt ="headerpicture" className='header-picture-profile' ></img>
        </div>
        <div className='signOut-user-SD'>
            <div className='username-header'>{username}</div>
            <div className='button-log-out' onClick={logout}>
                Log Out
            </div>
            <a className='change-Avatar-btn' href = "/avatar">
                Change Avatar
            </a>
        </div>
    </div>
  )
}

export default UserMenuSD