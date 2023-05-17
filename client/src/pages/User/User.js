import React, { useState ,useEffect} from 'react'
import Navbar from '../../components/user/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import "./User.css";
import { Button, Typography,TextField,MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  searchContainer: {
    justifyContent:'center',
    marginBottom: '20px',
    marginLeft: '650px',
    marginTop:'20px'
  },
  searchInput: {
    
    borderRadius: theme.shape.borderRadius,
  },
  menuItem: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    marginLeft:'650px',
    width:'250px'
  }

}));
const User = () => {
  const classes = useStyles();
  const [topicname,setTopicname] = useState("");
  const [topic,setTopic] = useState([]);
  const SearchTopic = async() =>{
    await axios.get(`http://localhost:5000/topics/searchTopic/${topicname}`).then(res=>{
     setTopic(res.data)
    })
  }
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
       
       <div className="card-image">
        <img src='./images/CyberSecurity.jpg'/>
        <div className={classes.searchContainer}>
    
    <TextField 
    className={classes.searchInput}
    label="Search"
  variant="outlined"
  size="small"
  
   value={topicname} onChange={(event)=>{setTopicname(event.target.value)}}/>
   <Button className="search-button" onClick={SearchTopic}>Search</Button>
 
    
   {topic!==null && topic.filter(item=>{
      const searchTerm = topicname.toLowerCase();
      const full_topic = item.name.toLowerCase();
      return searchTerm && full_topic.startsWith(searchTerm) && full_topic!==searchTerm;
    }).map((item)=>(
     <MenuItem key={item._id} onClick={()=>{setTopicname(item.name)}} className={classes.menuItem}>
      {item.name}
     </MenuItem>
   ))}
   
 </div>

        
       </div>
       {topic!==null && topic.map((item)=>{
        return(
         
            <div className="card-container">
              
              <div className="card-content">
              <Typography variant='h4' >
           {item.name}
          </Typography>
          <Typography >{item.heading}</Typography>
              </div>
          
          {/* <button component={Link} to={`/viewDetails/${item._id}`}>View More</button> */}
          <Button component={Link} to={`/viewDetails/${item._id}`}>View More</Button>
        </div>
         
       
          )
        })}
        </div>
    
  )
}

export default User
