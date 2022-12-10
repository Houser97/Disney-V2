import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../styles/HeaderSD.css'

const HeaderSD = ({userID}) => {

    const location = useLocation()
    const headerMS = useRef()

    useEffect(() =>{
        if(location.pathname === '/series' || location.pathname === '/movies'){
            headerMS.current.style.opacity = 1
        } else {
            headerMS.current.style.opacity = 0
        }
    }, [location.pathname])

  return (
    <div className='header-sd-container'>
        <Link className='link' to = "/">
            <div className='home option'>
                <div className='svg-option'>
                    <svg className='svg' viewBox="0 0 24 24">
                        <path fill="currentColor" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                    </svg>
                </div>
            </div>
        </Link>
        <Link className='link' to = "/search">
            <div className='search option'>
                <div className='svg-option'>
                    <svg className='svg' viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                    </svg>
                </div>
            </div>
        </Link>
        <Link className='link' to = "/watchlist" >
            <div className='watchlist option'>
                <div className='svg-option plus'>
                    <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                </div>
            </div>
        </Link>
        {(userID) ? (
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
            </div>) : (
            <Link className='link log-in-container' to = "/login">
                <div className='log-in-button-header'>
                    Log in
                </div>
            </Link>
        )}
    </div>
  )
}

export default HeaderSD