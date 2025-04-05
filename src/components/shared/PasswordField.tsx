// src/components/shared/PasswordField.tsx
"use client"; // Needs state for visibility toggle

import React, { useState } from "react";
import { Input, InputProps } from "@/components/ui/Input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

interface PasswordFieldProps extends InputProps {
  // No extra props needed for now, inherits from InputProps
}

const PasswordField = React.forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleVisibility = () => setShowPassword(!showPassword);

    return (
      <div className="relative password-input-container">
        {" "}
        {/* Use class for positioning */}
        <Input
          type={showPassword ? "text" : "password"}
          className={cn("pr-10", className)} // Add padding for the icon
          ref={ref}
          {...props}
        />
        <Button
          type="button" // Prevent form submission
          variant="ghost"
          size="icon"
          className="absolute top-1/2 right-1 transform -translate-y-1/2 h-7 w-7 text-gray-400 hover:text-gray-600 hover:bg-transparent" // Adjusted positioning and styling
          onClick={toggleVisibility}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </Button>
      </div>
    );
  }
);
PasswordField.displayName = "PasswordField";

export { PasswordField };
