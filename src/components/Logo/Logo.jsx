import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'
const Logo = () => {
  return (
    <div className='logo'>
      <Link to={'/'}>
        <img
          src='/src/assets/desktop/logo.svg'
          alt=''
        />
      </Link>
    </div>
  )
}

export default Logo
