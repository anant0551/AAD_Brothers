import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // ✅ Ensure correct import
import Navbar from "../components/Navbar"; // ✅ Ensure Navbar exists

const MainLayout = () => {
  const { _user, loading } = useAuth();

  if (loading) return <div className="flex justify-center items-center h-screen text-lg">Loading...</div>;

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
