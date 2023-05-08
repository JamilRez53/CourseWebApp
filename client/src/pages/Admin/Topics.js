import React, { useEffect, useRef, useState } from 'react'
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Navbar from "../../components/admin/Navbar"
import Button from '@mui/material/Button';
import { IconButton, TextField } from '@mui/material';
import { Edit, Delete,Visibility } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AddTopics from '../../components/admin/TopicsComponent/AddTopics';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 700,
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
      marginLeft: '650px'
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
const Topics = () => {
  const classes = useStyles();
  const[limit,setLimit] = useState(5);
  const [topicname,setTopicname] = useState("");
  const[pageCount,setPageCount] = useState(1);
  const currentPage = useRef();
  const [topics,setTopics] = useState([]);
  const [isModalOpen,setModalOpen]=useState(false);
  const [isEditModalOpen,setEditModalOpen] = useState(false);
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
     
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
      
    },
  }))(TableRow);
  const setShow  = ()=>{
    setModalOpen(true);
  }
  const setClose = () =>{
    setModalOpen(false);
  }
  
  // const fetchData = async() =>{
  //   await fetch("http://localhost:5000/topics/getTopics",{
  //           method:"GET",
  //        }).then((res) => res.json())
  //        .then((data) => {
  //          console.log(data, "TopicsData");
  //          setTopics(data.data);
  //        })
  // }
  const deleteTopic = async(id,name) =>{
    if(window.confirm(`Are u sure u want to delete the topic ${name}`)){
     await fetch("http://localhost:5000/topics/deleteTopics",{
      method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
            topicid:id,
        }),
     }).then((res) => res.json())
     .then((data) => {
       console.log(data);
       });
    }
  }
  const SearchTopic = async() =>{
    await axios.get(`http://localhost:5000/topics/search/${topicname}`).then(res=>{
     setTopics(res.data)
    })
  }
  const handlePageClick = async(e) =>{
      console.log(e);
      currentPage.current=e.selected+1;
      getPaginatedUsers();
      
  }
  const getPaginatedUsers = async()=>{
     await fetch(`http://localhost:5000/topics/paginatedTopics?page=${currentPage.current}&limit=${limit}`,{
            method:"GET",
         }).then((res) => res.json())
         .then((data) => {
           console.log(data, "TopicsData");
           setPageCount(data.pageCount);
           setTopics(data.result);
         })
  }
  useEffect(()=>{
    currentPage.current=1;
   // fetchData();
    getPaginatedUsers();
  },[]);
  
  
  return (
    <>
    
    <Navbar/>
     <Button sx={{marginTop: 2, marginBottom:2 ,marginLeft:'730px'}} onClick={setShow}>Add Topics</Button>

     <div className={classes.searchContainer}>
    
        <TextField 
        className={classes.searchInput}
        label="Search"
      variant="outlined"
      size="small"
      
       value={topicname} onChange={(event)=>{setTopicname(event.target.value)}}/>
       <Button className="search-button" onClick={SearchTopic}>Search</Button>
     
        
        
       
     </div>
     {topics!==null && topics.filter(item=>{
          const searchTerm = topicname.toLowerCase();
          const full_topic = item.name.toLowerCase();
          return searchTerm && full_topic.startsWith(searchTerm) && full_topic!==searchTerm;
        }).map((item)=>(
         <MenuItem key={item._id} onClick={()=>{setTopicname(item.name)}} className={classes.menuItem}>
          {item.name}
         </MenuItem>
       ))}
     <TableContainer component={Paper} aria-label="customized table">
      <Table  className={classes.table}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell >Name</StyledTableCell>
            <StyledTableCell >SubTopic</StyledTableCell>
            <StyledTableCell > Heading</StyledTableCell>
            <StyledTableCell >Actions</StyledTableCell>
           
          </StyledTableRow>
        </TableHead>
        <TableBody border="none">
          {topics!==null && topics.map((topic) => {
            return(
            <StyledTableRow 
              key={topic._id} >
              <StyledTableCell  component="th" scope="row">
                {topic.name}
              </StyledTableCell>
              <StyledTableCell >{topic.subtopic}</StyledTableCell>
              <StyledTableCell >{topic.heading}</StyledTableCell>
              <StyledTableCell  >
                <IconButton arial-label="edit" component={Link} to={`/viewTopics/${topic._id}`}>
                  <Visibility/>
                </IconButton>
              <IconButton  aria-label="edit" component={Link} to={`/editTopics/${topic._id}`}>
        <Edit />
  
      </IconButton>
      <IconButton onClick={()=>deleteTopic(topic._id,topic.name)} aria-label="delete">
        <Delete/>
      </IconButton>
              </StyledTableCell>
            </StyledTableRow>
     );
     })}
        </TableBody>
      </Table>
    </TableContainer>
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={20}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
            
      />
    <Modal
  open={isModalOpen}
  onClose={setClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,}}>
   <AddTopics/>
  </Box>
</Modal>

</>
  )
}

export default Topics





