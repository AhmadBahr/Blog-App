import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/auth/register", inputs); 
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='username' onChange={handleChange} name='username' />
        <input required type="email" placeholder='email' onChange={handleChange} name='email' />
        <input required type="password" placeholder='password' onChange={handleChange} name='password' />
        <button onClick={handleSubmit}>Register</button>
        {
          error && <span>{error.message}</span>
        }
      </form>
      <span>Do you have an account? <Link to="/login">Login</Link></span>
    </div>
  );
}

export default Register;
