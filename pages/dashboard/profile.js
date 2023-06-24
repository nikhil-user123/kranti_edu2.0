"use client"
import Image from "next/image";
import styles from "@/styles/profile.module.css"
import { useState, useEffect } from 'react';
import axios from 'axios';
import UploadForm from "@/component/prodileUpload";

const Profile = () => {

    const [profile, setProfile] = useState(null);
    const [open, setOpen] = useState(false)
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;

    const handler = () => setOpen(true)
    const closeHandler = () => {
        setOpen(false);
        console.log("closed");
    };

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.post(`https://kranti-back.onrender.com/showprofile`, { token });
                console.log("res", response);
                console.log("my calling");
                setProfile(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProfile();
    }, [token, open]);

    return (
        <div className={styles.profile_container}>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src="/background.jpg" alt="backgroung image" height={300} width={200} />
                </div>
                <div className={styles.profile_image}>
                    {profile ? (
                        <Image src={profile.link} alt="user profile" width={100} height={100} />
                    ) : (
                        <Image src="/user.jpg" alt="user profile" height={100} width={100} />
                    )}
                    <div className={styles.edit_button} onClick={handler}>
                        <i className="fa-solid fa-pencil" style={{ color: "#f6f5f4" }}></i>
                    </div>
                </div>
                <div className={styles.details}>
                    <div className={styles.card_content}>
                        <h3>Nikhil Prajapat</h3>
                        <p>
                            <strong>Student ID: </strong>321000001
                        </p>
                        <p><strong>Class: </strong>8th</p>
                        <p><strong>Section: </strong>A</p>
                    </div>
                    <div className={styles.general_info}>
                        <div>
                            <h3 className={styles.table_header}>General Information</h3>
                        </div>

                        <table className={styles.table}>
                            <tbody>
                                <tr>
                                    <th width="40%">Roll</th>
                                    <td width="5%">:</td>
                                    <td>125</td>
                                </tr>
                                <tr>
                                    <th width="40%">Academic Year	</th>
                                    <td width="5%">:</td>
                                    <td>2020</td>
                                </tr>
                                <tr>
                                    <th width="40%">Gender</th>
                                    <td width="5%">:</td>
                                    <td>Male</td>
                                </tr>
                                <tr>
                                    <th width="40%">Religion</th>
                                    <td width="5%">:</td>
                                    <td>Group</td>
                                </tr>
                                <tr>
                                    <th width="40%">blood</th>
                                    <td width="5%">:</td>
                                    <td>B+</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <UploadForm open={open} onClose={closeHandler} />
        </div>
    );
}

export default Profile;