import React from 'react'


function About_us() {
  return (
<div>
<section className="about-section" id="about">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src="../src/assets/img/about.jpg" alt="About Us Image" className="img-fluid"></img>
      </div>
      <div className="col-md-6">
        <h2>About Us</h2>
        <p>We are a pet store that specializes in providing the best products and services for all your pets' needs. Our team of experts are dedicated to ensuring that your pets are healthy, happy, and well-cared for.</p>
        <ul className="about-list">
          <li><i className="fas fa-check"></i> Quality Products</li>
          <li><i className="fas fa-check"></i> Expert Advice</li>
          <li><i className="fas fa-check"></i> Friendly Service</li>
          <li><i className="fas fa-check"></i> Affordable Prices</li>
        </ul>
        <a href="#" className="btn btn-primary">Learn More</a>
      </div>
    </div>
  </div>
</section>

</div>
  
 
  )
}

export default About_us
