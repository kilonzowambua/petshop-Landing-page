import { useState } from 'react'
import React from 'react'


function Header() {


  return (
    <div>

      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Petshop</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse float-center" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Our Services</a>
                </li>
            
              </ul>
            </div>
            <div className="navbar-buttons float-left">
              <button className="btn btn-outline-secondary me-2" type="button">Login</button>
              <button className="btn btn-primary" type="button">Register</button>
            </div>
          </div>
        </nav>
      </header>
      </div>
  

  )
}

export default Header
