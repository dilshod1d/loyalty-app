// src/components/promotions/PromotionCard.tsx
import React from "react";
import Image from "next/image"; // Use Next.js Image component
import { Button } from "@/components/ui/Button";
import { Card } from "../ui/Card"; // Use Card without padding

interface Promotion {
  id: string;
  imageUrl: string;
  title: string;
  discount: string; // Or could be structured { type: 'percentage' | 'fixed' | 'bogo', value: string }
  description: string;
  primaryActionText: string;
  secondaryActionText: string;
  // Add onClick handlers or links as needed
}

interface PromotionCardProps {
  promotion: Promotion;
}

const PromotionCard: React.FC<PromotionCardProps> = ({ promotion }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full">
      {" "}
      {/* Ensure flex col and height */}
      <div className="relative w-full h-72">
        {" "}
        {/* Container for image */}
        <Image
          src={promotion.imageUrl}
          alt={promotion.title}
          layout="fill" // Fill the container
          objectFit="cover" // Cover the area
          // Consider adding placeholder and blurDataURL for better loading
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        {" "}
        {/* Content padding and flex */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">
            {promotion.title}
          </h3>
          <span className="bg-accent-500 text-gray-800 text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
            {promotion.discount}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {" "}
          {/* flex-grow for description */}
          {promotion.description}
        </p>
        <div className="mt-auto flex space-x-2">
          {" "}
          {/* Push buttons to bottom */}
          <Button size="sm" className="flex-1">
            {promotion.primaryActionText}
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            {promotion.secondaryActionText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;

//----------------------------------------------------

//----------------------------------------------------

//----------------------------------------------------

//----------------------------------------------------
// src/app/page.tsx (Example: Redirect to login or show dashboard)
