"use client";
import Nav from "./nav/page";

export default function Home() {
  // const randomNumber = Math.random();
  // console.log(randomNumber);
  // if (randomNumber > 0.5) {
  //   throw new Error("Something went wrong!!");
  // }
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10">
        Guitar Lessons and Services
      </h1>
      <Nav />
    </>
  );
}
