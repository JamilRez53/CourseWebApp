import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Results.css"
import ResultTable from './ResultTable'
import {useDispatch} from 'react-redux'
import { resetAllAction } from '../../../redux/QuestionReducer'
import { resetResultAction } from '../../../redux/ResultReducer'
const Results = () => {
    const dispatch = useDispatch();
    const onRestart = () =>{
         dispatch(resetAllAction)
         dispatch(resetResultAction)
    }
  return (
    <div>
       <div className='container'>
        <Typography variant='h2' sx={{marginBottom:"20px"}}>Quiz Score</Typography>

        <div className='result flex-center'>
            <div className='flex'>
                <Typography>Username</Typography>
                <Typography className='bold'>Jamil Reza</Typography>
            </div>
            {/* {userId || ""} */}
            <div className='flex'>
                <Typography>Total Quiz Points : </Typography>
                <Typography className='bold'>50</Typography>
            </div>
            {/* {totalPoints || 0} */}
            <div className='flex'>
                <Typography>Total Questions : </Typography>
                <Typography className='bold'>10</Typography>
            </div>
            {/* { queue.length || 0} */}
            <div className='flex'>
                <Typography>Total Attempts : </Typography>
                <Typography className='bold'>3</Typography>
            </div>
            {/* {attempts || 0} */}
            <div className='flex'>
                <Typography>Total Earn Points : </Typography>
                <Typography className='bold'>30</Typography>
            </div>
            {/* {earnPoints || 0} */}
            {/* <div className='flex'>
                <span>Quiz Result</span>
                <span style={{ color : `${flag ? "#2aff95" : "#ff2a66" }` }} className='bold'>{flag ? "Passed" : "Failed"}</span>
            </div> */}
        </div>

        <div className="start">
            {/* <Link className='btn' to={'/quiz'} onClick={onRestart}>Restart</Link> */}
            <Button component={Link} to="/quiz" onClick={onRestart}>Restart</Button>
        </div>

        <div className="container">
            {/* result table */}
            <ResultTable></ResultTable>
        </div>
    </div>
    </div>
  )
}

export default Results
