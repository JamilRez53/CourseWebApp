import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./QuestionSet.css";
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useFetchQestion } from '../../../hooks/QuestionFetch';
import { useDispatch, useSelector } from 'react-redux';
import { updateResult } from '../../../hooks/setResult';
const Quiz = ({ onChecked }) => {
  const[question,setQuestion] = useState("");
  const dispatch = useDispatch();
  const[value,setValue] = useState(null);
  const[checked,setChecked] = useState(undefined)
  const [{isLoading , apiData , serverError}] = useFetchQestion() 
  const questions = useSelector(state=>state.questions.queue[state.questions.trace])
  const result = useSelector(state=>state.results.result);
  const {trace} = useSelector(state=>state.questions)
    useEffect(()=>{
      console.log({trace,checked})
      
    },[checked])
  
  function onSelect(i){
    onChecked(i)
    setChecked(i)
    dispatch(updateResult({ trace, checked}))
    //console.log(i)
}
const handleChangeRadio = (e) => {
  setValue(e.target.value);
}

const handleSubmit = () => {
 // submitAnswer(value);
  setValue(null);
}
    if(isLoading) return <Typography variant='h3'>isLoading</Typography>
    if(serverError) return <Typography variant='h3'>{serverError || "Unknown Error"}</Typography>
  return (
    <div className='questions'>
    {questions!==null && (<Typography variant='h2'>{questions?.question}</Typography>)}
    {/* {questions?.id} */}
    <ul key={questions?._id}>
        { 
          
          questions?.options.map((q, i) => (
                <li key={i}>
                    <input 
                        type="radio"
                        value={false}
                        name="options"
                        id={`q${i}-option`}
                        onChange={() => onSelect(i)}
                    />

                    <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label> 
                   <div className={`check ${result[trace] === i ? 'checked' : ''}`}></div>
                </li> 
           )) 
          // <FormControl>
          //   <RadioGroup name="radio-group-quiz" value={value} onChange={handleChangeRadio}>
          //     {question.options.map((o, i) => {
          //       return <FormControlLabel key={i + 1} value={i + 1} control={<Radio />} label={o.description} />
          //     })}
          //   </RadioGroup>
          // </FormControl>
  } 
            
         
    </ul>
</div>
  )
}

export default Quiz
