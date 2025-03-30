import  useAuth  from "../contexts/AuthContext.jsx";

const Profile = () => {
  const { user } = useAuth();

  if (!user) return <p>User not found. Please login again.</p>;

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
