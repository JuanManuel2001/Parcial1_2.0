import React from 'react';
import RobotList from './RobotList'; // Reutiliza tu lista de robots

const RobotsPage = () => {
  return (
    <div>
      <h1>Robots disponibles para adopción</h1>
      <RobotList /> {/* Reutiliza el componente de RobotList */}
    </div>
  );
};

export default RobotsPage;
