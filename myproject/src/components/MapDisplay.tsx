import React, { useRef, useEffect } from "react";

interface Point {
  x: number;
  y: number;
}

interface MapDisplayProps {
  path?: Point[];
}

const MapDisplay: React.FC<MapDisplayProps> = ({ path }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = 800;
    const height = 600;
    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height);

    if (path && path.length > 0) {
      ctx.beginPath();
      ctx.moveTo(path[0].x, path[0].y);
      path.forEach((p) => ctx.lineTo(p.x, p.y));
      ctx.strokeStyle = "blue";
      ctx.lineWidth = 4;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.stroke();
    }
  }, [path]);

  return (
    <div
      style={{
        position: "relative",
        width: "800px",
        height: "600px",
      }}
    >
      <img
        src="/2024-ACCESSIBLE-ROUTES-MAP-2.jpg"
        alt="Campus Map"
        style={{
          width: "75%",
          height: "750px",
          borderRadius: "8px",
          // ✅ Removed border and shadow
          display: "block",
          objectFit: "contain",
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default MapDisplay;