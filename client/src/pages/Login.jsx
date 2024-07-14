import { axios } from 'axios';
import { useNavigate } from 'react-router-dom';
import React from 'react'

const Login = () => {
  const [inputs, setInputs] = React.useState({
    username: "",
    password: "",
  });
  const [err, setError] = React.useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder='username' name='username' onChange={}/>
            <input type="password" placeholder='password' name='password' />
            <button onClick={handleSubmit}>Login</button>
            {err && <span>{err.message}</span>}
        </form>
        <span>Don't have an account? <a href="/register">Register</a></span>
    </div>
  )
}

export default Login