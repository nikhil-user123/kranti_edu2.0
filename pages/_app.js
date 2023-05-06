
import '@/styles/index.css'
import '@/styles/navbar.css'
import '@/styles/Contectcss.css'
import '@/styles/main.css'
import '@/styles/services.css'
import '@/styles/global.css'
import '@/styles/aboutcss.css'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import Navbar from '@/partials/Navbar'
import { useRouter } from "next/router";
import DashboardLayout from '@/partials/layout/dashboard'
import Footer from '@/partials/footer'




export default function App({ Component, pageProps }) {

  const router = useRouter();
  const { pathname } = router


  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000
    });
  }, []);

  if (pathname.startsWith("/dashboard")) {
    return (
      <>
        <Navbar />
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

const EmtyLayout = ({ children }) => <>{children}</>