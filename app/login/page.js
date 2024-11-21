"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LogoComponent from "@/components/Navbar/LogoComponent";
import axios from 'axios';

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "https://ovis-api.vercel.app/auth/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
  
      // Check the response for the token
      const token = response.headers["authorization"];
  
      if (token) {
        localStorage.setItem("token", token.replace("Bearer ", ""));
        router.push("/");  // Redirect to home page
      } else {
        throw new Error("Token not found in response.");
      }
    } catch (error) {
      setErrorMessage(error.message || "An error occurred.");
    }
  };

  return (
    <section className="login-page flex justify-center items-center min-h-[50vh] max-h-screen bg-gray-100">
       <div className="login-container bg-white p-8 shadow-lg rounded-md w-96 overflow-y-auto">
        <LogoComponent />
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {errorMessage && (
          <div className="error-message text-red-500 mb-4">{errorMessage}</div>
        )}
        <form onSubmit={handleLogin}>
          <div className="form-group mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Loginpage;
