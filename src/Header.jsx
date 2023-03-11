import { useState } from 'react'
import reactLogo from './assets/react.svg'


function Header() {


  return (
    <header>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
     
        <li className="nav-item px-3">
          <a className="nav-link "  aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="#">Service</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
    <div className="">
      <ul className="navbar-nav">
      
    <li className="nav-item px-2 justify-content-left">
          <a className="nav-link" href="#">Log in</a>
        </li>
        <li className="nav-item px-2 justify-content-left ">
          <button className="btn custom_btn me-md-2" href="#">Sign Up</button>
        </li>
        </ul>
    </div>
  </div>
</nav>


</header>

  )
}

export default Header
