// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";
import RobotsList from "./components/RobotList";
import LanguageSwitcher from "./components/LanguageSwitcher"; // Importa el selector de idioma

function App() {
  return (
    <Router>
      <div>
        {/* Muestra el selector de idioma */}
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/robots" element={<RobotsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
