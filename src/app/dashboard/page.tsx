// src/app/dashboard/page.tsx (Example page using the components)
import PromotionsGrid from "@/components/promotions/PromotionsGrid";
import RedemptionCard from "@/components/promotions/RedemptionCard";
import React from "react";

const DashboardPage = () => {
  return (
    <div>
      {/* Maybe add a welcome message here */}
      <PromotionsGrid />
      {/* Render Redemption card only if user has rewards? */}
      <RedemptionCard />
      {/* Add other dashboard elements */}
    </div>
  );
};

export default DashboardPage;
