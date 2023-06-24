"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.post(`https://kranti-back.onrender.com/showprofile`, { token });
        console.log(response)
        setProfile(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  });

  return (
    <div>
      {profile ? (
        <div>
          <Image src={profile.link} alt="Profile Image"  width={600} height={400} />

          <h2>{profile.name}</h2>
        </div>  
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default ProfilePage;
