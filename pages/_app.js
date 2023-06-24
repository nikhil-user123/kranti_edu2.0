
import '@/styles/index.css'
import '@/styles/navbar.css'
import '@/styles/Contectcss.css'
import '@/styles/main.css'
import '@/styles/services.css'
import '@/styles/global.css'
import '@/styles/aboutcss.scss'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import Navbar from '@/partials/Navbar'
import { useRouter } from "next/router";
import DashboardLayout from '@/partials/layout/sidebar'
import Footer from '@/partials/footer'
import GoToTop from '@/partials/gototop'
import Dashboard_Nav from '@/partials/layout/navbar'
import { AppProvider } from '@/context/layoutContext'
import DashboardLayout2 from '@/partials/layout2/settings_sidebar'




export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1000
    });

    // const scroll = new LocomotiveScroll({el : document.querySelector('.main'),smooth: true})
  }, []);

    // if (pathname.startsWith("/dashboard")) {
    //   return (
    //     <>
    //       <AppProvider>
    //         <DashboardLayout>
    //           <Dashboard_Nav />
    //          <Component {...pageProps} />
    //         </DashboardLayout>
    //       </AppProvider>
    //     </>
    //   )
    // }else  if (pathname.startsWith("/dashboard/settings")) {
    //   console.log("dashboard")
    //   return (
    //     <>
    //       <AppProvider>
    //         <DashboardLayout>
    //           <Dashboard_Nav />
    //           <DashboardLayout2>
    //           <Component {...pageProps} />
    //           </DashboardLayout2>
    //         </DashboardLayout>
    //       </AppProvider>
    //     </>
    //   )
    // }

    if (pathname.startsWith("/dashboard")) {
      return (
        <>
          <AppProvider>
            <DashboardLayout>
              <Dashboard_Nav />
              {pathname.startsWith("/dashboard/settings") ? (
                <DashboardLayout2>
                  <Component {...pageProps} />
                </DashboardLayout2>
              ) : (
                <Component {...pageProps} />
              )}
            </DashboardLayout>
          </AppProvider>
        </>
      );
    }

    return (
      <>
        <Navbar />
        <Component {...pageProps} />
        <GoToTop />
        <Footer />
      </>
    )
  }

const EmtyLayout = ({ children }) => <>{children}</>