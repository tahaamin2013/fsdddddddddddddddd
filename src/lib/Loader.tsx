"use client";

import React, { useState, useEffect } from "react";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading with setTimeout
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        // Render children when loading is complete
        <>{children}</>
      )}
    </div>
  );
}
