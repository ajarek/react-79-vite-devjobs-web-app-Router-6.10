import React from 'react'
import './Card.css'
const Card = (props) => {
  const {
    postedAt,
    contract,
    logo,
    logoBackground,
    position,
    company,
    location,
    handleEdit,
  } = props

  return (
    <div
      className='card'
      onClick={handleEdit}
    >
      <div
        className='logo-card'
        style={{ background: logoBackground }}
      >
        <img
          src={logo}
          alt='logo'
        />
      </div>
      <div className='info'>
        <span>{postedAt}</span>
        <span className='dot'></span>
        <span>{contract}</span>
      </div>
      <div className='position'>{position}</div>
      <div className='company'>{company}</div>
      <div className='location'>{location}</div>
    </div>
  )
}

export default Card
