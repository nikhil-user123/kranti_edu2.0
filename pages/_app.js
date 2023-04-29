
import '@/styles/index.css'
import '@/styles/navbar.css'
import '@/styles/Contectcss.css'
import '@/styles/main.css'
import '@/styles/services.css'
import '@/styles/global.css'
import '@/styles/aboutcss.css'
import '@/styles/footer.css'
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react'
import Navbar from '@/helper/Navbar'


export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000
    });
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
