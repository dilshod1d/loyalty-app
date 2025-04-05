import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "bg-white p-8 rounded-lg shadow-lg border border-gray-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Card };
