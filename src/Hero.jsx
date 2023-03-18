import React from 'react'


function hero() {
  return (
<div>
<section className="hero-section">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6">
        <div className="hero-text">
          <h1>Welcome to Petshop</h1>
          <p>Welcome to our pet store, where the fur flies and the tails never stop wagging!
          </p>
          <button className="btn btn-lg btn-primary">Get Started</button>
        </div>
      </div>
      <div className="col-md-6">
        <img className="img-fluid" src="../src/assets/img/pexels-gustavo-fring-4148879.jpg" alt="Lady with Pet" loading="lazy"></img>
      </div>
    </div>
  </div>
</section>
<br/>
</div>
  )
}

export default hero
