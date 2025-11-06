import React, { useRef, useEffect, useState } from "react";

interface Point {
  x: number;
  y: number;
}

interface MapDisplayProps {
  path?: Point[];
   className?: string;
}

const MapDisplay: React.FC<MapDisplayProps> = ({ path, className }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Viewport / transform state
  const [view, setView] = useState({
    scale: 1,
    offsetX: 0,
    offsetY: 0,
  });
  const [isPanning, setIsPanning] = useState(false);
  const lastPosRef = useRef({ x: 0, y: 0 });

  // Base size of the map & canvas (original shape)
  const baseWidth = 800;
  const baseHeight = 700;

  
useEffect(() => {
  const handleWindowMouseUp = () => {
    setIsPanning(false);
  };

  window.addEventListener("mouseup", handleWindowMouseUp);
  return () => {
    window.removeEventListener("mouseup", handleWindowMouseUp);
  };
}, []);
  // Draw the path on the canvas in "map coordinates"
  useEffect(() => {

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = baseWidth;
    canvas.height = baseHeight;

    ctx.clearRect(0, 0, baseWidth, baseHeight);

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

  // Clamp pan so the map always covers the viewport (no empty background)
  const clampView = (scale: number, offsetX: number, offsetY: number) => {
    const scaledWidth = baseWidth * scale;
    const scaledHeight = baseHeight * scale;
    const viewportWidth = baseWidth;
    const viewportHeight = baseHeight;

    // Horizontal clamp
    if (scaledWidth <= viewportWidth) {
      // Map is smaller or equal to viewport (with min scale=1, it's equal)
      offsetX = 0;
    } else {
      const minX = viewportWidth - scaledWidth; // far left
      const maxX = 0; // far right
      offsetX = Math.min(maxX, Math.max(minX, offsetX));
    }

    // Vertical clamp
    if (scaledHeight <= viewportHeight) {
      offsetY = 0;
    } else {
      const minY = viewportHeight - scaledHeight;
      const maxY = 0;
      offsetY = Math.min(maxY, Math.max(minY, offsetY));
    }

    return { offsetX, offsetY };
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const zoomIn = e.deltaY < 0;
    const zoomFactor = zoomIn ? 1.1 : 0.9;

    setView((prev) => {
      let newScale = prev.scale * zoomFactor;
      
      const minScale = 2;
      const maxScale = 7;
      newScale = Math.min(Math.max(newScale, minScale), maxScale);

      // Keep the point under the cursor fixed while zooming
      const worldX = (mouseX - prev.offsetX) / prev.scale;
      const worldY = (mouseY - prev.offsetY) / prev.scale;

      let offsetX = mouseX - worldX * newScale;
      let offsetY = mouseY - worldY * newScale;

      // Clamp panning so you never see outside the map
      const clamped = clampView(newScale, offsetX, offsetY);
      offsetX = clamped.offsetX;
      offsetY = clamped.offsetY;

      return { scale: newScale, offsetX, offsetY };
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
     if (e.button !== 0) return; 
     e.preventDefault();
    setIsPanning(true);
    lastPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPanning) return;
    const dx = e.clientX - lastPosRef.current.x;
    const dy = e.clientY - lastPosRef.current.y;
    lastPosRef.current = { x: e.clientX, y: e.clientY };

    setView((prev) => {
      let offsetX = prev.offsetX + dx;
      let offsetY = prev.offsetY + dy;

      const clamped = clampView(prev.scale, offsetX, offsetY);
      offsetX = clamped.offsetX;
      offsetY = clamped.offsetY;

      return { ...prev, offsetX, offsetY };
    });
  };

  const handleMouseUp = () => setIsPanning(false);
  const handleMouseLeave = () => setIsPanning(false);

  const { scale, offsetX, offsetY } = view;

  return (
    <div
      ref={containerRef}
      className={className}
    style={{
      position: "relative",
      width: "100%",
      maxWidth: `${baseWidth}px`,
      height: `${baseHeight}px`,
      overflow: "hidden",
      borderRadius: "8px",
      border: "1px solid #ccc",
      cursor: isPanning ? "grabbing" : "grab",
    }}
    onWheel={handleWheel}
    onMouseDown={handleMouseDown}   
    onMouseMove={handleMouseMove}  
    onMouseUp={handleMouseUp}     
    onMouseLeave={handleMouseLeave} 
  
    >
      {/* This inner wrapper is what we zoom & pan */}
      <div
      style={{
        width: baseWidth,
        height: baseHeight,
        position: "absolute",
        top: 0,
        left: 0,
        transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
        transformOrigin: "0 0",
      }}
       
      >
        <img
          src="/campus_map_new.jpg"
          alt="Campus Map"
          style={{
            width: "90%",
            height: "100%",
            borderRadius: "8px",
            display: "block",
            objectFit: "cover", // or "cover" if you prefer cropping instead of stretching
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
};

export default MapDisplay;
