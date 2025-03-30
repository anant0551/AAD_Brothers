// import { useState, useEffect } from "react";
// import { AuthContext } from "./AuthContext.jsx"; // ✅ Import from separate file

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setUser(null); // Simulate fetching user data
//       setLoading(false);
//     }, 1000);
//   }, []);

//   const login = (userData) => setUser(userData);
//   const logout = () => setUser(null);

//   return (
//     <AuthContext.Provider value={{ user, loading, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
