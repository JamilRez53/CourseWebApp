import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
const UpdateTutorials = () => {
    const {id} =useParams();
    const navigate = useNavigate();
    const[inputdata,setinputData] = useState({name:'',description:''})
    const{ name,description } = inputdata;
    useEffect(() => {
      getTutorials();
    }, []);
    const getTutorials = async ()=>{
     await axios.get(`http://localhost:5000/tutorials/getSingleTutorial/${id}`).then(res=>setinputData(res.data))
           
    }
    const UpdateTutorial = async(e) =>{
      e.preventDefault()
     await axios.post(`http://localhost:5000/tutorials/updateTutorial/${id}`,inputdata).then(res=>{
      navigate('/tutorials')})
     alert("Tutorial Info Updated Successfully!!");
     e.target.reset();
    
  }
  
  
  return (
    <>
    
    <div className="auth-wrapper">
    <div className="auth-inner">
        <form onSubmit={UpdateTutorial}>
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
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        </div>
        </div>
      </>
  )
  
}

export default UpdateTutorials
