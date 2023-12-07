import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");

    if (storedLoginStatus === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);

    localStorage.setItem("isLoggedIn", "1");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);

    localStorage.removeItem("isLoggedIn");
  };

  return (
    <div>
      {isLoggedIn ? (
        <Home onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
