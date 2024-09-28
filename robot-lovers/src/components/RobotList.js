import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import api from "../api";
import RobotD from "../components/RobotD.js";

const RobotsList = () => {
  const { t } = useTranslation(); // Hook de traducción
  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRobot, setSelectedRobot] = useState(null);

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const response = await api.get("/robots");
        setRobots(response.data);
        setLoading(false);
      } catch (err) {
        setError(t('Login Error'));
        setLoading(false);
      }
    };

    fetchRobots();
  }, [t]);

  if (loading) {
    return <p>{t('Loading')}...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="robots-container">
      <h2 className="text-center">{t('Robot List Header')}</h2>
      <header className="robots-header">
        <img
          src="https://img.freepik.com/vector-gratis/conjunto-lindos-robots-vintage_331172-1430.jpg?size=626&ext=jpg"
          alt="Robot Lovers Banner"
          className="robots-banner"
        />
      </header>

      <div className="robots-content">
        <div className="robots-table-container">
          <table className="table table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>{t('ID')}</th>
                <th>{t('Name')}</th>
                <th>{t('Model')}</th>
                <th>{t('Manufacturer')}</th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr key={robot.id} onClick={() => setSelectedRobot(robot)}>
                  <td>{robot.id}</td>
                  <td>{robot.nombre}</td>
                  <td>{robot.modelo}</td>
                  <td>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="robot-detail-container">
          <RobotD robot={selectedRobot} />
        </div>
      </div>

      <footer className="robots-footer text-center">
        <p>{t('Contact')}: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>
  );
};

export default RobotsList;
