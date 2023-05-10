import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Typography } from '@mui/material';
import Navbar from '../Navbar';

const ViewTutorials = () => {
    const {id} = useParams();
    const[tutorial,setTutorial] = useState({name:'',description:'',videos:[]})
    const getTutorial = async ()=>{
        await axios.get(`http://localhost:5000/tutorials/getSingleTutorial/${id}`).then(res => setTutorial(res.data))
              
       }
  useEffect(()=>{
    getTutorial();
  },[])
  return (
    <>
    <Navbar/>
    { tutorial && (
        <div className='topic-container'>
             <Typography  variant='h3' component='h2' sx={{marginBottom:'20px',backgroundColor:'#adb5bd',opacity:undefined}}> Tutorial Name: </Typography>
            <Typography sx={{marginBottom:'20px',fontSize:'25px'}}>{tutorial.name}</Typography>
            <Typography variant='h3' sx={{marginBottom:'20px',backgroundColor:'#adb5bd',opacity:undefined}}>Description of the tutorial:</Typography>
            <Typography sx={{marginBottom:'20px',fontSize:'25px'}}>{tutorial.description}</Typography>
            <Typography variant='h3' sx={{marginBottom:'20px',backgroundColor:'#adb5bd',opacity:undefined}}>Video:</Typography>
            {tutorial.videos.map((video)=>{
                return(
                 <video   preload="auto"
                 width="320"
                 height="240"
                 controls>
                    <source src={`http://localhost:5000${video}`}/>
                 </video>
                );
                        })}
        </div>
           
    )


    }
    </>
    
  )
}

export default ViewTutorials
