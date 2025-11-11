// // // ElevatorInstructions.tsx
// // import React from "react";

// // interface ElevatorInstructionsProps {
// //   fromEntrance: string | null;
// //   toEntrance: string | null;
// // }

// // export default function ElevatorInstructions({
// //   fromEntrance,
// //   toEntrance,
// // }: ElevatorInstructionsProps) {
// //   if (!fromEntrance || !toEntrance)
// //     return (
// //       <div className="alert alert-secondary mt-3">
// //         Select both entrances to view elevator and floor instructions.
// //       </div>
// //     );

// //   const parseEntrance = (id: string) => {
// //     // Example: ENG_2_W → { building: ENG, floor: 2, side: W }
// //     const match = id.match(/^([A-Z]+)_([0-9])_([A-Z])$/);
// //     if (!match) return { building: id, floor: null, side: null };
// //     const [, building, floor, side] = match;
// //     return { building, floor: parseInt(floor), side };
// //   };

// //   const from = parseEntrance(fromEntrance);
// //   const to = parseEntrance(toEntrance);

// //   const instructions: string[] = [];

// //   // CASE 1: Same building
// //   if (from.building === to.building) {
// //     const diff = (to.floor ?? 0) - (from.floor ?? 0);
// //     if (diff === 0) {
// //       instructions.push(
// //         `Both entrances are on floor ${from.floor}. Proceed directly across the same level.`
// //       );
// //     } else if (diff > 0) {
// //       instructions.push(
// //         `Start on floor ${from.floor}, take the elevator up ${diff} floor${
// //           diff > 1 ? "s" : ""
// //         } to floor ${to.floor}.`
// //       );
// //     } else if (diff < 0) {
// //       instructions.push(
// //         `Start on floor ${from.floor}, take the elevator down ${Math.abs(
// //           diff
// //         )} floor${Math.abs(diff) > 1 ? "s" : ""} to floor ${to.floor}.`
// //       );
// //     }
// //     instructions.push(
// //       `Once on floor ${to.floor}, exit toward the ${to.side} side entrance (${toEntrance}).`
// //     );
// //   }

// //   // CASE 2: Different buildings
// //   else {
// //     // Handle possible elevation or multi-floor differences
// //     const floorChange =
// //       (to.floor ?? 0) - (from.floor ?? 0);

// //     instructions.push(
// //       `Begin at the ${from.side} entrance of ${from.building} (floor ${from.floor}).`
// //     );

// //     if (floorChange > 0)
// //       instructions.push(
// //         `Take the elevator up ${floorChange} floor${
// //           floorChange > 1 ? "s" : ""
// //         } before proceeding to ${to.building}.`
// //       );
// //     else if (floorChange < 0)
// //       instructions.push(
// //         `Take the elevator down ${Math.abs(floorChange)} floor${
// //           Math.abs(floorChange) > 1 ? "s" : ""
// //         } before proceeding to ${to.building}.`
// //       );

// //     // If segment ID between them is 1000s, note that it’s an interior connector
// //     if (
// //       fromEntrance.includes("1000") ||
// //       toEntrance.includes("1000")
// //     )
// //       instructions.push(
// //         `This route includes an internal connection between entrances—use the indoor hallway or accessible ramp.`
// //       );

// //     instructions.push(
// //       `Continue to the ${to.side} entrance of ${to.building} (floor ${to.floor}).`
// //     );
// //   }

// //   return (
// //     <div className="mt-3">
// //       <h5>Elevator & Floor Navigation Instructions</h5>
// //       <ul className="list-group list-group-flush">
// //         {instructions.map((step, idx) => (
// //           <li key={idx} className="list-group-item">
// //             {step}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// import React from "react";

// interface ElevatorInstructionsProps {
//   fromEntrance: string | null;
//   toEntrance: string | null;
//   routeSegments: any[];
// }

// const ElevatorInstructions: React.FC<ElevatorInstructionsProps> = ({
//   fromEntrance,
//   toEntrance,
//   routeSegments,
// }) => {
//   if (!fromEntrance || !toEntrance) return null;
//   if (routeSegments.length === 0) return null;

//   // Extract floor info from entrance names (e.g., ENG_2_W → floor = 2)
//   const extractFloor = (id: string): number | null => {
//     const match = id.match(/_(\d+)_/);
//     return match ? parseInt(match[1]) : null;
//   };

//   const fromFloor = extractFloor(fromEntrance);
//   const toFloor = extractFloor(toEntrance);

//   let instruction = "";

//   if (fromFloor !== null && toFloor !== null) {
//     if (fromFloor < toFloor)
//       instruction = `Take the elevator up from floor ${fromFloor} to floor ${toFloor}.`;
//     else if (fromFloor > toFloor)
//       instruction = `Take the elevator down from floor ${fromFloor} to floor ${toFloor}.`;
//     else
//       instruction = `You are already on floor ${fromFloor}. Continue through the route to reach your destination.`;
//   } else {
//     instruction = `Proceed through the route to your destination entrance.`;
//   }

