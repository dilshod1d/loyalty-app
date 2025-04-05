import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import React from "react";

const ForgotPasswordPage = () => {
  return (
    <section
      id="forgot-password"
      className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mb-12 border border-gray-200"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Forgot Password
      </h2>
      <p className="text-center text-gray-600 text-sm mb-4">
        Enter your mobile number to receive a reset code.
      </p>

      <div
        id="forgot-success-message"
        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 hidden"
        role="alert"
      >
        <strong className="font-bold">Success!</strong>
        <span className="block sm:inline">
          A reset token has been simulated as sent to your mobile number.
        </span>
      </div>

      <form action="#" method="POST" id="forgot-password-form">
        <div className="mb-6">
          <label
            htmlFor="forgot-mobile"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mobile Number
          </label>
          <input
            type="tel"
            id="forgot-mobile"
            name="mobile"
            required
            pattern="[0-9]{10,15}"
            placeholder="e.g., 998901234567"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:border-[#ff7930] focus:ring-1 focus:ring-[#ff7930]"
          />
          <p className="text-red-500 text-xs mt-1 hidden">
            Please enter a valid mobile number.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-[#ff7930] text-white py-2 px-4 rounded-md font-semibold shadow-md hover:bg-[#e66a2b] transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff7930]"
        >
          Send Reset Code
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
        Remembered your password?
        <a
          href="#login"
          className="font-medium text-[#ff7930] hover:text-[#e66a2b]"
        >
          Log In
        </a>
      </p>
    </section>
  );
};

export default ForgotPasswordPage;
