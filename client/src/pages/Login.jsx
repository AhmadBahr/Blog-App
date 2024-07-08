import React from 'react'

const Login = () => {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password' />
            <button>Login</button>
        </form>
        <span>Don't have an account? <a href="/register">Register</a></span>
    </div>
  )
}

export default Login