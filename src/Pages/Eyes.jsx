import React, { useState, useEffect, useRef } from "react";

const Eyes = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const eyeRefs = [useRef(null), useRef(null)];

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateEyePosition = (eyeRef) => {
    if (!eyeRef.current) return { x: 0, y: 0 };

    const eyeRect = eyeRef.current.getBoundingClientRect();
    const eyeCenter = {
      x: eyeRect.left + eyeRect.width / 2,
      y: eyeRect.top + eyeRect.height / 2,
    };
    // const deltaX = mousePosition.x - eyeCenter.x;
    // const deltaY = mousePosition.y - eyeCenter.y;
    // const angle = Math.atan2(deltaY, deltaX);
    // const radius = (eyeRect.width / 2) - 10; // Adjusted radius based on eyeball size and pupil size
    
    // const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), radius);
    // const pupilX = distance * Math.cos(angle);
    // const pupilY = distance * Math.sin(angle);
    // return { x: pupilX, y: pupilY };

    const deltaX = mousePosition.x - eyeCenter.x;
    const deltaY = mousePosition.y - eyeCenter.y;
    const angle = Math.atan2(deltaY, deltaX);
    const eyeRadius = eyeRect.width / 2;
    const pupilRadius = 10; // Half the width of the pupil
    const maxDistance = eyeRadius - pupilRadius; // Ensures the pupil stays within the eye
    const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), maxDistance);
    const pupilX = distance * Math.cos(angle);
    const pupilY = distance * Math.sin(angle);
    return { x: pupilX, y: pupilY };
  };

  return (
    <div className="flex justify-center items-center gap-8 my-24 w-full py-6 px-96">
      {eyeRefs.map((ref, index) => (
        <div
          className="w-40 h-40 rounded-full relative flex justify-center items-center shadow-2xl"
          ref={ref}
          key={index}
        >
          <div
            className="w-10 h-10 bg-blue-600 rounded-full absolute"
            style={{
              transform: `translate(${calculateEyePosition(ref).x}px, ${calculateEyePosition(ref).y}px)`,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Eyes;
