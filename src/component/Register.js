import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

function Register() {
  const [user, setUser] = useState({})
  const navigate = useNavigate()
  function handSubmit(e){
    e.preventDefault()
   fetch("http://localhost:4100/api/auth/register", {
    method: "POST", 
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
   }).then((res) =>{
    console.log("register done")
    if (res.status === 200){
      navigate("/login")
    }
    else{
      alert("Unauthorized Request")
    }
   })
   .catch((err)=> {
    console.log(err)
   })
  }
  return (
    <div className='container-register' >
      <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" 
    onInput={(e)=>{
      user.email=e.target.value
      setUser(user)
    }} value={user.email}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"
     onInput={(e)=>{
      user.password=e.target.value
      setUser(user)
    }} value={user.password}/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="inputAddress" 
     onInput={(e)=>{
      user.name=e.target.value
      setUser(user)
    }} value={user.name}/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Date of Birth</label>
    <input type="date" className="form-control" id="inputAddress2"
     onInput={(e)=>{
      user.dob=e.target.value
      setUser(user)
    }} value={user.dob} />
  </div>
   <div className="col-md-12">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select"
     onChange={(e)=>{
      user.state=e.target.value
      setUser(user)
    }}>
      <option selected value="1">India</option>
      <option value="2">India</option>
      <option value="3">USA</option>
      <option value="4">UK</option>
      <option value="5">UAE</option>
      <option value="6">Other</option>
    </select>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button onClick={handSubmit} value={"Register"} type="submit" className="btn btn-primary">Sign up</button>
  </div>
</form>
    </div>
  )
}

export default Register
