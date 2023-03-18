import React from 'react'


function Services() {
  return (
<div>
<section className="our-services-section"id="product">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2>Our Products</h2>
        <p>Check out some of the services we offer to keep your furry friends happy and healthy.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="service-card">
          <img src="../src/assets/img/product-1.png" alt="Service 1"></img>
          <h3>Product 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-card">
          <img src="../src/assets/img/product-2.png" alt="Service 2"></img>
          <h3>Product 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-card">
          <img src="../src/assets/img/product-3.png" alt="Service 3"></img>
          <h3>Product 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
  
 
  )
}

export default Services
