
import { useEffect, useState } from 'react';
import styles from '@/partials/layout2/sidebar2.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import axios from 'axios';

import { AppContext } from '@/context/layoutContext';
import { useRouter } from 'next/router';


const DashboardLayout2 = ({ children }) => {


    const [isOpen, setIsOpen] = useState(false);
    const [profile, setProfile] = useState(null);

    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.post(`https://kranti-education.onrender.com/showprofile`, { token });
                console.log("res", response);
                console.log("my calling");
                setProfile(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProfile();
    }, [token]);

    const menuItem = [
        {
            name: "Courses",
            icon: <i className="fa-solid fa-gauge" ></i>,
            href: "/dashboard/settings",
        },
        {
            name: "Module",
            icon: <i className="fa-solid fa-chart-line" ></i>,
            href: "/dashboard/settings/courses",
        },
        {
            name: "Profile",
            icon: <i className="fa-solid fa-user" ></i>,
            href: "/dashboard/settings"
        },
    ]


    return (
        // style={{ marginLeft: isOpen ? "50px" : "0px" }}
        <>
            <div className={styles.sidebar_container}>

                {/* <div className={isOpen ? styles.model_wrapper : styles.displaynone} onClick={toggle}></div> */}
                <div className={styles.sidebar}>
                    <div className='hamburger_menu' onClick={() => setIsOpen(!isOpen)}>
                        <i className="fa-solid fa-bars fa-xl" style={{ color: "#ad56b8" }}></i>
                    </div>
                    <div className={styles.top_section}>
                        <div className={isOpen ? styles.displaynone : styles.profile_image}>
                            {profile ? (
                                <Image src={profile.link} alt="user profile" width={100} height={100} />
                            ) : (
                                <Image src="/user.jpg" alt="user profile" height={100} width={100} />
                            )}
                        </div>
                        {/* <div>{profile.name}</div> */}
                        {/* <div title="sidebar" className={styles.xmark}>
                            <i className="fa-solid fa-xmark fa-xl" onClick={toggle} style={{ color: "black", cursor: "pointer", marginLeft: "90px" }}></i>
                        </div> */}
                    </div>
                    <div className={styles.link_section}>
                        {
                            menuItem.map((item, index) => (

                                <Link title={item.name} className={styles.link} href={item.href} key={index}>
                                    <div className="" >{item.icon}</div>
                                    <div className={isOpen ? styles.displaynone : styles.link_text} >{item.name}</div>
                                </Link>
                            ))  
                        }
                    </div>  

                </div>
                <main>
                    {children}
                </main>
            </div>
        </>
    );
};

export default DashboardLayout2;