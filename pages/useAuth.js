"use client"

import { useEffect } from 'react';
import { useRouter as useRouterClient } from 'next/router';

const useAuth = () => {
  const router = useRouter();
  try {
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        // Redirect to login page if token is not found
        router.push('/login');
      }
    });

  } catch (error) {
    router.push('/login');
  }
}

// Conditionally import useRouter based on the environment
const useRouter = typeof window !== 'undefined' ? useRouterClient : () => null;

export { useRouter };

export default useAuth;