import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10">About Us</h1>
      <p className="text-center mt-4 text-gray-600">
        This is the about page of our Next.js application.
      </p>
      <div className="flex justify-center mt-10">
        <Image
          // loader={(props)=>{console.log(props)}}
          // loader={({src,quality,width})=>{
          //   return src
          // }}
          //we have to use "use-client" directive to use custom loader in next/image component
          //best to make this a custom component and use it across the app
          src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Guitar Image"
          width={600}
          height={400}
          loading="eager"
          className="rounded-lg shadow-lg"
        />
      </div>
    </>
  );
};

export default About;
