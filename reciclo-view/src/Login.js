import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    let isAuthenticated = false;

    if (email === 'user@gmail' && password === 'password') {
      isAuthenticated = true;
    }

    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      alert('Login falhou');
    }
  }

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <label>E-mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="E-mail"
        />

        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Senha"
        />

        <button type="submit" className="login-button">Entrar</button>
        <button type="button" onClick={handleSignupClick} className="signup-button">Criar conta</button>
      </form>
    </div>
  );
}

export default Login;
