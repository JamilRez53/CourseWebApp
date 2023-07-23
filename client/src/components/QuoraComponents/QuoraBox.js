import React from 'react'
import "./css/QuoraBox.css";
import { Avatar } from "@material-ui/core";
const QuoraBox = () => {
  return (
    <div className="quoraBox">
    <div className="quoraBox__info">
    {/* src={user?.photo} */}
      <Avatar  />
    </div>
    <div className="quoraBox__quora">
      <h5>What is your question or link?</h5>
    </div>
  </div>
  )
}

export default QuoraBox