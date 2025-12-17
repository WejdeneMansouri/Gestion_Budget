import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Simulation d'utilisateurs existants
  const users = [
    { username: "user1", password: "pass@123" },
    { username: "test", password: "abcd@1234" }
  ];

  const handleLogin = () => {
    setError("");

    const foundUser = users.find((u) => u.username === username);

    if (!foundUser) {
      setError("Login incorrect : ce nom d'utilisateur n'existe pas.");
      return;
    }

    if (foundUser.password !== password) {
      setError("Mot de passe incorrect.");
      return;
    }

    // ✅ Connexion réussie → redirection
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="title-section">
          <img src="/logo.png" alt="logo" className="logo-icon" />
          <h1 className="app-title">BudgetFlow</h1>
        </div>

        <p className="subtitle">Gérez vos finances en toute simplicité</p>

        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn-login" onClick={handleLogin}>
          Se connecter
        </button>

        <a href="#" className="forgot-link">Mot de passe oublié ?</a>

        <p className="register-text">
          Pas encore de compte ? <Link to="/register">S'inscrire</Link>
        </p>
      </div>
    </div>
  );
}
