import React ,{ useState,useEffect } from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import Sidebar from './Sidebar';
const Navbar = () => {
        const [state, setState] = React.useState({
          top: false,
          left: false,
          bottom: false,
          right: false,
        });
      
        const toggleDrawer = (anchor, open) => (event) => {
          if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
      
          setState({ ...state, [anchor]: open });
        };
    const[userData,setData]= useState("");

    const fetchData = async() => {
         await fetch("http://localhost:5000/userDetails/userData",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            },
            body:JSON.stringify({
                token: window.localStorage.getItem("token")
            }),
         }).then((res) => res.json())
         .then((data) => {
           console.log(data, "userData");
           setData(data.data);
           if(data.data==="token expired"){
            alert("Token expired login again");
            window.localStorage.clear();
            window.location.href="./";
           }
           });
        
    }
    useEffect(()=>{
       fetchData();
    },[])
    const logout =() =>{
      window.localStorage.clear();
      window.location.href="./";
    }
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          {
          userData!=="null" &&(
            <>
             <Container>
            <Typography  variant="h6" component="div" sx={{ flexGrow: 1 ,marginLeft:'1000px' }}>{userData.email}</Typography>
          </Container>
          <Button onClick={logout} color="inherit">Logout</Button>
            </>
         
          )}
        </Toolbar>
      </AppBar>
      <Sidebar state={state} setState={useState} toggleDrawer={toggleDrawer}></Sidebar>
    </Box>
    </div>
  )
}

export default Navbar
