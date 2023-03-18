import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Hero from './Hero'
import About_us from './About_us'
import Services from './Services'
import Contact_us from './Contact'
import Footer from './Footer'
import './assets/css/style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <About_us />
    <Services />
    <Footer />
</React.StrictMode>,
)
