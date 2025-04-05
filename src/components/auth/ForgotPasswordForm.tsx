"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Card } from "@/components/ui/Card";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  getIcon,
} from "@/components/ui/Alert";

const ForgotPasswordForm = () => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    // Basic validation (improve as needed)
    if (!mobile || !/^[0-9]{10,15}$/.test(mobile)) {
      setError("Please enter a valid mobile number.");
      return;
    }

    // --- Add Forgot Password Logic Here (API call) ---
    console.log("Forgot password request for:", mobile);
    // Simulate API call success
    setSuccessMessage(
      "A reset token has been simulated as sent to your mobile number."
    );
    // Hide form or clear input after success?
    // setMobile('');
    // --- End Forgot Password Logic ---
  };

  return (
    <Card className="max-w-md mx-auto mb-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Forgot Password
      </h2>
      <p className="text-center text-gray-600 text-sm mb-4">
        Enter your mobile number to receive a reset code.
      </p>

      {successMessage && (
        <Alert variant="success" className="mb-4">
          {getIcon("success")}
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>{successMessage}</AlertDescription>
        </Alert>
      )}
      {error && (
        <Alert variant="destructive" className="mb-4">
          {getIcon("destructive")}
          {/* No title needed based on original HTML error format */}
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {!successMessage && ( // Hide form on success
        <form onSubmit={handleSubmit} id="forgot-password-form">
          <div className="mb-6">
            <Label htmlFor="forgot-mobile">Mobile Number</Label>
            <Input
              type="tel"
              id="forgot-mobile"
              name="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              pattern="[0-9]{10,15}" // HTML5 validation pattern
              placeholder="e.g., 998901234567"
              className="focus-visible:ring-secondary focus-visible:border-transparent" // Orange focus
              aria-describedby="forgot-mobile-error"
            />
            {error && (
              <p
                id="forgot-mobile-error"
                className="text-red-500 text-xs mt-1 hidden"
              >
                {error}
              </p>
            )}{" "}
            {/* Keep hidden class or use state */}
          </div>

          <Button type="submit" variant="secondary" className="w-full">
            Send Reset Code
          </Button>
        </form>
      )}

      <p className="text-center text-sm text-gray-600 mt-4">
        Remembered your password?{" "}
        <Link
          href="/login"
          className="font-medium text-secondary-500 hover:text-secondary-hover"
        >
          Log In
        </Link>
      </p>
    </Card>
  );
};

export default ForgotPasswordForm;
