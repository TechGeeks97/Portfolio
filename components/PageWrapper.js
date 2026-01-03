"use client";
import React, { useState, useEffect } from "react";

export default function PageWrapper({ children }) {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    // Update height dynamically to match visible viewport
    const updateHeight = () => {
      setHeight(`${window.innerHeight}px`);
    };

    updateHeight(); // initial
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      style={{ minHeight: height }}
      className="flex flex-col overflow-y-auto pb-[env(safe-area-inset-bottom)]"
    >
      {children}
    </div>
  );
}
