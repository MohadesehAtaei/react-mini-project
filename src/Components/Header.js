import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Image/logo.jpg'

function Header() {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container-fluid">
      <Link className="navbar-brand ms-3" to='/'>
        <img src={logo} alt='' style={{width: '60px'}}/>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav  mb-2 mb-lg-0 fs-5">
          <li className="nav-item">
            <Link className="nav-link text-light p-3" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light p-3" aria-current="page" to="/user/AdvanceSearch">Advance Search</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light p-3" aria-current="page" to="/user/About">About</Link>
          </li>
        </ul>
      </div>
      <form className="d-flex">
        <Link to='/user/login'>
          <button className="btn btn-primary me-2" type="submit">login</button>
        </Link>
        <Link to='/user/signup'>
        <button className="btn btn-primary" type="submit">signup</button>
        </Link>
      </form>
    </div>
  </nav>
  )
}

export default Header