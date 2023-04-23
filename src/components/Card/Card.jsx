import React from 'react'
import './Card.css'
const Card = (props) => {

  const {postedAt,contract} = props
  return (
    <div  className='card'>
      <div className="info"><span>{postedAt}</span>.<span>{contract}</span></div>

    </div>
  )
}

export default Card