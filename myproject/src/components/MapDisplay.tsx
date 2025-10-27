// import React, { useState } from 'react';

// const PdfUploader: React.FC = () => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       setSelectedFile(event.target.files[0]);
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept=".pdf" onChange={handleFileChange} />
//       {selectedFile && <p>Selected file: {selectedFile.name}</p>}
//       {/* Add a button here to trigger the upload to a server if needed */}
//     </div>
//   );
// };

// export default PdfUploader;

// import React from "react";

// export default function MapDisplay() {
//   return (
//     <div className="d-flex flex-column align-items-center justify-content-center">
//       <h4 className="mb-3">Campus Map</h4>
//       <img
//         src="/2024-ACCESSIBLE-ROUTES-MAP-2.jpg"
//         alt="Campus Map"
//         style={{
//           width: "85%",
//           height: "auto",
//           border: "1px solid #ccc",
//           borderRadius: "8px",
//           boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//         }}
//       />
//     </div>
//   );
// }

// import React, { useRef, useEffect } from "react";

// interface Point {
//   x: number;
//   y: number;
// }

// interface MapDisplayProps {
//   path?: Point[];
// }

// const MapDisplay: React.FC<MapDisplayProps> = ({ path }) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const width = 800;
//     const height = 600;
//     canvas.width = width;
//     canvas.height = height;

//     ctx.clearRect(0, 0, width, height);

//     if (path && path.length > 0) {
//       ctx.beginPath();
//       ctx.moveTo(path[0].x, path[0].y);
//       path.forEach((p) => ctx.lineTo(p.x, p.y));
//       ctx.strokeStyle = "blue";
//       ctx.lineWidth = 4;
//       ctx.lineJoin = "round";
//       ctx.lineCap = "round";
//       ctx.stroke();
//     }
//   }, [path]);

//   return (
//     <div style={{ position: "relative", width: "800px", height: "600px" }}>
//       <img
//         src="/2024-ACCESSIBLE-ROUTES-MAP-2.jpg"
//         alt="Campus Map"
//         style={{ width: "75%", height: "750px", borderRadius: "8px", border: "1px solid #ccc" }}
//       />
//       <canvas
//         ref={canvasRef}
//         style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
//       />
//     </div>
//   );
// };

// export default MapDisplay;

// import React, { useRef, useEffect } from "react";

// interface Point {
//   x: number;
//   y: number;
// }

// interface MapDisplayProps {
//   path?: Point[];
// }

// const MapDisplay: React.FC<MapDisplayProps> = ({ path }) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;
//     canvas.width = width;
//     canvas.height = height;

//     ctx.clearRect(0, 0, width, height);

//     if (path && path.length > 0) {
//       ctx.beginPath();
//       ctx.moveTo(path[0].x, path[0].y);
//       path.forEach((p) => ctx.lineTo(p.x, p.y));
//       ctx.strokeStyle = "blue";
//       ctx.lineWidth = 4;
//       ctx.lineJoin = "round";
//       ctx.lineCap = "round";
//       ctx.stroke();
//     }
//   }, [path]);

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "85%",
//         maxWidth: "800px",
//         height: "600px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       {/* Map image */}
//       <img
//         src="/2024-ACCESSIBLE-ROUTES-MAP-2.jpg"
//         alt="Campus Map"
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "contain",
//           borderRadius: "8px",
//           border: "1px solid #ccc",
//           boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//         }}
//       />

//       {/* Canvas overlay for path */}
//       <canvas
//         ref={canvasRef}
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           pointerEvents: "none",
//         }}
//       />
//     </div>
//   );
// };

// export default MapDisplay;

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

