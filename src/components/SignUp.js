import React from 'react'
import { useState } from 'react'
const Signup = () => {
  const[fname,setFname] = useState("");
  const[lname,setLname] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[message,setMessage] = useState("");
  const handleInputs=async(e)=>{
    console.log(e);
    e.preventDefault();
    try {
        let res = await fetch("http://localhost:5000/auth/register",{
        method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        },
        body:JSON.stringify({
            fname:fname,
            lname:lname,
            email:email,
            password:password
        }),
     }).then((res) => res.json())
     .then((data) => {
       console.log(data, "userRegister");
       });
       //let resJson = await res.json();
       if (res.status === 200) {
         setFname("");
         setLname("");
         setEmail("");
         setPassword("");
         setMessage("User created successfully");
       } else {
         setMessage("Some error occured");
       }
    } catch (error) {
        console.log(error);
    }
     
     
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleInputs}>
          <h3>Sign Up</h3>

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e)=>setFname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e)=>setLname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <div className="message">{message ? <p>{message}</p> : null}</div>
          <p className="forgot-password text-right">
            Already registered <a href="/">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup