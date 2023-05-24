import React, { useState,useEffect } from 'react'
import Questionset from './QuestionSet';
import { Button } from '@mui/material';
import {useSelector,useDispatch} from 'react-redux'
import { MoveNextQuestion,MovePrevQuestion } from '../../../hooks/QuestionFetch';
import { PushAnswer } from '../../../hooks/setResult';
import {Navigate} from 'react-router-dom'
const QuizMain = () => {
    const dispatch = useDispatch();
    const[check,setChecked] = useState(undefined)
    const result = useSelector(state=>state.results.result)
    const {queue,trace} = useSelector(state=>state.questions)
    useEffect(()=>{
        console.log(result);
    })
    const onPrev = () =>{
       // console.log("On Prev");
        if(trace>0){
            dispatch(MovePrevQuestion());
           
        }
    }

    const onNext = () =>{
       // console.log("On next");
        if(trace<queue.length){
            dispatch(MoveNextQuestion());
            if(trace<queue.length){
              dispatch(PushAnswer(check));
            }
            
        }
    }
    if(result.length && result.length>=queue.length){
        return <Navigate to={'/result'} replace="true"></Navigate>
    }
 const onChecked = (check) =>{
   console.log(check)
   setChecked(check)
 }
    
  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        {/* display questions */}
        <Questionset
        onChecked={onChecked}
        />

        <div className='grid'>
            { trace > 0 ? <Button onClick={onPrev}>Prev</Button> : <div></div>}
            {/* <Button onClick={onPrev}>Prev</Button> */}
            <Button onClick={onNext}>Next</Button>
        </div>
    </div>
  )
}

export default QuizMain
