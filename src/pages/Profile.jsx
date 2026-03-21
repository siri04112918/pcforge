import React from "react";

function Profile() {
  return (
    <div style={{padding:"40px"}}>

      <h2>My Profile</h2>

      <p>Name: Sai</p>
      <p>Email: sai@email.com</p>

      <h3>My Orders</h3>
      <p>No orders yet</p>

      <h3>Wishlist</h3>
      <p>No items in wishlist</p>

      <button>Logout</button>

    </div>
  );
}

export default Profile;