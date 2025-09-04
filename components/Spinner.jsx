import React from "react";

const Spinner = ({ size = 4, color = "white", className = "" }) => {
  return (
    <div
      className={`inline-block w-${size} h-${size} border-2 border-${color} border-t-transparent rounded-full animate-spin ${className}`}
    ></div>
  );
};

export default Spinner;
