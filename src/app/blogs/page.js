import React from "react";

const BlogsPage = async () => {
  const res = await fetch("https://api.vercel.app/blog?_limit=10", {
    revalidate: 10, // Revalidate every 10 seconds
  });
  const blogs = await res.json();
  console.log("Fetched Blogs:", blogs);
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10">Blogs</h1>
      <p className="text-center mt-4 text-gray-600">
        Welcome to the Blogs page! Here you can find the latest articles and
        insights on various topics.
      </p>
      {blogs.length > 0 ? (
        <ul className="mt-6 space-y-4">
          {blogs.map((blog) => (
            <li key={blog.id} className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-gray-700 mt-2">{blog.content}</p>
              <p className="text-gray-700 mt-2">{blog.author}</p>
              <p className="text-gray-700 mt-2">{blog.date}</p>
              <p className="text-gray-700 mt-2">{blog.category}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center mt-4 text-gray-600">No blogs available.</p>
      )}
    </>
  );
};

export default BlogsPage;
