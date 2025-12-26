import React, { useState } from "react";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fonction de validation du mot de passe
  const validatePassword = (pwd) => {
    const minLength = pwd.length >= 8;
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);

    return minLength && hasSpecial;
  };

  // Simulation: emails déjà existants (en vrai, le backend va vérifier)
  const existingEmails = ["test@mail.com", "admin@gmail.com"];

  const handleRegister = async () => {
  setError("");
  setSuccess("");

  // Vérification mot de passe
  if (!validatePassword(password)) {
    setError(
      "Le mot de passe doit contenir au moins 8 caractères et un caractère spécial."
    );
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message || "Erreur lors de l'inscription.");
    } else {
      setSuccess("Compte créé avec succès !");
      // Optional: reset form
      setUsername("");
      setEmail("");
      setPassword("");
    }
  } catch (err) {
    setError("Erreur serveur, réessayez plus tard.");
  }
};


  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Créer un compte</h1>
        <p className="register-subtitle">Rejoignez BudgetFlow en quelques secondes</p>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <div className="form-group">
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            placeholder="Votre nom"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <button className="btn-register" onClick={handleRegister}>
          S'inscrire
        </button>

        <p className="login-text">
          Déjà un compte ? <a href="/">Se connecter</a>
        </p>
      </div>
    </div>
  );
}
