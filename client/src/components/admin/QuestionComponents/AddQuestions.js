import React,{useState} from 'react'
const AddQuestions = () => {
    const[name,setname] = useState("");
    const[description,setDescription] = useState("");
    const[message,setMessage] = useState("");
    const SaveQuestion = async(e) =>{
        console.log(e);
    e.preventDefault();
        try {
            let res = await fetch("http://localhost:5000/questions/addQuestions",{
        method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
            name:name,
            description:description
        }),
     }).then((res) => res.json())
     .then((data) => {
       console.log(data, "QuestionAdded");
       setname("");
       setDescription("");
       setMessage("Question added successfully");
       });
            
        } catch (error) {
            console.log(error);
        }
        e.target.reset();
    }

  return (
    <>
    <h1>Add Topic</h1>
    <form onSubmit={SaveQuestion}>

    
    <div className="mb-3">
            <label>Question</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Question"
              style={{height:"150px", width :"300px" }}
              onChange={(e)=>setname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Answer</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Answer"
              style={{height:"150px", width :"300px" }}
              onChange={(e)=>setDescription(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
          </>
  )
}

export default AddQuestions