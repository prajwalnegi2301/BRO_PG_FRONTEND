import React, { useState, useEffect } from 'react';

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.pageX, y: e.pageY });
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  const cursorStyle = {
    position: 'absolute',
    left: mousePosition.x,
    top: mousePosition.y,
    width: '10px',
    height: '10px',
    // backgroundColor: '#00FFCC',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999
  };

  const blurStyle = {
    position: 'absolute',
    left: `${mousePosition.x + 250}px`,
    top: `${mousePosition.y - 250}px`,
    width: '150px',
    height: '150px',
    backgroundColor: '#00FFCC',

    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    filter: 'blur(50px)', // Adding blur effect
    zIndex: 999,
  };
  

  return (
    <div>
      <div style={blurStyle}></div>
      <div style={cursorStyle}></div>
    </div>
  );
};

export default MouseTracker;
