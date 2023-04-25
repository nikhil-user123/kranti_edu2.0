import React from 'react'
import './navbar.css'
// import {Link} from 'react'


export default function Home() {
 
  return (
    <div >
      <header>
        <div class="container-box scrolled">
          <nav className='navbar'>
            <a href="/" className="logo me-auto"><img src="/educational.jpg" alt="" className="img-fluid" /></a>
            <ul className='navbar_content'>
              <li><a class="current" href="/">Home</a></li>
              <li><a href="#">Servises</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact</a></li>
              <a href="/login" class="get-started-btn">Get Started</a>
            </ul>
          </nav>
        </div>
      </header>
    </div>

  )
}
