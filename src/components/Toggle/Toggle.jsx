import { useState, useEffect } from 'react'
import './Toggle.css'
import imageSun from '../../assets/desktop/icon-sun.svg'
import imageMoon from '../../assets/desktop/icon-moon.svg'
const Toggle = () => {
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    document.getElementById('root').dataset.theme = theme
  }, [theme])
  return (
    <div className='toggle'>
      <span>
        <img
          src={imageSun}
          alt=''
        />
      </span>
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        style={
          theme === 'light' ? { paddingLeft: '5px' } : { paddingLeft: '26px' }
        }
      >
        <span className='circle'></span>
      </button>
      <span>
        <img
          src={imageMoon}
          alt=''
        />
      </span>
    </div>
  )
}

export default Toggle
