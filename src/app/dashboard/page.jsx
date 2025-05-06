'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AppBarChart } from '@/components/AppBarChart';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');

    // ถ้าไม่มี token → redirect ไป login
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
            <CardDescription>Visitors for the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">$450,000</div>
          </CardContent>
        </Card>
      </div>
      <div className="">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
            <CardDescription>Visitors for the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">$450,000</div>
          </CardContent>
        </Card>
      </div>
      <div className="">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
            <CardDescription>Visitors for the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">$450,000</div>
          </CardContent>
        </Card>
      </div>
      <div className="">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
            <CardDescription>Visitors for the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">$450,000</div>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-4">
        <AppBarChart />
      </div>
    </div>
  );
}
