import React from 'react'
import { redirect, useParams, Link } from 'react-router-dom'
import jobsData  from '../../assets/data.json'
import './CardDetal.css'


const CardDetal = () => {
  let { id } = useParams()
  const myObject =jobsData.find(obj => obj.id === (+id));
  console.log(myObject);
  return (
    <div className='card-detal'>
      <div className="baner">
        <div className="baner-logo">
          <img src={myObject.logo} alt="logo"  />
        </div>
        <div className="baner-position">
           <h2>{myObject.position}</h2>
           <p>{myObject.website}</p>
        </div>
        <div className="company-site">
          <Link className='company-site-link'>Company Site</Link>
        </div>
      </div>
    </div>
  )
}

export default CardDetal