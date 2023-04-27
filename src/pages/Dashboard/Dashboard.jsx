import { React, useContext } from 'react'
import { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import jobsData from '../../assets/data.json'
import Card from '../../components/Card/Card'
import Search from '../../components/Search/Search'
import './Dashboard.css'

const Dashboard = () => {
  const { formData, setFormData } = useContext(AppContext)
  const navigate = useNavigate()
  const handleForm = (e) => {
    e.preventDefault()
    setFormData({
      title: e.target[0].value,
      location: e.target[1].value,
      fullTime: e.target[2].checked,
    })
    e.target[0].value = ''
    e.target[1].value = ''
    e.target[2].checked = false
  }

  const handleEdit = (e, id) => {
    navigate(`/card-detal/${id}/`)
  }

  return (
    <div className='dashboard'>
      <Search onSubmit={handleForm} />
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
              handleEdit={(e) => handleEdit(e, job.id)}
              {...job}
            />
          )
        })}
    </div>
  )
}

export default Dashboard
