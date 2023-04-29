import React, { useContext, useEffect, useState } from 'react'
import '../styles/UserMenu.css'
import { AvatarImages } from '../assets/constants'
import { userContext } from '../App'

interface userType {
  avatar: string,
  username: string
}

interface UserMenuProp {
  user: userType
}

const UserMenu = ({user}: UserMenuProp) => {

  const [avatar, setAvatar] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)

  const API = useContext(userContext).API;

  useEffect(() => {
    const avatarImage = AvatarImages.filter(avatarObject => avatarObject.ref === user.avatar)
    setAvatar(avatarImage[0].image);
    setUsername(user.username)
  }, [user])

  const logout = () => {
    fetch(`${API}/api/logout`, {
      method: 'GET',
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      if(data){
        window.location.reload()
      }
    })
  }
  
  return (
    <div className='profile-user'>
        <div className='profile-picture-header'>
            <img src={avatar ? avatar : ''} alt ="headerpicture" className='header-picture-profile' ></img>
        </div>
        <div className='signOut-user'>
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

export default UserMenu