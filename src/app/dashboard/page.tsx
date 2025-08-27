"use client"

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => signIn()} className="btn preset-filled-primary-500">Sign In</button>
    </div>
  );
}

export default DashboardPage;
