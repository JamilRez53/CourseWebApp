import React, { useState ,useEffect} from 'react'
import Navbar from '../../components/user/Navbar'

import "./User.css";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
//import axios from 'axios';
const User = () => {
  const [topic,setTopic] = useState([]);
  //const unique = [...new Set(topic)]
  const fetchTopic = async()=>{
          await fetch("http://localhost:5000/topics/getTopics",{
                  method:"GET",
               }).then((res) => res.json())
               .then((data) => {
                 console.log(data, "TopicsData");
                 setTopic(data.data);
               })
  }
  useEffect(()=>{
    fetchTopic();
  },[])
  return (
    <div>
       <Navbar/>
       <div className='card'>

       
       {topic!==null && topic.map((item)=>{
        return(
         
            <div className="card-container">
              <div className="card-content">
              <p >
           {item.name}
          </p>
          <p >{item.heading}</p>
              </div>
          
          {/* <button component={Link} to={`/viewDetails/${item._id}`}>View More</button> */}
          <Button component={Link} to={`/viewDetails/${item._id}`}>View More</Button>
        </div>
         
       
          )
        })}
        </div>
    </div>
  )
}

export default User
