import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

const SocialLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/harmi-sutariya-0638b62b4/",
    },
    {
      id: 2,
      name: "GitHub",
      icon: <FaGithub size={30} />,
      href: "https://github.com/sutariyaharmi",
    },
    {
      id: 3,
      name: "Mail",
      icon: <HiOutlineMail size={30} />,
      href: "mailto:sutariyaharmi@gmail.com",
    },
    {
      id: 4,
      name: "Resume",
      icon: <BsFillPersonLinesFill size={30} />,
      href: "/Harmi_Sutariya_CV.pdf",
      download: true,
    },
  ];

  return (
    <div className="fixed left-0 top-[15%]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center items-center w-14 h-14 bg-gray-900 text-white rounded-md transition-transform duration-300 mb-2"
      >
        <AiOutlineRight size={20} className={`${isOpen ? 'rotate-180' : ''} transition-transform`} />
      </button>
      <ul
        className={`flex flex-col items-start transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {links.map(({ id, name, icon, href, download }) => (
          <li
            key={id}
            className="relative flex justify-center items-center w-14 h-14 mb-2 bg-gray-900 hover:bg-gray-700 rounded-md duration-300 group"
          >
            <a
              href={href}
              className="flex justify-center items-center  w-14 h-14 text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {icon}
            </a>
            <span className="absolute left-1/2 w-14 text-center transform -translate-x-1/2 mt-8 hidden group-hover:block text-xs text-white bg-gray-800 p-1 rounded">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
