import Dashboard from '@/component/dashboard';
import Analytics from '@/component/analytics';

import React, { useState } from 'react';
import Profile from '@/component/profile';
import Settings from '@/component/settings';
import styles from '@/styles/sidebar.module.css';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const [activeComponent, setActiveComponent] = useState(<Dashboard />);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            name:"Dashboard",
            icon:"icon",
            component: <Dashboard /> 
        },
        {
            name:"Analytics",
            icon:"icon",
            component: <Analytics />

        },
        {
            name:"Profile",
            icon:"icon",
            component: <Profile />
        },
        {
            name:"Settings",
            icon:"icon",
            component: <Settings />
        }
    ]

    const handleMenuItemClick = (index) => {
        setActiveComponent(menuItem[index].component);
    }

    return (
        <div className={styles.sidebar_container}>
           <div style={{width: isOpen ? "200px" : "50px"}} className={styles.sidebar}>
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <button onClick={toggle}>click</button>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <div key={index} className="link" onClick={() => handleMenuItemClick(index)}>
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </div>
                   ))
               }
           </div>
           <main>
               {activeComponent ? activeComponent : children}
           </main>
        </div>
    );
};

export default Sidebar;