import React from 'react'
import './navbar.css'
// import {Link} from 'react'
import { useEffect, useState } from 'react';


export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    console.log("i run")
  })
  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }
  return (
    <div className='div'>
      <header>
        <div class="container-box">
          <nav className={navbarClasses.join(" ")}>
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
