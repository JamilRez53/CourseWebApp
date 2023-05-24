import React,{useState,useRef} from 'react'
import JoditEditor from 'jodit-react';
import  "./Jodit.css";
import "./AddTopics.css"
import ReactQuill from 'react-quill';
import axios from 'axios';
const AddTopics = () => {
  const editor = useRef(null);
    const[name,setname] = useState('');
    const[heading,setHeading] = useState('');
    const[description,setDescription] = useState('');
    const[message,setMessage] = useState("");
    const handleContent = (event) => {
      console.log(event);
      setDescription(event);
    };
    const SaveTopic = async(e) =>{
        console.log(e);
    e.preventDefault();
        try {
            let res = await axios.post("http://localhost:5000/topics/addTopics",{name,heading,description},{
        method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
            name:name,
            heading:heading,
            description:description
        }),
     }).then((data) => {
       console.log(data, "TopicAdded");
       setname("");
       setDescription("");
       setHeading("");
         setMessage("Topic added successfully");
       });
       //let resJson = await res.json();
       //   window.location.href="./Topics"
          e.target.reset();
        } catch (error) {
            console.log(error);
        }
        e.target.reset();
    }
    const contentFieldChanaged = (data) => {

      setDescription({ ...description, 'content': data })


  }
  const  modules  = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],
};
  
  return (
    <>
    <h1>Add Topic</h1>
    <form className="topic-container" onSubmit={SaveTopic}>

    
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
            <label>Heading</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Heading"
              onChange={(e)=>setHeading(e.target.value)}
            />
          </div>

            <label>Description</label>
          {/* <JoditEditor 
			ref={editor}
			value={description.content}
			onChange={(newContent) => contentFieldChanaged(newContent)}
      className="toolbar-component"
		/> */}
          <ReactQuill
          theme='snow'
          className='ql-container'
          modules={modules}
          value={description}
          onChange={handleContent}
          />
            

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