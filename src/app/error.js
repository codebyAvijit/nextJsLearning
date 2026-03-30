"use client";
import { useRouter } from "next/navigation";
import React, { startTransition, useEffect, useState } from "react";

const ErrorComponent = ({ error, reset }) => {
  // const randomNumber = Math.random();
  // console.log(randomNumber);
  // if (randomNumber > 0.5) {
  //   throw new Error("Something went wrong!!");
  // }
  // console.dir(error);
  // console.log(error.digest);
  // console.log(error.message);
  // const [errorOccured, setErrorOccured] = useState("");
  // useEffect(() => {
  //   setTimeout(() => {
  //     setErrorOccured("An error occurred while loading the page.");
  //   }, 2000);
  // }, []);
  const router = useRouter();
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10">Error</h1>
      <p>{error.message}</p>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
      >
        Try Again
      </button>
    </>
  );
};

export default ErrorComponent;
