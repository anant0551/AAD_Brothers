import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // ✅ Save user in local storage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // ✅ Clear local storage on logout
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children} {/* ✅ Fixed: Ensure children are rendered */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
