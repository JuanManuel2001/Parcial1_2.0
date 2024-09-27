import React, { useState, useEffect } from "react";
import api from "../api"; // Importamos la configuración de axios
import RobotD from "../components/RobotD.js"; // Importamos el nuevo componente


const RobotsList = () => {
  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRobot, setSelectedRobot] = useState(null); // Estado para el robot seleccionado

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        // Hacemos la petición GET al backend para obtener el listado de robots
        const response = await api.get("/robots");
        setRobots(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error al obtener los robots", err);
        setError("Error al cargar los robots. Inténtalo más tarde.");
        setLoading(false);
      }
    };

    fetchRobots();
  }, []);

  // Función para manejar la selección de un robot
  const handleRobotSelect = (robot) => {
    setSelectedRobot(robot);
  };

  if (loading) {
    return <p>Cargando robots...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="robots-container">
      <h2 className="text-center">Adopta un Robot con Robot Lovers!</h2>
      <header className="robots-header">
        <img
          src="https://img.freepik.com/vector-gratis/conjunto-lindos-robots-vintage_331172-1430.jpg?size=626&ext=jpg"
          alt="Robot Lovers Banner"
          className="robots-banner"
        />
      </header>

      <div className="robots-content">
        {/* Tabla de robots */}
        <div className="robots-table-container">
          <table className="table table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Modelo</th>
                <th>Empresa Fabricante</th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr key={robot.id} onClick={() => handleRobotSelect(robot)}>
                  <td>{robot.id}</td>
                  <td>{robot.nombre}</td>
                  <td>{robot.modelo}</td>
                  <td>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Componente de detalles del robot */}
        <div className="robot-detail-container">
          <RobotD robot={selectedRobot} />
        </div>
      </div>

      <footer className="robots-footer text-center">
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>
  );
};

export default RobotsList;
