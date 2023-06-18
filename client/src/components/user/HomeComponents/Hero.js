import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../../assets/hero-img1.png";
import "./Hero.css";
import { Button, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <section>
      <div style={{display:"flex"}}>
       
          <Col lg="6" md="6">
            <div className="hero__content">
              <Typography variant="h3" sx={{color:"#fe9e0d"}} className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your Suitable Schedule
              </Typography>
              <Typography sx={{fontSize:"20px"}}className="mb-5">
              
              Here u will get all the basic knowledge on Security and Cryptographic contents along with other aspects such aspects <br/>
            threats pertaining to cyberSecurity as well as several practical works .
              </Typography>
            </div>
            {/* <div className="search" style={{width:"400px"}}>
              <input type="text" placeholder="Search" />
              <Button>Search</Button>
            </div> */}
          </Col>

          <Col lg="6" md="6">
            <img style={{width:"500px",height:"500px",marginLeft:"170px"}} src={heroImg} alt="" className=" hero__img" />
          </Col>
      </div>
    </section>
  );
};

export default HeroSection;
