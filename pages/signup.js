"use client"

import React, { useState } from "react";
import styles from "@/styles/login.module.css";
import Link from "next/link";
import { Button, Input } from "@nextui-org/react";

export default function SignUp() {
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [userType, setUserType] = useState("");
  // const [secretKey, setSecretKey] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('token', token);

        console.log('Registration successful:', data);

        // Handle successful registration, such as redirecting to a login page
      } else {
        console.log('Registration failed:', response.status);
        // Handle registration failure, such as displaying an error message
      }
    } catch (error) {
      console.log('Error during registration:', error);
      // Handle registration error, such as displaying an error message
    }
  };

  return (
    <div className={styles.auth_wrapper}>
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          {/* <div>
            Register As
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            User
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
          </div>
          {userType == "Admin" ? (
            <div className="mb-3">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null} */}

          {/* <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div> */}

          {/* 
                      <div className="mb-3">
                        <label>Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div> */}
          <div className={styles.input_div}>
            <label>Username</label>
            <Input
              bordered
              name="username"
              value={username}
              type="text"
              // className="form-control"
              placeholder="Enter email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={styles.input_div}>
            <label>Password</label>
            <Input.Password
              bordered
              type="password"
              name="password"
              value={password}
              // className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <Button type="submit" color="secondary" size='sm' className={styles.button}>
              Sign Up
            </Button>
          </div>
          <p className="forgot-password text-right">
            Already registered <Link href="/login">sign in?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
