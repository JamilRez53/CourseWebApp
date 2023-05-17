import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import { Typography } from '@material-ui/core';
import axios from 'axios';
import ReactQuill from 'react-quill';
import "./tutorialdetail.css"
const TutorialDetail = () => {
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
        <div className='tutorial-container'>
            
           
            {tutorial.videos.map((video)=>{
                return(
                 <video   preload="auto"
                 width="800px"
                 height="500px"
                 controls>
                    <source src={`http://localhost:5000${video}`}/>
                 </video>
                );
                        })}
             <Typography variant='h3'>{tutorial.name}</Typography>
             <ReactQuill theme="snow"  modules={{ toolbar: [] }} value={tutorial.description} readOnly={true} />
        </div>
           
    )


    }
    </>
    
  )
}

export default TutorialDetail
