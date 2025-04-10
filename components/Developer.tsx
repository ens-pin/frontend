import React from "react";
import Image from "next/image";

const developers = [
  {
    id: 1,
    name: "Britney",
    photo: "/brit.jpg",
    color: "#61DAFB",
    description: "UI/UX enthusiast & Frontend Developer",
  },
  {
    id: 2,
    name: "Xinrou",
    photo: "/xr.jpg",
    color: "#339933",
    description: "Frontend Developer",
  },
  {
    id: 3,
    name: "Junheng",
    photo: "/junheng.jpg",
    color: "#47A248",
    description: "Frontend Developer",
  },
  {
    id: 4,
    name: "Weihup",
    photo: "/weihup.jpg",
    color: "#3178C6",
    description: "Fullstack Developer",
  },
  {
    id: 5,
    name: "Victor",
    photo: "/victor.jpeg",
    color: "#000000",
    description: "Backend Developer",
  },
];

const Developer = () => {
  return (
    <section className="py-16 glass" id="developer">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-5xl text-gray-200 font-bold mb-4">
          Project Developers
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Meet the builders behind this ENS Pin project.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {developers.map((dev) => (
            <div
              key={dev.id}
              className="flex items-center justify-center flex-col rounded-xl p-4 bg-white/5 hover:bg-white/10 transition duration-300"
            >
              <div className="mb-4 rounded-full overflow-hidden w-32 h-32 border-4 border-white/20">
                <Image
                  src={dev.photo}
                  alt={dev.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-200 font-semibold text-lg">{dev.name}</p>
              <p className="text-gray-400 text-sm mt-1 text-center">
                {dev.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developer;
