import React,{useState} from 'react'
import axios from 'axios';
const AddTutorials = () => {
    const[name,setname] = useState("");
    const[description,setDescription] = useState("");
    const[videos,setVideos] = useState([]);
    const SaveTutorial = async(e) =>{
        console.log(e);
    e.preventDefault();
    let formdata = new FormData();
    for (let key in videos) {
      formdata.append("videos", videos[key]);
    }

    formdata.append("name", name);
    formdata.append("description",description)
     await axios.post("http://localhost:5000/tutorials/addTutorial", formdata)
      .then((success) => {
        alert("Submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error happened!");
      });

        e.target.reset();
    }
  return (
    <>
    <h1>Add Tutorials</h1>
    <form onSubmit={SaveTutorial}>

    
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
            <label>Description</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Description"
              style={{height:"200px", width :"300px" }}
              onChange={(e)=>setDescription(e.target.value)}
            />
          </div>
          <label >Upload Videos</label>
          <input
            type="file"
            name="videos"
            id="videos"
            multiple
            className="form-control"
            accept=".mp4, .mkv"
            onChange={(e) => {
              setVideos(e.target.files);
            }}
          />
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
          </form>
          </>
  )
}

export default AddTutorials