//   // Handle multi-entrance suggestions
//   const getEntranceDirection = (entrance: string) => {
//     const dir = entrance.split("_").pop();
//     switch (dir) {
//       case "N":
//         return "north entrance";
//       case "S":
//         return "south entrance";
//       case "E":
//         return "east entrance";
//       case "W":
//         return "west entrance";
//       case "C":
//         return "central entrance";
//       default:
//         return "main entrance";
//     }
//   };

//   const entranceGuide = `Start at the ${getEntranceDirection(fromEntrance)} of your building and proceed to the ${getEntranceDirection(toEntrance)}.`;

//   return (
//     <div
//       style={{
//         marginTop: "1rem",
//         padding: "1rem",
//         backgroundColor: "#f8f9fa",
//         border: "1px solid #dee2e6",
//         borderRadius: "8px",
//         fontSize: "0.95rem",
//         boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//       }}
//     >
//       <h6 style={{ marginBottom: "0.5rem", color: "#0d6efd" }}>
//         Accessibility Guide
//       </h6>
//       <p style={{ marginBottom: "0.25rem" }}>{entranceGuide}</p>
//       <p>{instruction}</p>
//     </div>
//   );
// };

// export default ElevatorInstructions;


// ElevatorInstructions.tsx
// import React from "react";
// import type { SegmentFeature } from "./Segments";

// interface ElevatorInstructionsProps {
//   fromEntrance: string | null;
//   toEntrance: string | null;
//   routeSegments: SegmentFeature[];
// }

// const ElevatorInstructions: React.FC<ElevatorInstructionsProps> = ({
//   fromEntrance,
//   toEntrance,
//   routeSegments,
// }) => {
//   if (!fromEntrance || !toEntrance || routeSegments.length === 0) return null;

//   return (
//     <div
//       style={{
//         marginTop: "0.5rem",
//         padding: "0.5rem",
//         border: "1px solid #ccc",
//         borderRadius: "4px",
//         backgroundColor: "white",
//         maxWidth: "300px",
//       }}
//     >
//       <h6>Entrance Guidance</h6>
//       {routeSegments.map((segment) => {
//         // Extract floor numbers from IDs (assumes format ENG_2_W)
//         const fromFloorMatch = fromEntrance.match(/_(\d+)_/);
//         const toFloorMatch = toEntrance.match(/_(\d+)_/);
//         const fromFloor = fromFloorMatch ? parseInt(fromFloorMatch[1]) : null;
//         const toFloor = toFloorMatch ? parseInt(toFloorMatch[1]) : null;

//         let instruction = "Proceed through the segment.";
//         if (fromFloor !== null && toFloor !== null) {
//           if (fromFloor > toFloor) instruction = "Take the Elevator down.";
//           else if (fromFloor < toFloor) instruction = "Take the Elevator up.";
//           else instruction = "Move between doors on the same floor.";
//         }

//         // Special case for segment IDs in the 1000s
//         if (parseInt(segment.properties.id.replace(/\D/g, "")) >= 1000) {
//           instruction = "This segment is between doors; follow the path.";
//         }

//         return (
//           <div key={segment.properties.id} style={{ marginBottom: "0.25rem" }}>
//             <strong>{segment.properties.id}:</strong> {instruction}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ElevatorInstructions;

import React from "react";

export interface RouteLeg {
  segment: string; // e.g. "S1017"
  from: string;    // e.g. "CHM_2_N"
  to: string;      // e.g. "CHM_0_N"
  cost: {
    low: number;
    high: number;
  };
}

interface ElevatorInstructionsProps {
  legs: RouteLeg[];
}

const ElevatorInstructions: React.FC<ElevatorInstructionsProps> = ({ legs }) => {
  if (!legs || legs.length === 0) return null;

  const elevatorLegs = legs.filter((leg) => {
    const numericPart = parseInt(leg.segment.replace(/\D/g, ""), 10);
    return !isNaN(numericPart) && numericPart >= 1000;
  });

  if (elevatorLegs.length === 0) return null;

  const parseFloor = (id: string): number | null => {
    const match = id.match(/_(\d+)_/);
    return match ? parseInt(match[1], 10) : null;
  };

  const getBuildingCode = (id: string): string => {
    return id.split("_")[0] || "";
  };

  return (
    <div
      style={{
        marginTop: "0.5rem",
        padding: "0.5rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "white",
        maxWidth: "320px",
      }}
    >
      <h6>Elevator Instructions</h6>
      {elevatorLegs.map((leg) => {
        const fromFloor = parseFloor(leg.from);
        const toFloor = parseFloor(leg.to);
        const building = getBuildingCode(leg.from);

        let text = "Use the elevator between floors.";

        if (fromFloor !== null && toFloor !== null) {
          if (fromFloor < toFloor) {
            text = `Take the elevator up from floor ${fromFloor} to ${toFloor} in ${building}.`;
          } else if (fromFloor > toFloor) {
            text = `Take the elevator down from floor ${fromFloor} to ${toFloor} in ${building}.`;
          } else if (fromFloor == toFloor){
            text = `Use this door to enter the building to reach your destination.`;
          }
        }

        return (
          <div key={leg.segment} style={{ marginBottom: "0.25rem" }}>
            {text}
          </div>
        );
      })}
    </div>
  );
};

export default ElevatorInstructions;

