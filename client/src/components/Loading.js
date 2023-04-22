import React from 'react'
import '../styles/Loading.css'

const Loading = () => {
  return (
    <div className="loader_container">
      <span className="half_bg_container"></span>
      <span className="circle_bg_container"></span>
      <span className='loader-head'></span>
    </div>
  )
}

export default Loading