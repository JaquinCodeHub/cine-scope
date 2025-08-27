"use client"
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Welcome to Cine-Scope</h1>
      <p className="mt-4 text-lg">Your one-stop solution for all movie-related information.</p>
      <button onClick={()=>{signIn("google")}} className="btn preset-filled-primary-500 m-4">
        Get Started
      </button>
    </div>
  );
}
