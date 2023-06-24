
import { useEffect, useState } from 'react';
import styles from '@/partials/layout/sidebar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '@/context/layoutContext';
import { useRouter } from 'next/router';


const DashboardLayout = ({ children }) => {
    const router = useRouter()
    const { showSidebar, updateMessage } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        updateMessage(!showSidebar);
        setIsOpen(!isOpen);
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        
        router.push('/login');
      };

    const menuItem = [
        {
            name: "Dashboard",
            icon: <i className="fa-solid fa-gauge" ></i>,
            href: "/dashboard",
        },
        {
            name: "Assignments",
            icon: <i className="fa-solid fa-gauge" ></i>,
            href: "/dashboard/assignment",
        },
        {
            name: "Analytics",
            icon: <i className="fa-solid fa-chart-line" ></i>,
            href: "/dashboard/analytics",
        },
        {
            name: "Profile",
            icon: <i className="fa-solid fa-user" ></i>,
            href: "/dashboard/profile"
        },
        {
            name: "Settings",
            icon: <i className="fa-solid fa-gear" ></i>,
            href: "/dashboard/settings"
        }
    ]

    useEffect(() => {
        setIsOpen(showSidebar);
    }, [showSidebar]);
    return (
        // style={{ marginLeft: isOpen ? "50px" : "0px" }}
        <>
            <div className={styles.sidebar_container}>
                <div className={isOpen ? styles.model_wrapper :styles.displaynone} onClick={toggle}></div>
                <div className={isOpen ? styles.mob_sidebar : styles.sidebar}>
                    <div className={styles.top_section}>
                        <h1 className="logo">
                            <Image src="/educational.png" alt="" width="67" height="38" />
                        </h1>
                        <div title="sidebar" className={styles.xmark}>
                            <i className="fa-solid fa-xmark fa-xl" onClick={toggle} style={{ color: "black", cursor: "pointer", marginLeft: "90px" }}></i>
                        </div>
                    </div>
                    <div className={styles.link_section}>
                        {
                            menuItem.map((item, index) => (

                                <Link title={item.name} className={styles.link} href={item.href} key={index}>
                                    <div className="" >{item.icon}</div>
                                    <div className={styles.link_text}>{item.name}</div>
                                </Link>
                            ))
                        }
                    </div>
                    <div className={styles.logout_button} title="logout">
                        <i className="fa-solid fa-arrow-right-from-bracket fa-lg"></i>
                        <div className={styles.link_text} onClick={handleLogout} >Logout</div>
                    </div>
                </div>
                <main>
                    {children}
                </main>
            </div>
        </>
    );
};

export default DashboardLayout;