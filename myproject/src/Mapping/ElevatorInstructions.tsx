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
        maxWidth: "370px",
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