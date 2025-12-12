import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Simulation d'utilisateurs existants
  const users = [
    { username: "user1", password: "pass@123" },
    { username: "test", password: "abcd@1234" }
  ];

  const handleLogin = () => {
    setError("");

    // Vérifier si le compte existe
    const foundUser = users.find((u) => u.username === username);

    if (!foundUser) {
      setError("Login incorrect : ce nom d'utilisateur n'existe pas.");
      return;
    }

    // Vérifier le mot de passe
    if (foundUser.password !== password) {
      setError("Mot de passe incorrect.");
      return;
    }

    // Si tout est correct
    alert("Connexion réussie !");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="title-section">
          <img src="/logo.png" alt="logo" className="logo-icon" />
          <h1 className="app-title">BudgetFlow</h1>
        </div>

        <p className="subtitle">Générez vos finances en toute simplicité</p>

        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            placeholder="Mot de passe"
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
