import React, { useState,useEffect } from 'react'
import { Button, Typography } from '@mui/material';
import {QuizData} from "../../../Database/Data"
import {Navigate} from 'react-router-dom'
import "./QuizMain.css";
import QuizResult from "./QuizResult";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Hero from "./Hero"
import Header from "../../../pages/User/Header";
import Footer from "./Footer"
const QuizMain = () => {
  
  return (
    <>
      <Header/>
      <Hero/>
      <div className='quiz-content'>
      {/* style={{marginTop:"650px"}} */}
      <div className="card-container"    >
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 1</Typography>
              <Button component={Link} to="/quizweek1/" >Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 2</Typography>
              <Button component={Link} to="/quizweek2/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 3</Typography>
              <Button component={Link} to="/quizweek3/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 4</Typography>
              <Button component={Link} to="/quizweek4/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 5</Typography>
              <Button component={Link} to="/quizweek5/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 6</Typography>
              <Button component={Link} to="/quizweek6/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 7</Typography>
              <Button component={Link} to="/quizweek7/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 8</Typography>
              <Button component={Link} to="/quizweek8/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 9</Typography>
              <Button component={Link} to="/quizweek9/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 10</Typography>
              <Button component={Link} to="/quizweek10/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 11</Typography>
              <Button component={Link} to="/quizweek11/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 12</Typography>
              <Button component={Link} to="/quizweek12/">Try Out</Button>
          </div>
        </div>
        <div className="card-container">
          <div className="card-content">
            <Typography variant='h4' sx={{marginLeft:"10px"}} >QuizTest Week 13</Typography>
              <Button component={Link} to="/quizweek13/">Try Out</Button>
          </div>
        </div>
      </div>
      
        <Footer/>
    </>
  )
}

export default QuizMain
