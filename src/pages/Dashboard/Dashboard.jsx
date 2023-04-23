
import jobsData from '../../assets/data.json';
import Card from '../../components/Card/Card';
import './Dashboard.css'


const Dashboard = () => {
  
  return (
    <div className='dashboard'>
    {  jobsData.map((job) =>{
      return(
       <Card key={job.id} {...job} />
       
      )
    })}
     </div>
  )
}

export default Dashboard
