import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import profileImg from "../assets/aicartoon-removebg-preview.png";

const Home = () => {
  return (
    <div
      name="home"
      className="w-screen lg:h-screen bg-gradient-to-b from-black via-black to-gray-800 py-20"
    >
      <div className="w-screen max-w-screen-xl mx-auto grid lg:grid-cols-2 grid-cols-1 items-center justify-center  sm:h-full px-4">
        <div className="flex flex-col justify-center h-96">
          <h2 className=" sm:text-4xl md:text-6xl font-bold text-white tracking-wider sm:mt-10">
            I'm MERN Stack Developer
          </h2>
          <p className="text-gray-500 py-2 text-sm sm:text-base max-w-md sm:max-w-full sm:my-6  lg:max-w-xl">
          Hello , I'm Harmi Sutariya, web developer who loves coding. I am skilled in front-end with creating user-friendly web apps with ReactJs, Tailwind and backend development with NodeJs, ExpressJs, MongoDB.
          
          </p>

          <div className="flex flex-col sm:flex-row mt-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-4 py-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mb-2 sm:mb-0 sm:mr-2"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
              </span>
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white w-fit px-4 py-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-blue-500 cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="my profile"
            className="mx-auto w-1/2 sm:w-2/3 md:w-[60%] lg:w-[80%] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;