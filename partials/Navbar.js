import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { useState,useEffect } from 'react'


export default function Navbar() {
  const [showIcons, setShowIcons] = useState(false)

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div >
      <header>
        <nav className={`navbar ${isFixed ? "scrolled_nav" : ""}`}>
          <Link href="/" className="logo me-auto"><Image src="/educational.png" alt="" width="200" height="50" className="img-fluid" /></Link>
          <ul className='navbar_content'>
            <li><Link className="current" href="/">Home</Link></li>
            <li><Link href="/Services">Servises</Link></li>
            <li><Link href="/About">About us</Link></li>
            <li><Link href="/Contect">Contact</Link></li>
            <Link href="/login_component" className="get-started-btn">Get Started</Link>
          </ul>
          <div className='hamburger_menu' onClick={() => setShowIcons(!showIcons)}> 
              <i className="fa-solid fa-bars fa-xl" style={{ color: "#ad56b8" }}></i>
          </div>
        </nav>
        <div className={showIcons ? "dropdown_menu" : 'displaynone'}>
            <li><Link onClick={() => setShowIcons(!showIcons)} className="dp_current" href="/">Home</Link></li>
            <li><Link onClick={() => setShowIcons(!showIcons)} href="/Services">Servises</Link></li>
            <li><Link onClick={() => setShowIcons(!showIcons)} href="/About">About us</Link></li>
            <li><Link onClick={() => setShowIcons(!showIcons)} href="/Contect">Contact</Link></li>
            <li><Link onClick={() => setShowIcons(!showIcons)} href="/login_component" className="get-started-btn">Get Started</Link></li>
        </div>
      </header>
    </div>

  )
}
