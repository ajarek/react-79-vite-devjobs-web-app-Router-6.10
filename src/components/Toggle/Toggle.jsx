import { useState, useEffect } from 'react'
import './Toggle.css'
const Toggle = () => {
  const [theme, setTheme] = useState('light')
  useEffect(() => {
    document.getElementById('root').dataset.theme = theme
  }, [theme])
  return (
    <div className='toggle'>
      <span>
        <img
          src='/src/assets/desktop/icon-sun.svg'
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
          src='/src/assets/desktop/icon-moon.svg'
          alt=''
        />
      </span>
    </div>
  )
}

export default Toggle
