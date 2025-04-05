"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Card } from "@/components/ui/Card";
import { PasswordField } from "@/components/shared/PasswordField";
import { Alert, AlertDescription } from "@/components/ui/Alert"; // Only need Alert and Description for errors

const SignUpForm = () => {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const validate = (): boolean => {
    const newErrors: { [key: string]: string | null } = {};
    let isValid = true;

    if (!contact) {
      // Add more robust validation (email or phone format)
      newErrors.contact = "Please enter a valid mobile number or email.";
      isValid = false;
    }
    if (!password || !/^\d{4}$/.test(password)) {
      newErrors.password = "Password must be exactly 4 digits.";
      isValid = false;
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // --- Add Sign Up Logic Here ---
      console.log("Sign up attempt:", { contact, password });
      // Simulate success -> redirect
      console.log("Sign up successful (simulation)");
      // const router = useRouter(); router.push('/login');
      // --- End Sign Up Logic ---
    }
  };

  return (
    <Card className="max-w-md mx-auto mb-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Create Your Account
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="signup-contact">Mobile Number or Email</Label>
          <Input
            type="text"
            id="signup-contact"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            aria-describedby="contact-error"
          />
          {errors.contact && (
            <p id="contact-error" className="text-red-500 text-xs mt-1">
              {errors.contact}
            </p>
          )}
        </div>

        <div className="mb-4">
          <Label htmlFor="signup-password">4-Digit Password</Label>
          <PasswordField
            id="signup-password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            maxLength={4}
            pattern="\d{4}"
            aria-describedby="password-error"
          />
          {errors.password && (
            <p id="password-error" className="text-red-500 text-xs mt-1">
              {errors.password}
            </p>
          )}
        </div>

        <div className="mb-6">
          <Label htmlFor="signup-confirm-password">
            Confirm 4-Digit Password
          </Label>
          <PasswordField
            id="signup-confirm-password"
            name="confirm_password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            maxLength={4}
            pattern="\d{4}"
            aria-describedby="confirm-password-error"
          />
          {errors.confirmPassword && (
            <p
              id="confirm-password-error"
              className="text-red-500 text-xs mt-1"
            >
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-primary-500 hover:text-primary-hover"
        >
          Log In
        </Link>
      </p>
    </Card>
  );
};

export default SignUpForm;
