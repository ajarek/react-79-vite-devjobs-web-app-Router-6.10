import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import jobsData from '../../assets/data.json'
import Card from '../../components/Card/Card'
import './Dashboard.css'

const Dashboard = () => {
  const { formData, setFormData } = useContext(AppContext)

  return (
    <div className='dashboard'>
      {jobsData
        .filter((item) =>
          item.location.toLowerCase().includes(formData.location.toLowerCase())
        )
        .filter((item) =>
          item.position.toLowerCase().includes(formData.title.toLowerCase())
        )
        .filter((item) =>
          formData.fullTime
            ? formData.fullTime
              ? item.contract === 'Full Time'
              : item.contract !== 'Full Time'
            : item.contract
        )
        .map((job) => {
          return (
            <Card
              key={job.id}
              {...job}
            />
          )
        })}
    </div>
  )
}

export default Dashboard
