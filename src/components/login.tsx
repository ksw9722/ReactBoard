import * as React from 'react'

const Login = () => {
  return <div className="container">
    <div className="w-25 align-items-center">
        <h3>Login</h3>
        <input type="text" placeholder="email" className="form-control mt-1"></input>
        <input type="text" placeholder="password" className="form-control mt-1"></input>
        <button className="btn btn-primary mt-1">login</button>
    </div>
  </div>
}

export default Login