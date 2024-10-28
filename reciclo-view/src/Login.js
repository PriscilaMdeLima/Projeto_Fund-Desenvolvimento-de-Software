import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Reciclo</h1>
      </div>

      <form className="login-form">
        <label htmlFor="email">E-mail</label>
        <div className="input-group">
          <span className="icon">📧</span>
          <input type="email" id="email" placeholder="e-mail" />
        </div>

        <label htmlFor="password">Senha</label>
        <div className="input-group">
          <span className="icon">🔒</span>
          <input type="password" id="password" placeholder="senha" />
        </div>

        <button type="submit" className="login-button">login</button>

        <div className="forgot-password">
          <a href="#">esqueceu a senha</a>
        </div>

        <div className="divider">
          <span>ou</span>
        </div>

        <div className="social-login">
          <button className="social-button google">G</button>
          <button className="social-button apple"></button>
        </div>

        <button className="create-account-button">crie sua conta</button>
      </form>
    </div>
  );
}

export default Login;
