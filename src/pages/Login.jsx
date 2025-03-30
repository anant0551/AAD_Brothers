import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validateForm.js";
import { login as loginUser } from "../api/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // ✅ Error state

  const handleLogin = async () => {
    setError(null); // ✅ Clear previous errors
    if (!validateEmail(email)) return setError("Invalid email format!");
    if (!validatePassword(password)) return setError("Password must be at least 8 characters with a number!");

    try {
      await loginUser({ email, password });
      alert("Login successful!");
    } catch (error) {
      setError("Login failed: " + error.message);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center">Login</h2>

      {error && <p className="text-red-500 text-center">{error}</p>} {/* ✅ Show errors if any */}

      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="w-full p-2 border border-gray-300 rounded mt-2"
      />

      <button 
        onClick={handleLogin} 
        className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
