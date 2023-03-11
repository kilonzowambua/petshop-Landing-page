import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Sections from './Sections'
import Sections2 from './Sections2'
import Footer from './Footer'
import './assets/css/custom.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Sections />
    <Sections2 />
    <Footer />

  </React.StrictMode>,
)
