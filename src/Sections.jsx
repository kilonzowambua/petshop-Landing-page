import { useState } from 'react'
import reactLogo from './assets/react.svg'

function Sections() {
  return (
    <div className="p-5 mb-4 bg-light mt-5">
<div className="row g-5">
        <div className="col-md-6 mb-5">
          <h1 className="display-5 fw-bold mb-5">
            Your Pet is Part <br></br>of Our Family{' '}
          </h1>
          <p className="col-md-8 mb-4">
            Let us treat your pet like our own family with <br></br> best
            service and special package{' '}
          </p>
          <button className="btn custom_btn me-md-2 mb-4" type="button">
            Book a Schedule
          </button>
          <button className="btn custom_btn me-md-2 mb-4" type="button">
            Pricing Packs
          </button>
        </div>
        <div className="col-md-6">
          <img src="../src/assets/images/women.png"  loading="lazy" className="img"/>
        </div>
      </div>
    
    </div>
    
  )
}

export default Sections
