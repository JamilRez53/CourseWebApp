import React, { useState,useEffect } from 'react'
import Navbar from '../Navbar';
import { Typography,Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './tutorial.css';
const UserTutorials = () => {
    const [tutorial,setTutorial] = useState([]);
    const fetchTutorial = async()=>{
        await fetch("http://localhost:5000/tutorials/getTutorials",{
                method:"GET",
             }).then((res) => res.json())
             .then((data) => {
               console.log(data, "TutorialsData");
               setTutorial(data.data);
             })
}
useEffect(()=>{
  fetchTutorial();
  
},[])
  return (
    <div>
    <Navbar/>
    
    {/* <div className="card-image">
     
     <div className={classes.searchContainer}>
 
 <TextField 
 className={classes.searchInput}
 label="Search"
variant="outlined"
size="small"
/>
// value={topicname} onChange={(event)=>{setTopicname(event.target.value)}}/>
<Button className="search-button" >Search</Button>

 
{topic!==null && topic.filter(item=>{
   const searchTerm = topicname.toLowerCase();
   const full_topic = item.name.toLowerCase();
   return searchTerm && full_topic.startsWith(searchTerm) && full_topic!==searchTerm;
 }).map((item)=>(
  <MenuItem key={item._id} onClick={()=>{setTopicname(item.name)}} className={classes.menuItem}>
   {item.name}
  </MenuItem>
))}

</div> */}

     
    
    {tutorial!==null && tutorial.map((item)=>{
     return(
      
         <div className="card-container">
           
           <div className="card-content">
           <Typography variant='h4' >
        {item.name}
       </Typography>
       <Typography >{item.description}</Typography>
           </div>
       
       {/* <button component={Link} to={`/viewDetails/${item._id}`}>View More</button> */}
       <Button component={Link} to={`/tutorialdetail/${item._id}`}>View More</Button>
     </div>
      
    
       )
     })}
     </div>
  )
}

export default UserTutorials
