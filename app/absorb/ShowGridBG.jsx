import React, { useState } from "react";
import "./ShowGridBG.css"; // Import your CSS file

const ShowGridBG = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    console.log("enter");
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    console.log("leave");
  };

  let gridClass = isHovering ? "show-grid-cell" : "grid-cell";
  const gridsNumber = Array(25).fill(null);

  return (
    <div
      className="grid-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Your grid cells */}
      {gridsNumber.map((grid) => (
        <div className={gridClass}></div>
      ))}
    </div>
  );
};

export default ShowGridBG;
