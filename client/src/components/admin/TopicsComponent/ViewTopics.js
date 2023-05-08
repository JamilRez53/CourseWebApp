import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Typography } from '@mui/material';
import Navbar from '../Navbar';
import './ViewTopics.css'
const ViewTopics = () => {
    const {id} = useParams();
    const[topic,setTopic] = useState({name:'',subtopic:'',heading:'',description:''})
    const getTopic = async ()=>{
        await axios.get(`http://localhost:5000/topics/getSingleTopics/${id}`).then(res => setTopic(res.data))
              
       }
  useEffect(()=>{
    getTopic();
  },[])
  return (
    <>
    <Navbar/>
    { topic && (
        <div className='topic-container'>
             <Typography  variant='h3' component='h2' sx={{marginBottom:'20px',backgroundColor:'#adb5bd',opacity:undefined}}> Topic Name: </Typography>
            <Typography sx={{marginBottom:'20px',fontSize:'25px'}}>{topic.name}</Typography>
            <Typography variant='h3' sx={{marginBottom:'20px',backgroundColor:'#adb5bd',opacity:undefined}}>Subtopic:</Typography>
            <Typography  sx={{marginBottom:'20px',fontSize:'25px'}}>{topic.subtopic}</Typography>
            <Typography variant='h3' sx={{marginBottom:'20px',backgroundColor:'#adb5bd',opacity:undefined}}>Heading of Inner Subtopic: </Typography>
            <Typography  sx={{marginBottom:'20px',fontSize:'25px'}}>{topic.heading}</Typography>
            <Typography variant='h3' sx={{marginBottom:'20px',backgroundColor:'#adb5bd',opacity:undefined}}>Description of Inner Subtopic:</Typography>
            <Typography sx={{marginBottom:'20px',fontSize:'25px'}}>{topic.description}</Typography>
        </div>

    )


    }
    </>
    
  )
}

export default ViewTopics