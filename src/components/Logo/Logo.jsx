import React from 'react'
import { Link } from 'react-router-dom'
import imageLogo from '../../assets/desktop/logo.svg'
import './Logo.css'
const Logo = () => {
  return (
    <div className='logo'>
      <Link to={'/'}>
        <img
          src={imageLogo}
          alt=''
        />
      </Link>
    </div>
  )
}

export default Logo
