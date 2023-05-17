import React ,{ useState,useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    marginBottom: '20px'
  },
  toolbar:{
    background:"white",
    color:"#007bff"
  }
}));

const HomeNav = () => {
    const classes=useStyles();
    const[userData,setData]= useState("");
    const[isScrolled,setScrolled] = useState(false)
    const scrollNavbar = () =>{
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
   useEffect(()=>{
    scrollNavbar()
   })
  const UserLogin=()=>{
    window.location.href="./login"
  }
  const AdminLogin = () =>{
    window.location.href="./adminlogin"
  }
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
  <AppBar position="fixed" className={isScrolled? classes.appBar : ''}>
    <Toolbar className={classes.toolbar}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 , marginLeft:"30px" }}>
       CourseWebApp
      </Typography>
      {
      userData!=="null" &&(
        <>
         <Container sx={{marginLeft:"800px" , display:"flex"}} >
        {/* <Typography  variant="h6" component="div" sx={{ flexGrow: 1 ,marginLeft:'1000px' }}>{userData.fname}</Typography> */}
       
        <Button onClick={AdminLogin}>
         Log In as Instructor
        </Button>
        <Button sx={{marginLeft:"70px"}} onClick={UserLogin}>
            Login as Student
        </Button>
      </Container>
     
        </>
     
      )}
    </Toolbar>
  </AppBar>
 
</Box>
</div>
  )
}

export default HomeNav
