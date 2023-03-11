import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Navbar from './Navbar'
import Sections from './Sections'
import Footer from './Footer'
import './assets/css/custom.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <Sections />
    <Footer />

  </React.StrictMode>,
)
