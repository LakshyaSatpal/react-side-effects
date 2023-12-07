import React from "react";

function Home({ onLogout }) {
  return (
    <div>
      <h1>Welcome!</h1>
      <div>
        <button onClick={onLogout}>Log out</button>
      </div>
    </div>
  );
}

export default Home;
