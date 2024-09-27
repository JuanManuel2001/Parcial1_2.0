import axios from "axios";

// Configuración de la URL base
const api = axios.create({
  baseURL: "http://localhost:3001",
});

export default api;