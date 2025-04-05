// src/components/auth/ResetPasswordForm.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Card } from "@/components/ui/Card";
import { PasswordField } from "@/components/shared/PasswordField";
import { Alert, AlertDescription } from "@/components/ui/Alert";
import { Check } from "lucide-react";

const ResetPasswordForm = () => {
  const [mobile, setMobile] = useState("");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
  const [isResetSuccess, setIsResetSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: { [key: string]: string | null } = {};
    let isValid = true;

    if (!mobile) {
      // Add phone format validation
      newErrors.mobile = "Mobile number is required."; // Example error
      isValid = false;
    }
    if (!token) {
      newErrors.token = "Reset token is required.";
      isValid = false;
    }
    if (!newPassword || !/^\d{4}$/.test(newPassword)) {
      newErrors.newPassword = "New password must be exactly 4 digits.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // --- Add Reset Password Logic Here (API call) ---
      console.log("Reset password attempt:", { mobile, token, newPassword });
      // Simulate API call success or failure
      if (token === "invalid") {
        setErrors({ token: "Invalid or expired token." });
      } else {
        console.log("Password reset successful (simulation)");
        setIsResetSuccess(true); // Show success state
      }
      // --- End Reset Password Logic ---
    }
  };

  if (isResetSuccess) {
    return (
      <Card className="max-w-md mx-auto mb-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-50 mb-4">
          <Check className="w-10 h-10 text-white" /> {/* Using Check icon */}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Password Reset Successful!
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          You can now log in with your new password.
        </p>
        <Button asChild>
          <Link href="/login">Go to Login</Link>
        </Button>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto mb-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Reset Your Password
      </h2>

      <form onSubmit={handleSubmit} id="reset-password-form">
        <div className="mb-4">
          <Label htmlFor="reset-mobile">Mobile Number</Label>
          <Input
            type="tel"
            id="reset-mobile"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            aria-describedby="reset-mobile-error"
          />
          {errors.mobile && (
            <p id="reset-mobile-error" className="text-red-500 text-xs mt-1">
              {errors.mobile}
            </p>
          )}
        </div>

        <div className="mb-4">
          <Label htmlFor="reset-token">Reset Token</Label>
          <Input
            type="text"
            id="reset-token"
            name="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
            aria-describedby="reset-token-error"
          />
          {errors.token && (
            <p id="reset-token-error" className="text-red-500 text-xs mt-1">
              {errors.token}
            </p>
          )}
        </div>

        <div className="mb-6">
          <Label htmlFor="reset-new-password">New 4-Digit Password</Label>
          <PasswordField
            id="reset-new-password"
            name="new_password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            maxLength={4}
            pattern="\d{4}"
            aria-describedby="reset-new-password-error"
          />
          {errors.newPassword && (
            <p
              id="reset-new-password-error"
              className="text-red-500 text-xs mt-1"
            >
              {errors.newPassword}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Reset Password
        </Button>
      </form>
    </Card>
  );
};

export default ResetPasswordForm;

//----------------------------------------------------
// src/app/(auth)/reset-password/page.tsx
