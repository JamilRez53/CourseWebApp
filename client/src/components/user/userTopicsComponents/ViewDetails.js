import React, { useEffect, useState ,useRef,useMemo } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import Navbar from '../Navbar';
import "./ViewDetails.css"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const ViewDetails = () => {
  const {id} = useParams();
  const[topic,setTopic] = useState({name:'', description:''})
  const getTopic = async ()=>{
      await axios.get(`http://localhost:5000/topics/getSingleTopics/${id}`).then(res => setTopic(res.data))
            
     }
     
useEffect(()=>{
  getTopic();
},[])
//   const modules = {
//   {{ toolbar: ["bold"] }}
// }

return (
  <>
  <Navbar/>
  { topic && (
      <div className='topic-container'>
           
          <Typography variant='h2' sx={{marginTop:'80px'}}>{topic.name}</Typography>
          <Typography sx={{marginTop:'20px'}}>{topic.heading}</Typography>
          <ReactQuill theme="snow"  modules={{ toolbar: [] }} value={topic.description} readOnly={true} />
      </div>

  )


  }
  </>
  
)
}

export default ViewDetails
