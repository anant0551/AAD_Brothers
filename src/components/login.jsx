import React, { useState } from "react";
import axios from "axios"; // ✅ Import Axios

const LoginForm = () => {
  const API_BASE_URL = "https://ecom-backend-w988.onrender.com"; // Your backend URL

  // ✅ State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
        email,
        password,
      });

      console.log("Login Response:", response.data);
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="z-10 bg-[url('https://i.pinimg.com/originals/6a/cd/07/6acd0780a4c693b2cf8da52b5c44b18e.gif')] bg-cover bg-center flex font-jersey justify-center items-center min-h-screen">
      <div className="z-20 rounded-lg p-8 max-w-sm w-full shadow-2xl backdrop-blur-sm border-white-950 border-2">
        <h1 className="text-center text-3xl text-black mb-6 font-bold font-gloria">Login</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black mb-2">Email</label>
            <input
              className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-black mb-2">Password</label>
            <input
              className="w-full px-3 py-2 bg-gray-600 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-blue-600 text-black py-2 rounded-md hover:bg-blue-800 shadow-2xl"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
