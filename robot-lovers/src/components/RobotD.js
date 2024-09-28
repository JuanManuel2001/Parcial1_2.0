import React from 'react';
import { useTranslation } from 'react-i18next';
import "./RobotD.css";

const RobotD = ({ robot }) => {
  const { t } = useTranslation(); // Hook de traducción

  if (!robot) {
    return <p>{t('Additional Features')}</p>;
  }

  return (
    <div className="robot-detail">
      <h2 className="robot-name">{robot.nombre}</h2>
      <img
        src={robot.imagen.replace("blob", "raw")}
        alt={robot.nombre}
        className="robot-image"
      />
      <ul className="robot-info">
        <li><strong>{t('Year of Manufacturing')}:</strong> {robot.añoFabricacion}</li>
        <li><strong>{t('Processing Capacity')}:</strong> {robot.capacidadProcesamiento}</li>
        <li><strong>{t('Humor')}:</strong> {robot.humor}</li>
      </ul>
    </div>
  );
};

export default RobotD;
