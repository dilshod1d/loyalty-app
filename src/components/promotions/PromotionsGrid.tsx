// src/components/promotions/PromotionsGrid.tsx
import React from "react";
import PromotionCard from "./PromotionCard";

// Define Promotion type (can be moved to a types file)
interface Promotion {
  id: string;
  imageUrl: string;
  title: string;
  discount: string;
  description: string;
  primaryActionText: string;
  secondaryActionText: string;
}

// Sample Data (replace with actual data fetching)
const samplePromotions: Promotion[] = [
  {
    id: "promo1",
    imageUrl: "/coffee.png",
    title: "Summer Special Coffee",
    discount: "15% OFF",
    description:
      "Get a refreshing iced coffee at a special discount this summer. Limited time offer!",
    primaryActionText: "Buy Now",
    secondaryActionText: "View More",
  },
  {
    id: "promo2",
    imageUrl: "/pastry.png",
    title: "Loyalty Pastry Deal",
    discount: "Buy 5 Get 1 FREE",
    description:
      "Purchase any 5 pastries and get the 6th one absolutely free. Track your progress!",
    primaryActionText: "Add to Card",
    secondaryActionText: "View More",
  },
  {
    id: "promo3",
    imageUrl: "/brunch.jpg",
    title: "Weekend Brunch Offer",
    discount: "Special Set $10",
    description:
      "Enjoy our exclusive weekend brunch set menu. Available Saturdays & Sundays only.",
    primaryActionText: "Book Table",
    secondaryActionText: "View Menu",
  },
];

const PromotionsGrid = () => {
  // In a real app, fetch promotions: const { data: promotions, isLoading, error } = useFetchPromotions();
  const promotions = samplePromotions;

  return (
    <section id="promotions-dashboard" className="mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
        Current Promotions
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.map((promo) => (
          <PromotionCard key={promo.id} promotion={promo} />
        ))}
      </div>
    </section>
  );
};

export default PromotionsGrid;
