import React, { useEffect, useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const timoutId = setTimeout(() => {
      console.log("Checking is form valid");
      setIsFormValid(email.trim().length > 5 && password.trim().length > 5);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(timoutId);
    };
  }, [email, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid) return;
    onLogin();
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
  };

  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
        required
      />
      <button type="submit" className={`${isFormValid ? "" : "disabled"}`}>
        Login
      </button>
    </form>
  );
}

export default Login;
