import { React } from 'react'
import Logo from '../../components/Logo/Logo'
import Toggle from '../../components/Toggle/Toggle'

import './Nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
      <Logo />
      <Toggle />
    </nav>
  )
}

export default Nav
