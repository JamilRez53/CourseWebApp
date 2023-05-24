import React ,{useState,useEffect, useRef}from 'react'
import { useParams,useNavigate, Link } from 'react-router-dom'
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "./UpdateTopics.css";
import JoditEditor from 'jodit-react'
import Reactquill from 'react-quill'
const UpdateTopics = () => {
  const editor = useRef(null);
     const {id} =useParams();
   // const navigate = useNavigate();
    const[inputdata,setinputData] = useState({name:'',heading:''})
    const[description,setDescription] = useState('')
    // const[description,setDescription] = useState('')
    const{ name, heading } = inputdata;
    useEffect(() => {
      getTopics();
    }, []);
    const getTopics = async ()=>{
     await axios.get(`http://localhost:5000/topics/getSingleTopics/${id}`).then((res)=>{
      const { name,heading, description } = res.data;
     setinputData({...inputdata,name,heading});
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
        await axios.put(`http://localhost:5000/topics/updateTopics/${id}`, {name,heading,description})
        // .then((res)=>{
        //   console.log(res.data);
        //   setinputData(res.data);
        //   console.log(setinputData(res.data))
        //   //window.location.href="/topics"
        // })
        .then((response) => {
        console.log(response);
        const { name, heading,description } = response.data;
        // empty state
        setinputData({ ...inputdata, name,description,heading });
        

        // show sucess alert
       // alert(`${name} blog post is updated`);
      });
       //let resJson = await res.json();
          // window.location.href="./Topics"
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
    
    
        <form className='topic-container' onSubmit={UpdateTopic}>
        <h1>UpdateTopic</h1>  
    <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(event) => handleContent(event, 'name')}
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