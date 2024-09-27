import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api"; // Importamos nuestra configuración de axios
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Realizamos la petición POST al backend para verificar las credenciales
      const response = await api.post("/login", {
        login: username,
        password: password,
      });

      if (response.status === 200) {
        navigate("/robots"); // Si las credenciales son correctas, redirigimos al listado de robots
      }
    } catch (err) {
      // Si el servidor devuelve un error (401), mostramos el mensaje de error
      if (err.response.status === 401) {
        setError(true);
      } else {
        console.error("Error al conectar con el backend", err);
      }
    }
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <img
          src="https://img.freepik.com/vector-gratis/conjunto-lindos-robots-vintage_331172-1430.jpg?size=626&ext=jpg "
          alt="Robot Lovers Banner"
          className="login-banner"
        />
      </header>

      <div className="login-form-container">
        <h2 className="text-center">Inicio de sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <p className="text-danger">
              Credenciales incorrectas. Por favor, intente de nuevo.
            </p>
          )}
          <div className="button-group">
            <button type="submit" className="btn btn-primary">
              Ingresar
            </button>
            <button type="button" className="btn btn-danger ms-2">
              Cancelar
            </button>
          </div>
        </form>

        <footer className="login-footer text-center mt-4">
          <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;