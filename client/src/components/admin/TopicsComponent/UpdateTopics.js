import React ,{useState,useEffect}from 'react'
import { useParams,useNavigate, Link } from 'react-router-dom'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
const UpdateTopics = () => {
  const {id} =useParams();
    const navigate = useNavigate();
    const[inputdata,setinputData] = useState({name:'',subtopic:'',heading:'',description:''})
    const{ name, subtopic, heading,description } = inputdata;
    useEffect(() => {
      getTopics();
    }, []);
    const getTopics = async ()=>{
     await axios.get(`http://localhost:5000/topics/getSingleTopics/${id}`).then(res => setinputData(res.data))
           
    }
    const UpdateTopic = async(e) =>{
      e.preventDefault()
     await axios.post(`http://localhost:5000/topics/updateTopics/${id}`,inputdata).then(res=>{
      navigate('/topics')})
     alert("Topics Updated Successfully!!");
     e.target.reset();
    
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
            <label>SubTopic</label>
            <input
              type="text"
              className="form-control"
              placeholder="SubTopic"
              value={subtopic}
              onChange={(e)=>setinputData({...inputdata,subtopic:e.target.value})}
            />
          </div>

          <div className="mb-3">
            <label>Heading</label>
            <input
              type="text"
              className="form-control"
              placeholder="Heading"
              value={heading}
              onChange={(e)=>setinputData({...inputdata,heading:e.target.value})}
            />
          </div>

          <div className="mb-3">
            <label>Description</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Description"
              style={{height:"200px", width :"300px" }}
              value={description}
              onChange={(e)=>setinputData({...inputdata,description:e.target.value})}
            />
          </div>

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