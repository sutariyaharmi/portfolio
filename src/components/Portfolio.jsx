import React from "react";
import blog from "../assets/portfolio/blog.webp";
import ecommerce from "../assets/portfolio/ecommerce.jpg";
import fashionhub from "../assets/portfolio/fashionhub.png";

// https://github.com/DevyManish/personal-portfolio.git

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: fashionhub,
      // demo_link: "",
      code_link: "https://github.com/sutariyaharmi/Reactjs_harmi05/tree/main/Reactjs/React%20Project/React%20Project/FashionHub",
      about: "Developed a fully responsive e-commerce website using HTML5, CSS, JavaScript, Tailwind CSS, and React.js, featuring product listings, shopping cart and wishlist. Gained practical experience in frontend development and web application design, strengthening skills in HTML5, CSS, JavaScript, Tailwind CSS, and React.js."
    },
    {
      id: 2,
      src: ecommerce,
      // demo_link: "",
      code_link: "https://github.com/sutariyaharmi/Website",
      about: "A Node.js-based e-commerce web application incorporates user authentication, enabling registration, login, and profile management for users It features an admin product management system that allows for the addition, modification, and removal of products, alongside a shopping cart functionality for users to organize their selections. The backend architecture utilizes Node.js and Express.js, with MongoDB and Mongoose for data management, ensuring a scalable and efficient framework for e-commerce activities."
    },
    {
      id: 3,
      src: blog,
      demo_link: "https://blog-project-bs85.onrender.com",
      code_link: "https://github.com/sutariyaharmi/ExpressJS/branches",
      about: "Developed and deployed a mern-stack blog application with authentication, OTP verification for password recovery using Nodemailer Constructed a blog system utilizing a Node.js backend, which includes OTP-based authentication and a dynamic, responsive frontend developed with EJS Engineered a blog application that features integrated user authentication and OTP verification, employing Node.js, Express.js, and EJS to achieve comprehensive mern-stack capabilities."
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-8">
          <p className="text-6xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-2xl">Check out some of my work right here</p>
        </div>

        <div className="px-12 sm:px-0 ">
          {portfolios.map(({ id, src, demo_link, code_link, about }) => (
            <div key={id} className="shadow-md shadow-gray-600  rounded-lg my-16 py-2">
              <div className="grid md:grid-cols-2 grid-r gap-8 ">
                <div>
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <a href={demo_link} target="_blank">
                      <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                        Demo
                      </button>
                    </a>
                    <a href={code_link} target="_blank">
                      <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
                <div>
                  <p className=" pb-12 text-xl">{about}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
