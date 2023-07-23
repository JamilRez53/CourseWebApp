import React,{useState} from 'react'
import QuoraHeader from './QuoraHeader'
import AdminNavbar from '../admin/Navbar';
import StudentNavbar from '../user/Navbar';
import QuoraBox from './QuoraBox';
import Post from './Post';
import Feed from './Feed';
import Widget from './Widget';
import "./css/Quora.css";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@material-ui/core';
import Modal from 'react-responsive-modal';
import "react-responsive-modal/styles.css";
import { Typography } from '@mui/material';
const Quora = () => {
    const islogged = window.localStorage.getItem("loggedIn");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Close = <CloseIcon/>
  return (
    <div >
      {islogged?(<StudentNavbar/>):(<AdminNavbar/>)}
      <button style={{marginTop:"100px",marginLeft:"600px",marginBottom:"20px",backgroundColor:"black",color:"white",borderRadius:"3px",padding:"10px"}} onClick={()=> setIsModalOpen(true)}>Add Questions</button>
      
      
      <div className="quora__contents">
     
          <Feed />
          <Widget />
        
      </div>
      <Modal 
      open={isModalOpen}
      closeIcon={Close}
      onClose={() => setIsModalOpen(false)}
      closeOnEsc
      center
      closeOnOverlayClick={false}
      styles={{
        overlay: {
          height: "auto",
          marginTop:"20px",
        },
        
      }}>
        <Typography>This is the modal title</Typography>
      </Modal>
    </div>
   
  )
}

export default Quora;