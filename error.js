"use client";

import React, { useEffect, useState } from "react";

const ErrorComponent = () => {
  const [error, setError] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setError("An error occurred while loading the page.");
    }, 2000);
  }, []);
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10">Error</h1>
      <p className="text-center mt-4 text-gray-600">{error}</p>
    </>
  );
};

export default ErrorComponent;
