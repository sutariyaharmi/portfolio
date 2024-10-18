import React from 'react'

const About = () => {
  return (

    <div
      name="about"
      className="w-full h-{100}} md:h-full bg-gradient-to-b from-gray-800 to-black text-white py-6"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full py-20">
        <div className="pb-8">
          <p className="text-6xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
          Dedicated Mern Stack Developer with expertise in HTML, CSS, JavaScript, Tailwind CSS, ReactJs,
          and NodeJs. Currently pursuing a Bachelor of Computer Application at Monark University . Skilled in
          creating responsive, user-friendly web applications and robust backend systems. Committed to
          delivering high-quality code and contributing to innovative projects. Eager to leverage my skills in
          both frontend and backend development to enhance user experiences.
        </p>

        <br />

        <p className="text-xl">
          With a passion for growth and a thirst for knowledge, I have set out to conquer the MERN stack. By diving head-first into web development, I have done multiple projects, proving that hands-on experience . My aim is to not only achieve academic success but also to leave a lasting mark in the tech industry by designing and developing websites.
        </p>
      </div>
    </div>


  )
}

export default About
