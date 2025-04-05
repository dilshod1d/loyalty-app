// src/components/layout/Footer.tsx
import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 mt-12 py-6 text-center text-sm text-gray-600">
      <div className="container mx-auto">
        &copy; {currentYear} LoyaltyApp. All rights reserved. |{" "}
        <Link href="/privacy" className="text-primary-500 hover:underline">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="/terms" className="text-primary-500 hover:underline">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
