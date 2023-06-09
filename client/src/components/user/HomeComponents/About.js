import React from 'react'
import AboutBackground from "../../../assets/About.jpg";
//import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Typography } from '@mui/material';

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img width="600px" src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        {/* <img src={AboutBackgroundImage} alt="" /> */}
      </div>
      <div className="about-section-text-container">
        <Typography variant='h2' className="primary-subheading">About</Typography>
        <Typography variant='h3' className="primary-heading">
          CyberSecurity knowledge ian important point in this ever-growing technological world.
        </Typography>
        <Typography className="primary-text">
        The importance of cyber security comes down to the need and requirement to keep information, data, and devices secure.
         In today's world, people store vast quantities of data on computers, servers and other connected devices. 
        </Typography>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
