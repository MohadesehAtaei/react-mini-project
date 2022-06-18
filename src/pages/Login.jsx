import React from 'react'
import image from '../assets/Image/photo.jpg'

function Login() {

  return (
    <div>
      <div className="container my-5 d-flex logForm">
        <div className='col-md-6'>
        <form action="" className='row justify-content-center p-5 m-auto'>
                <h3 className='text-center'>Login In to <strong>Foody</strong></h3>
                <p className='text-muted'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt maiores </p>
                <input className="form-control mb-3" type="text" placeholder="Username" ></input>
                <input className="form-control mb-3" type="password" placeholder="Password" ></input>
                <input className="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                <span className='w-75 '>Remember me Forgot Password</span>
                <button className='btn btn-primary w-50 mt-5 fs-5'>Login</button>
            </form>
        </div>
        <div className='col-md-6 d-md-block d-none'>
        <img className='form-img' src={image} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Login