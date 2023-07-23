import React from 'react'
import "./css/WidgetContent.css";
import { Typography } from '@material-ui/core';

const WidgetContent = () => {
  return (
    <div className=" widget__contents">
      <div className="widget__content">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-ti-1737435-100-jxcfmjdvwvpkcketifttdmeeimxcatua.jpeg"
          alt=""
        />
        <div className="widget__contentTitle">
          <Typography variant='h5'>All u want to know about cyberSecurity</Typography>
          <Typography>The best cyberSecurity company</Typography>
        </div>
      </div>
    </div>
  )
}

export default WidgetContent