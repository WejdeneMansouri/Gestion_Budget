import React from "react";
import "./register.css";

export default function Register() {
  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Créer un compte</h1>
        <p className="register-subtitle">Rejoignez BudgetFlow en quelques secondes</p>

        <div className="form-group">
          <label>Nom complet</label>
          <input type="text" placeholder="Votre nom" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="example@mail.com" />
        </div>

        <div className="form-group">
          <label>Nom d'utilisateur</label>
          <input type="text" placeholder="Nom d'utilisateur" />
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input type="password" placeholder="Mot de passe" />
        </div>

        <button className="btn-register">S'inscrire</button>

        <p className="login-text">
          Déjà un compte ? <a href="#">Se connecter</a>
        </p>
      </div>
    </div>
  );
}