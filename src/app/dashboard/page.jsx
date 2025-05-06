"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AppBarChart } from "@/components/AppBarChart";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="grid grid-cols-4">
      <div className="grid col-span-4">
        <AppBarChart/>
      </div>
    </div>
  );
}
