"use client";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <div className="flex justify-evenly p-2 mt-5 gap-2 border-2 border-gray-300 rounded-lg navbar">
        <p className="text-center mt-4 mb-4 text-gray-600">
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
        </p>
        <p className="text-center mt-4 mb-4 text-gray-600">
          <Link href="/about" className="text-white hover:underline">
            About
          </Link>
        </p>
        <p className="text-center mt-4 mb-4 text-gray-600">
          <Link href="/services" className="text-white hover:underline">
            Services
          </Link>
        </p>
        <p className="text-center mt-4 mb-4 text-gray-600">
          <Link href="/blogs" className="text-white hover:underline">
            Blogs
          </Link>
        </p>
        <p className="text-center mt-4 mb-4 text-gray-600">
          {isDarkMode ? (
            <img
              src="/sun.svg"
              width={20}
              height={20}
              onClick={toggleTheme}
              alt="Switch to light mode"
              className="cursor-pointer"
            />
          ) : (
            <img
              src="/moon.svg"
              width={20}
              height={20}
              onClick={toggleTheme}
              alt="Switch to dark mode"
              className="cursor-pointer"
            />
          )}
        </p>
      </div>
    </>
  );
};

export default Nav;
