// src/components/redemption/RedemptionCard.tsx
"use client"; // Might need client interaction later (e.g., staff button)

import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import QRCode from "react-qr-code";

const RedemptionCard = () => {
  const pastryProgress = 8; // Example data
  const pastryGoal = 10;
  const coffeeStamps = 3;
  const coffeeGoal = 5;
  const progressPercentage = (pastryProgress / pastryGoal) * 100;
  const redemptionCode = "ABC-123-XYZ";

  return (
    <Card id="redemption-system" className="max-w-md mx-auto mb-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
        Redeem Your Reward
      </h2>
      <p className="text-center text-gray-600 text-sm mb-6">
        You're close to your next free item!
      </p>

      {/* Pastry Progress */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-1">
          Pastry Progress (Buy {pastryGoal} Get 1 Free)
        </p>
        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 overflow-hidden">
          {" "}
          {/* Added overflow hidden */}
          <div
            className="bg-primary-500 h-4 rounded-full text-xs font-medium text-white text-center p-0.5 leading-none"
            style={{ width: `${progressPercentage}%` }}
            aria-valuenow={pastryProgress}
            aria-valuemin={0}
            aria-valuemax={pastryGoal}
          >
            {pastryProgress}/{pastryGoal}
          </div>
        </div>
      </div>

      {/* Coffee Stamps */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">Coffee Stamps</p>
        <div className="flex space-x-1 items-center">
          {" "}
          {/* Added items-center */}
          {Array.from({ length: coffeeGoal }).map((_, index) => (
            <span
              key={`stamp-${index}`}
              className={`inline-block rounded-full h-5 w-5 ${
                index < coffeeStamps ? "bg-primary-500" : "bg-gray-300"
              }`}
              aria-label={
                index < coffeeStamps ? "Stamp collected" : "Stamp empty"
              }
            ></span>
          ))}
          <span className="text-sm text-gray-600 ml-2">
            ({coffeeStamps}/{coffeeGoal} Stamps)
          </span>
        </div>
      </div>

      {/* Redemption Code */}
      <div className="text-center mb-6">
        <p className="text-sm text-gray-700 mb-2">Your Redemption Code:</p>
        <div className="bg-gray-100 p-4 rounded inline-block">
          <div className="relative w-[150px] h-[150px] mx-auto mb-2">
            {" "}
            {/* Image container */}
            <QRCode value={redemptionCode} size={150} />
          </div>
          <p className="text-lg font-mono tracking-widest text-gray-800">
            {redemptionCode}
          </p>
        </div>
      </div>

      <Button variant="secondary" className="w-full">
        Confirm Redemption (Staff Only)
      </Button>
    </Card>
  );
};

export default RedemptionCard;
