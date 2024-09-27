import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Versión 6 de react-router-dom

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:3001/api/login', { username, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        navigate('/robots'); // Redirige a la lista de robots
      })
      .catch(() => {
        setError('Error de autenticación. Revise sus credenciales');
      });
  };

  return (
    <div className="login-container">
      <h2>Inicio de sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de usuario</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Ingresar</button>
        <button type="button" onClick={() => navigate('/')}>Cancelar</button>
      </form>
    </div>
  );
};

export default AuthForm;
