"use client"; // Needs state and interaction

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Simulate showing the banner after a delay (replace with real logic)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      id="notification-banner"
      className={cn(
        "fixed top-0 left-0 right-0 p-3 bg-accent-900 text-center text-sm text-accent-text font-medium shadow-md z-50"
      )}
    >
      <span>
        📢 Your Summer Special Coffee offer expires in 3 days!{" "}
        <Link
          href="/promotions#summer-special"
          className="font-bold underline hover:text-gray-600"
        >
          Redeem Now
        </Link>
      </span>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-lg font-semibold text-accent-text hover:text-gray-600"
        aria-label="Dismiss notification"
      >
        &times;
      </button>
    </div>
  );
};

export default NotificationBanner;
