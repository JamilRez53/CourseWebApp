import React ,{useState,useEffect, useRef}from 'react'
import { useParams,useNavigate, Link } from 'react-router-dom'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import JoditEditor from 'jodit-react'
const UpdateTopics = () => {
  const editor = useRef();
  const {id} =useParams();
    const navigate = useNavigate();
    const[inputdata,setinputData] = useState({name:'',heading:'',description:''})
    const{ name, heading,description } = inputdata;
    useEffect(() => {
      getTopics();
    }, []);
    const getTopics = async ()=>{
     await axios.get(`http://localhost:5000/topics/getSingleTopics/${id}`).then(res => setinputData(res.data))
           
    }
    const UpdateTopic = async(e) =>{
      console.log(e);
    e.preventDefault();
        try {
            let res = await fetch(`http://localhost:5000/topics/updateTopics/${id}`,{
        method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
           inputdata:inputdata
        }),
     }).then((data) => {
       console.log(data, "TopicAdded");
       setinputData(" ")
        //  setMessage("Topic added successfully");
       });
       //let resJson = await res.json();
          window.location.href="./Topics"
          e.target.reset();
        } catch (error) {
            console.log(error);
        }
        e.target.reset();
    
  }
  const handleChange = (value) => {
    setinputData({...description,'data':value});
  }
  
  
  return (
    <>
    
    <div className="auth-wrapper">
    <div className="auth-inner">
        <form onSubmit={UpdateTopic}>
        <h1>UpdateTopic</h1>  
    <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e)=>setinputData({...inputdata,name:e.target.value})}
            />
          </div>

          <div className="mb-3">
            <label>Heading</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Heading"
              value={heading}
              onChange={(e)=>setinputData({...inputdata,heading:e.target.value})}
            />
          </div>

          <JoditEditor
          ref={editor}
          value={inputdata.description}
          onChange={handleChange}
          />

          <div className="d-grid">
            <button component={Link} to="/topics" type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        </div>
        </div>
      </>
  )
}

export default UpdateTopics