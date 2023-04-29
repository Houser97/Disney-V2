import React, { useContext, useEffect, useState } from 'react'
import '../styles/UserMenuSD.css'
import { AvatarImages } from '../assets/constants'
import { userContext } from '../App'

interface userType {
  avatar: string,
  username: string
}

interface UserMenuSD {
  user: userType
}

const UserMenuSD = ({user}: UserMenuSD) => {

  const [avatar, setAvatar] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const API = useContext(userContext).API;

  useEffect(() => {
    const avatarImage = AvatarImages.filter(avatarObject => avatarObject.ref === user.avatar)
    setAvatar(avatarImage[0].image);
    setUsername(user.username)
  }, [user])

  const logout = () => {
    fetch(`${API}/api/logout`)
    .then(response => response.json())
    .then(data => {
      if(data){
        window.location.reload()
      }
    })
  }

  return (
    <div className='profile-user-SD'>
        <div className='profile-picture-header'>
            <img src={avatar ? avatar : ''} alt ="headerpicture" className='header-picture-profile' ></img>
        </div>
        <div className='signOut-user-SD'>
            <div className='username-header'>{username}</div>
            <div className='button-log-out' onClick={logout}>
                Logout
            </div>
            <a className='change-Avatar-btn' href = "/avatar">
                Change Avatar
            </a>
        </div>
    </div>
  )
}

export default UserMenuSD