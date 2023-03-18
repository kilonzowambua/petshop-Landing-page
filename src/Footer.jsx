
import React from 'react'
import ReactDOM from 'react-dom/client'

function Footer() {


  return (
    <div>
    <footer className="footer-section">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h4>About Us</h4>
        <p>We are a pet store that specializes in providing the best products and services for all your pets' needs.</p>
        <ul className="footer-links">
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Meet the Team</a></li>
          <li><a href="#">Testimonials</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h4>Our Services</h4>
        <ul className="footer-links">
          <li><a href="#">Pet Grooming</a></li>
          <li><a href="#">Pet Training</a></li>
          <li><a href="#">Pet Boarding</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h4>Contact Us</h4>
        <ul className="footer-links">
          <li><i className="fas fa-map-marker-alt"></i> 123 Main St, Anytown USA</li>
          <li><i className="fas fa-phone"></i> (123) 456-7890</li>
          <li><i className="fas fa-envelope"></i> info@modernpetshop.com</li>
        </ul>
      </div>
    </div>
    <hr/>
    <div className="row">
      <div className="col-md-12">
        <p>&copy; 2023 Modern Petshop. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

    </div>

  )
}

export default Footer
