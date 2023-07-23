import React from 'react'
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Avatar, Button, Typography } from "@material-ui/core";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "./css/Post.css";
const Post = () => {
  return (
    <div className="post">
       <div className="post__info">
        <Avatar/>
         <Typography variant='h4'>User Name</Typography>
         <small>Timestamp</small>
       </div>
       <div className="post__body">
        <div className="post__question">
        <Typography> This is a test question</Typography>
        <button className="post__btnAnswer">Answer</button>
        </div>
       </div>
       <div className="post__footer">
         <div className="post__footerAction">
           <ArrowUpwardIcon/>
           <ArrowDownwardIcon/>
         </div>
         
       </div>
       <Typography>1 Answer</Typography>
       <div className='post__answer'>
       <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "10px 5px",
                borderTop: "1px solid lightgray",
              }}
              className="post-answer-container"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#888",
                }}
                className="post-answered"
              >  
              {/* src={_a?.user?.photo} */}
                <Avatar  />
                <div
                  style={{
                    margin: "0px 10px",
                  }}
                  className="post-info"
                >
                    {/* {_a?.user?.userName} */}
                  <Typography>User Name</Typography>
                  {/* <span>
                    <LastSeen date={_a?.createdAt} />
                  </span> */}
                </div>
              </div>
              {/* {ReactHtmlParser(_a?.answer)} */}
              <div className="post-answer">
                <Typography>This is a test Answer</Typography>
                </div>
            </div>
       </div>
     </div>
  )
}

export default Post