import Dashboard from '@/component/dashboard';
import Analytics from '@/component/analytics';

import { useState, useEffect } from 'react';
import Profile from '@/component/profile';
import Settings from '@/component/settings';
import styles from '@/styles/sidebar.module.css';
import Image from 'next/image';

const Sidebar = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState(<Dashboard />);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            name: "Dashboard",
            icon: <i className="fa-solid fa-gauge" style={{ color: "#ffffff;" }}></i>,
            component: <Dashboard />
        },
        {
            name: "Analytics",
            icon: <i className="fa-solid fa-chart-line" style={{ color: "#ffffff;" }}></i>,
            component: <Analytics />

        },
        {
            name: "Profile",
            icon: <i className="fa-solid fa-user" style={{ color: "#ffffff;" }}></i>,
            component: <Profile />
        },
        {
            name: "Settings",
            icon: <i className="fa-solid fa-gear" style={{ color: "#ffffff;" }}></i>,
            component: <Settings />
        }
    ]

    const handleMenuItemClick = (index) => {
        setActiveComponent(menuItem[index].component);
    }

    return (
        <div className={`${styles.sidebar_container}`}>
            <div style={{ width: isOpen ? "220px" : "50px" }} className={styles.sidebar}>
                <div className={styles.top_section}>
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
                        <Image src="/educational.png" alt="" width="67" height="38" />
                    </h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} title="sidebar" className="bars">
                        <i className="fa-solid fa-bars" onClick={toggle} style={{ color: "#ffffff;", cursor: "pointer" }}></i>
                    </div>
                </div>
                <div className={styles.link_section}>
                    {
                        menuItem.map((item, index) => (
                            <div key={index} className={styles.link} title={item.name} onClick={() => handleMenuItemClick(index)}>
                                <div className="icon" >{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className={styles.link_text}>{item.name}</div>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.logout_button} title="logout">
                    <i className="fa-solid fa-arrow-right-from-bracket fa-lg"></i>
                    <div className={styles.link_text} >Logout</div>
                </div>
            </div>
            <main>
                {activeComponent ? activeComponent : children}
            </main>
        </div>
    );
};

export default Sidebar;