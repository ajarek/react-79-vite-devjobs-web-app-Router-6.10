
import jobsData from '../../assets/data.json';
import './Dashboard.css'


const Dashboard = () => {
  
  return (
    <div className='dashboard'>
    {  jobsData.map((job) =>{
      return(
        <div key={job.id} className="cardJob">
           <p>{job.company}</p>
           <img src={job.logo} alt="lol" />
        </div>
      )
    })}
     </div>
  )
}

export default Dashboard
