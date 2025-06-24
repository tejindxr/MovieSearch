import { useEffect, useRef } from "react";

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = window.VANTA?.DOTS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x6dabac,
      color2: 0x256f6f,
      backgroundColor: 0x0e0e0e,
      size: 6.1,
      spacing: 34.0,
      showLines: false,
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default VantaBackground;
