import React,{useState} from 'react'
const AddTopics = () => {
    const[name,setname] = useState("");
    const[subtopic,setsubtopic] = useState("");
    const[heading,setheading] = useState("");
    const[description,setDescription] = useState("");
    const[message,setMessage] = useState("");
    const SaveTopic = async(e) =>{
        console.log(e);
    e.preventDefault();
        try {
            let res = await fetch("http://localhost:5000/topics/addTopics",{
        method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
            name:name,
            subtopic:subtopic,
            heading:heading,
            description:description
        }),
     }).then((res) => res.json())
     .then((data) => {
       console.log(data, "TopicAdded");
       });
       //let resJson = await res.json();
       if (res.status === 200) {
         setname("");
         setsubtopic("");
         setheading("");
         setDescription("");
         setMessage("Topic added successfully");
       } else {
         setMessage("Some error occured");
       }
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
    <h1>Add Topic</h1>
    <form onSubmit={SaveTopic}>

    
    <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(e)=>setname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>SubTopic</label>
            <input
              type="text"
              className="form-control"
              placeholder="SubTopic"
              onChange={(e)=>setsubtopic(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Heading</label>
            <input
              type="text"
              className="form-control"
              placeholder="Heading"
              onChange={(e)=>setheading(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Description</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Description"
              style={{height:"200px", width :"300px" }}
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

export default AddTopics