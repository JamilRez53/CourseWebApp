import React ,{useState,useEffect, useRef}from 'react'
import { useParams,useNavigate, Link } from 'react-router-dom'
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "./UpdateTopics.css";
import JoditEditor from 'jodit-react'
import Reactquill,{Quill} from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
const UpdateTopics = () => {
  const editor = useRef(null);
     const {id} =useParams();
     const navigate = useNavigate();
    const[inputdata,setinputData] = useState({name:'',heading:'',day:'',lesson:''})
    const[description,setDescription] = useState('')
    // const[description,setDescription] = useState('')
    const{ name, heading,day,lesson } = inputdata;
    useEffect(() => {
      getTopics();
    }, []);
    const getTopics = async ()=>{
     await axios.get(`http://localhost:5000/topics/getSingleTopics/${id}`).then((res)=>{
      const { name,heading, description,day,lesson } = res.data;
     setinputData({...inputdata,name,heading,day,lesson});
     setDescription(description);
     console.log(setinputData(res.data))
    })
      // console.log(inputdata);
      // console.log(description);     
    }
    const UpdateTopic = async(e) =>{
      console.log(e);
    e.preventDefault();
        try {
        await axios.put(`http://localhost:5000/topics/updateTopics/${id}`, {name,heading,description,day,lesson})
        .then((response) => {
        console.log(response);
        const { name, heading,description,day,lesson } = response.data;
        setinputData({ ...inputdata, name,description,heading,day,lesson });
      }).then(
        navigate("/topics")
      );
       //let resJson = await res.json();
         
          // e.target.reset();
        } catch (error) {
            console.log(error);
        }
        //e.target.reset();
    
  }
  // const handleChange = (name) => (event) => {
  //   // console.log('name', name, 'event', event.target.value);
  //   setinputData({ ...inputdata, [name]: event.target.value });
  // };
  const handleContent = (event) => {
    console.log(event);
    setDescription(event);
  };
  const handleChange = (event,fieldName) => {
    console.log(event);
    setinputData({
      ...inputdata,
      [fieldName]: event.target.value
  })
  };
  Quill.register('modules/imageResize', ImageResize);
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
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize']
   },
};
  return (
    <>
    
    
        <form className='topics-container' onSubmit={UpdateTopic}>
        <h1>UpdateTopic</h1>  
    <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(event) => handleChange(event, 'name')}
            />
             {/* <JoditEditor
          ref={editor}
          value={name}
          onChange={newContent => setinputData({ ...inputdata, name: newContent })}/> */}
          </div>

          <div className="mb-3">
            <label>Heading</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Heading"
              value={heading}
              onChange={(event) => handleChange(event, 'heading')}
            />
          </div>
          {/* <div className="mb-3">
            
            <textarea
              type="text"
              className="form-control"
              placeholder="Description"
              value={description}
              onChange={(event) => handleContent(event, 'description')}
            />
          </div> */}
          {/* <div className="mb-3">
          <label>Description</label>
          <JoditEditor
          ref={editor}
          value={description}
          onChange={newContent => setinputData({ ...inputdata, description: newContent })}
          />
          </div> */}
          
          <Reactquill
          theme='snow'
          modules={modules}
          value={description}
          onChange={handleContent}
          />
          <div className="mb-3">
            <label>Day</label>
            <input
              type="text"
              className="form-control"
              placeholder="Day"
              value={day}
              onChange={(event) => handleChange(event, 'day')}
            />
          </div>
          <div className="mb-3">
            <label>Lesson</label>
            <input
              type="text"
              className="form-control"
              placeholder="Lesson"
              value={lesson}
              onChange={(event) => handleChange(event, 'lesson')}
            />
          </div>
          
          <div className="d-grid">
            <button component={Link} to="/topics" type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        
      </>
  )
}

export default UpdateTopics