import React, { useRef, useEffect, useState } from "react";
import Model from "./DamagedHelmet";
import { gsap } from "gsap";

const Scene = () => {
  const currentRotation = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const [rotationState, setRotationState] = useState([0, 0, 0]);

  const handleMouseMove = (e) => {
    targetRotation.current.y = (e.clientX - window.innerWidth / 2) / 10000;
    targetRotation.current.x = (e.clientY - window.innerHeight / 2) / 5000;

    gsap.to(currentRotation.current, {
      duration: 0.5,
      x: targetRotation.current.x,
      y: targetRotation.current.y,
      duration: 0.9,
      ease: "power2.out",
      onUpdate: () => {
        setRotationState([
          currentRotation.current.x,
          currentRotation.current.y,
          0,
        ]);
      },
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <Model rotation={rotationState} />;
};

export default Scene;
