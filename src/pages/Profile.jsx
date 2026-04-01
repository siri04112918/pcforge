import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("userLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    navigate("/");
  };

  return (
    <div className="profile-page">
      <div className="profile-card">

        <h2>My Account</h2>

        {!isLoggedIn ? (
          <>
            <p>You are not logged in</p>

            <button onClick={() => navigate("/login")}>
              Login
            </button>
          </>
        ) : (
          <>
            <p>Welcome back </p>

            <div className="profile-actions">
              <button onClick={() => navigate("/orders")}>
                My Orders
              </button>

              <button onClick={() => navigate("/wishlist")}>
                Wishlist
              </button>

              <button onClick={handleLogout}>
                Logout
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Profile;