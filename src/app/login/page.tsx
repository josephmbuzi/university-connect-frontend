"use client";

import { useState } from "react";
import { useMutation } from "@apollo/client";
import Image from "next/image";
import { LOGIN_MUTATION } from "../../../graphql/mutations/auth";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      const token = data?.login?.token;
      if (token) {
        localStorage.setItem("token", token);
        // You can redirect or reload here
        window.location.href = "/"; // or use router.push
      }
    },
  });

  const handleSubmit = async () => {
    try {
      await login({ variables: { email, password } });
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* ...Left Section code remains the same... */}

      {/* Right Section */}
      <div className="md:w-1/2 bg-white flex flex-col justify-center px-8 py-12 space-y-6">
        {/* Email Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && (
          <p className="text-red-500 text-sm">
            {error.message}
          </p>
        )}

        {/* Rest remains the same... */}
      </div>
    </div>
  );
}
