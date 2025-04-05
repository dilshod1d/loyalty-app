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
import { PasswordField } from "@/components/shared/PasswordField";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showReminder, setShowReminder] = useState(false); // Example state

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setShowReminder(false);
    // --- Add Login Logic Here ---
    console.log("Login attempt:", { mobile, password });
    // Example: Simulate error
    if (mobile === "error") {
      setError("Invalid mobile number or password.");
    } else if (password.length !== 4 && password.length > 0) {
      setShowReminder(true);
    } else {
      // Simulate successful login -> redirect using next/navigation
      console.log("Login successful (simulation)");
      router.push("/dashboard");
    }
    // --- End Login Logic ---
  };

  return (
    <Card className="max-w-md mx-auto mb-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Member Login
      </h2>

      {error && (
        <Alert variant="destructive" className="mb-4">
          {getIcon("destructive")}
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {showReminder && (
        <Alert variant="warning" className="mb-4">
          {getIcon("warning")}
          <AlertTitle>Reminder:</AlertTitle>
          <AlertDescription>Use your 4-digit password.</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="login-mobile">Mobile Number</Label>
          <Input
            type="tel"
            id="login-mobile"
            name="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <Label htmlFor="login-password">Password</Label>
          <PasswordField
            id="login-password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            maxLength={4} // Keep max length restriction
          />
          <div className="text-right mt-1">
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-secondary-500 hover:text-secondary-hover"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Log In
        </Button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="font-medium text-primary-500 hover:text-primary-hover"
        >
          Sign Up Now
        </Link>
      </p>
    </Card>
  );
};

export default LoginForm;
