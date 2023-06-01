"use client"

import { useEffect } from 'react';
import { useRouter as useRouterClient } from 'next/router';

export function useAuth() {
  const router = useRouter();
  try {
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        // Redirect to login page if token is not found
        router.push('/login_component');
      }
    }, []);

  } catch (error) {
    router.push('/login_component');
  }
}

// Conditionally import useRouter based on the environment
const useRouter = typeof window !== 'undefined' ? useRouterClient : () => null;

export { useRouter };