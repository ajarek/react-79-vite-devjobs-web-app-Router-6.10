import {useState} from 'react'
import Logo from '../../components/Logo/Logo'
import Toggle from '../../components/Toggle/Toggle'
import Search from '../../components/Search/Search'
import './Nav.css'

const Nav = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    fullTime: ''
  });
 const handleForm=(e)=>{
  e.preventDefault()
  setFormData({title:e.target[0].value,location:e.target[1].value, fullTime:e.target[2].checked});
  e.target[0].value=''
  e.target[1].value=''
  e.target[2].checked=false
 }
 console.log(formData);
  return (
    <nav className='nav'>
      <Logo/>
      <Toggle/>
      <Search onSubmit={handleForm}/>

     
    </nav>
  )
}

export default Nav
