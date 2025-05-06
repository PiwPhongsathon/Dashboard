'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      router.push('/login');
    }
  }, []);

  return <h1>Dashboard</h1>;
}
