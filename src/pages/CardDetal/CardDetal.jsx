import React from 'react'
import { useParams } from 'react-router-dom'
import jobsData from '../../assets/data.json'
import './CardDetal.css'

const CardDetal = () => {
  let { id } = useParams()
  const myObject = jobsData.find((obj) => obj.id === +id)

  return (
    <div className='card-detal'>
      <div className='baner'>
        <div
          className='baner-logo'
          style={{ background: `${myObject.logoBackground}` }}
        >
          <img
            src={myObject.logo}
            alt='logo'
          />
        </div>
        <div className='baner-position'>
          <h2>{myObject.position}</h2>
          <p>{myObject.website}</p>
        </div>
        <div className='company-site'>
          <a
            href={myObject.website}
            target='_blank'
            className='company-site-link'
          >
            Company Site
          </a>
        </div>
      </div>
      <div className='article'>
        <div className='info-article'>
          <span>{myObject.postedAt}</span>
          <span className='dot'></span>
          <span>{myObject.contract}</span>
        </div>
        <div className='position-article'>
          <h1>{myObject.position}</h1>
          <div className='button-apply'>
            <a
              href={myObject.apply}
              target='_blank'
              className='apply-link'
            >
              Apply Now
            </a>
          </div>
        </div>
        <div className='location-article'>{myObject.location}</div>
        <div className='description-article'>{myObject.description}</div>
        <div className='requirements'>
          <h2>Requirements</h2>
          <div className='content-article'>{myObject.requirements.content}</div>
          <ul className='items-article'>
            {myObject.requirements.items.map((el, index) => {
              return <li key={index}>{el}</li>
            })}
          </ul>
        </div>

        <div className='role-article'>
          <h2>What You Will Do</h2>
          <div className='content-article'>{myObject.role.content}</div>
          <ol className='items-article'>
            {myObject.role.items.map((el, index) => {
              return (
                <li
                  className='ol-li'
                  key={index}
                >
                  {el}
                </li>
              )
            })}
          </ol>
        </div>
        <div className='position-article'>
          <h1 style={{ fontSize: '16px' }}>{myObject.position}</h1>
          <div className='button-apply'>
            <a
              a
              href={myObject.apply}
              target='_blank'
              className='apply-link'
            >
              Apply Now
            </a>
          </div>
        </div>
        <div className='location-article'>{myObject.company}</div>
      </div>
    </div>
  )
}

export default CardDetal
