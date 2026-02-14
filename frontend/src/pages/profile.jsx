import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";
import { signOut } from "firebase/auth";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = auth.currentUser;
    setUser(currentUser);
    setLoading(false);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Logout error:", error);
      alert("Error logging out");
    }
  };

  if (loading) {
    return <h2>Loading profile...</h2>;
  }

  if (!user) {
    return <h2>No user found</h2>;
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h2 className="profile-title">My Profile</h2>

        <div className="profile-info">
          <div className="profile-row">
            <span>Email</span>
            <span>{user.email}</span>
          </div>

          <div className="profile-row">
            <span>User ID</span>
            <span>{user.uid}</span>
          </div>

          <div className="profile-row">
            <span>Account Created</span>
            <span>
              {new Date(user.metadata.creationTime).toLocaleString()}
            </span>
          </div>

          <div className="profile-row">
            <span>Last Login</span>
            <span>
              {new Date(user.metadata.lastSignInTime).toLocaleString()}
            </span>
          </div>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
