import Image from "next/image";
import Nav from "./nav/page";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10">
        Guitar Lessons and Services
      </h1>
      <Nav />
      <div className="flex justify-center mt-10">
        <Image
          src="/guitar.jpg"
          alt="Guitar Image"
          width={600}
          height={400}
          loading="eager"
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="text-center mt-4 text-gray-600">
        Welcome to our guitar lessons and services website. We offer a variety
        of lessons for all skill levels, as well as guitar repair and
        maintenance services.
      </p>
    </>
  );
}
