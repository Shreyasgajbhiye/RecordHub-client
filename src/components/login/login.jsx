import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const Login = () => {
  return (
    <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
       <div className='form_container p-5 rounded bg-white'>
        <form>
            <h1 className='text-center'>Sign In</h1>
            <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter email' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter password' className='form-control'/>
            </div>
            <div className='d-grid'>
                <button className='btn btn-primary'>Sign In</button>
            </div>
            <p>
                Forgot <a href=''>Password ?</a>
            </p>
        </form>
       </div>
    </div>
  )
}

export default Login






