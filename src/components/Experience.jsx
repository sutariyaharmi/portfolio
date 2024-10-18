import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: mongodb,
      title: "MonoDB",
      style: "shadow-green-400",
    },
    {id: 7,
      src: node,
      title: "Node",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
  name="skills"
  className="bg-gradient-to-b from-gray-800 to-black w-full h-100 md:h-auto py-20"
>
  <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
    <div>
      <p className="text-6xl font-bold border-b-4 border-gray-500 p-2 inline">
        Technical skills
      </p>
      <p className="py-10 text-2xl">These are the technologies I've worked with</p>
    </div>

    <div className="w-auto grid grid-cols-2  md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
      {techs.map(({ id, src, title, style }) => (
        <div
          key={id}
          className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
        >
          <img src={src} alt={title} className="w-20 mx-auto" />
          <p className="mt-4">{title}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Experience;
