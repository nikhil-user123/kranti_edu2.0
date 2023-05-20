
import { useState } from 'react';
import styles from '@/partials/layout/sidebar.module.css';
import Image from 'next/image';
import Link from 'next/link';

const DashboardLayout = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            name: "Dashboard",
            icon: <i className="fa-solid fa-gauge" ></i>,
            href: "/dashboard",
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


    return (
        // style={{ marginLeft: isOpen ? "50px" : "0px" }}
        <div className={`${styles.sidebar_container}`}>
            <div  className={styles.sidebar}>
                <div className={styles.top_section}>
                    <h1 className="logo">
                        <Image src="/educational.png" alt="" width="67" height="38" />
                    </h1>
                    {/* <div title="sidebar" className="bars">
                        <i className="fa-solid fa-bars" onClick={toggle} style={{ color: "#ffffff;", cursor: "pointer" }}></i>
                    </div> */}
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
                    <div className={styles.link_text} >Logout</div>
                </div>
            </div>
            <main>
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;