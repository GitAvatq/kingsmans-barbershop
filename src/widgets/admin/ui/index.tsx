"use client";
import React from "react";
import ServicesAdmin from "./servicesAdmin";
import BarbersAdmin from "./barbersAdmin";
import LatestNewsAdmin from "./latestNewAdmin";
import { useRouter } from "next/navigation";

const Admin = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white px-6 py-10 space-y-10">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 shadow-lg">
          <ServicesAdmin />
        </div>
        <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 shadow-lg">
          <BarbersAdmin />
        </div>
        <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 shadow-lg md:col-span-2">
          <LatestNewsAdmin />
        </div>
      </div>
      <button
        className="absolute top-20 right-20 text-4xl"
        onClick={() => router.push("/")}
      >
        x
      </button>
    </div>
  );
};

export default Admin;
