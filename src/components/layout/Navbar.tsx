// src/components/layout/Navbar.tsx
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-500">
          LoyaltyApp
        </Link>
        <div>
          <Link
            href="/login" // Use Next.js routing
            className="text-gray-600 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Login
          </Link>
          <Link
            href="/signup" // Use Next.js routing
            className="text-gray-600 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Sign Up
          </Link>
          {/* Add links for dashboard etc. when user is logged in */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//----------------------------------------------------
