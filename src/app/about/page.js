"use client";
import React, { useState } from "react";

const About = () => {
  const [fruits, setFruits] = useState(["apple", "mango"]);
  const callFunction = () => {
    setFruits(null);
  };
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10">About Us</h1>
      <p className="text-center mt-4 text-gray-600">
        This is the about page of our Next.js application.
      </p>

      <center>
        <button onClick={callFunction}>click me</button>
      </center>
      {fruits.map((fruit) => {
        return <p key={fruit}>{fruit}</p>;
      })}
    </>
  );
};

export default About;
