import { notFound } from "next/navigation";
import React from "react";

const DynamicBlogPage = async ({ searchParams, params }) => {
  console.log("Search Params:", await searchParams);
  console.log("Params:", await params);
  const { blog } = await params;
  console.log("Blog ID:", blog);
  if (!/^\d+$/.test(blog)) {
    notFound();
  }
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10">Blog ID: {blog}</h1>
      <p className="text-center mt-4 text-gray-600">
        This is the dynamic blog page for blog ID: {blog}.
      </p>
    </>
  );
};
export default DynamicBlogPage;
