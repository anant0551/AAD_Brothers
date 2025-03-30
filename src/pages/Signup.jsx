import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validateForm.js";
import { signup as registerUser } from "../api/auth"; // Ensure correct import

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // ✅ Add error state

  const handleSignup = async () => {
    setError(""); // ✅ Reset error before validation
    if (!validateEmail(email)) {
      setError("Invalid email format!");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters and contain at least one number!");
      return;
    }

    try {
      await registerUser({ email, password });
      alert("Signup successful! Please login.");
    } catch (err) {
      setError("Signup failed: " + err.message); // ✅ Display error properly
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">Signup</h2>

      {error && <p className="text-red-500">{error}</p>} {/* ✅ Show error message */}

      <input 
        type="email" 
        placeholder="Email" 
        className="w-full p-2 border rounded mb-2"
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="w-full p-2 border rounded mb-2"
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button 
        onClick={handleSignup} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Signup
      </button>
    </div>
  );
};

export default Signup;
