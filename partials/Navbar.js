// import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import UserMenu from '@/component/dropdown';


export default function Navbar() {
  const [showIcons, setShowIcons] = useState(false)
  const [isFixed, setIsFixed] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false)


  useEffect(() => {
    const token =  localStorage.getItem('token'); 
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
    
    if(!token) {
      return setIsLoggedin(true)
    }else{
      setIsLoggedin(false)
    }

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
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/Contect">Contact</Link></li>
            {isLoggedin ? <Link href="/login" className="get-started-btn">Get Started</Link> : <UserMenu />}
          </ul>
          {/* {isLoggedin ?
          <div className='hamburger_menu' onClick={() => setShowIcons(!showIcons)}> 
              <i className="fa-solid fa-bars fa-xl" style={{ color: "#ad56b8" }}></i>
          </div>
          : <UserMenu />} */}
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
