import React from 'react'
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await fetch("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    })
  }



  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' onChange={handleChange} name='username' />
        <input required type="email" placeholder='email' onChange={handleChange} name='email' />
        <input required type="password" placeholder='password' onChange={handleChange} name='password' />
        <button onClick={handleSubmit}>Register</button>
      </form>
      <span>Do you have an account? <a href="/login">Login</a></span>
    </div>
  )
}

export default Register