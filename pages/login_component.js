"use client"

import Link from "next/link";
import styles from "@/styles/login.module.css"
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
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
        console.log('Login successful:', data);
        // Handle successful login, such as storing authentication token
        router.push('/dashboard');
      } else {
        console.log('Login failed:', response.status);
        // Handle login failure, such as displaying an error message
      }
    } catch (error) {
      console.log('Error during login:', error);
      // Handle login error, such as displaying an error message
    }
  };

  return (
    <div className={styles.auth_wrapper}>
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="mb-3">
            <label>username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* 
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div> */}

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className={`${styles.forgot_password} `}>
            <Link href="/sign-up">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
