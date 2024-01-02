import React, { useState, useEffect } from 'react';

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const generateSnowflake = () => {
      const leftSnow = Math.floor(Math.random() * window.innerWidth);
      const topSnow = Math.floor(Math.random() * window.innerHeight);
      const widthSnow = Math.floor(Math.random() * 50);
      const timeSnow = Math.floor((Math.random() * 5) + 5);
      const blurSnow = Math.floor(Math.random() * 10);

      return {
        left: leftSnow + 'px',
        top: topSnow + 'px',
        width: widthSnow + 'px',
        height: widthSnow + 'px',
        animationDuration: timeSnow + 's',
        filter: "blur(" + blurSnow + "px)",
      };
    };

    const snowflakesArray = Array.from({ length: 50 }, (_, index) => generateSnowflake());
    setSnowflakes(snowflakesArray);
  }, []);

  return (
    <div className="snowfall-container">
      {snowflakes.map((snowflake, index) => (
        <div key={index} className="snow" style={snowflake}></div>
      ))}
    </div>
  );
};

export default Snowfall;
