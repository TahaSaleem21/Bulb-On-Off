import React, { useState } from 'react';
import './BulbToggle.css'; // For custom styling (optional)

const BulbToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div className="bulb-container">
      <div className={`bulb ${isOn ? 'on' : 'off'}`}></div>
      <button onClick={handleToggle}>
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
};

export default BulbToggle;

