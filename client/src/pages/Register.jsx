import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = React.useState(null);

  const Navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/auth/register", inputs); 
      Navigate("/login");
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
          error && <span>{err.message}</span>
        }
      </form>
      <span>Do you have an account? <a href="/login">Login</a></span>
    </div>
  );
}

export default Register;
