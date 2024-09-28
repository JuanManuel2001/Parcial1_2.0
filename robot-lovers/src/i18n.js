// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Robot List Header": "Available Robots for Adoption",
      "Year of Manufacturing": "Year of Manufacturing",
      "Processing Capacity": "Processing Capacity",
      "Additional Features": "Additional Features",
      "Humor": "Humor",
      "ID": "ID",
      "Name": "Name",
      "Model": "Model",
      "Manufacturer": "Manufacturer",
      "Login": "Login",
      "Username": "Username",
      "Password": "Password",
      "Login Error": "Authentication error. Please check your credentials",
      "Cancel": "Cancel",
      "Contact": "Contact us"
    }
  },
  es: {
    translation: {
      "Robot List Header": "Robots disponibles para adopción",
      "Year of Manufacturing": "Año de Fabricación",
      "Processing Capacity": "Capacidad de Procesamiento",
      "Additional Features": "Características adicionales",
      "Humor": "Humor",
      "ID": "ID",
      "Name": "Nombre",
      "Model": "Modelo",
      "Manufacturer": "Empresa Fabricante",
      "Login": "Inicio de sesión",
      "Username": "Nombre de usuario",
      "Password": "Contraseña",
      "Login Error": "Error de autenticación. Revise sus credenciales",
      "Cancel": "Cancelar",
      "Contact": "Contáctanos"
    }
  }
};

i18n
  .use(initReactI18next) // Integración con React
  .init({
    resources,
    lng: 'es', // Idioma predeterminado
    fallbackLng: 'en', // Idioma de respaldo
    interpolation: {
      escapeValue: false, // react ya maneja la protección contra XSS
    },
  });

export default i18n;
