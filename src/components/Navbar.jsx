import React, { useState } from 'react';

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
// import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-screen z-50 h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="font-extrabold ml-7 ">
        <a href="/">TEMi</a>
      </div>

      {/* menu */}
      <ul className=" hidden lg:flex ">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="project"
            smooth={true}
            duration={500}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1_yQB-6IU-chOiUMZohdPaW3LgSOMemOb/view?usp=drivesdk"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="lg:hidden z-10 ml-[15rem] md:ml-[35rem] "
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full text-xl h-screen bg-[#0a192f] flex flex-col pt-20  items-center'
        }
      >
        <li className="py-6">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6">
          {' '}
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-6">
          {' '}
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-6">
          <Link
            onClick={handleClick}
            to="project"
            smooth={true}
            duration={500}
          >
            Project
          </Link>
        </li>
        <li className="py-6">
          {' '}
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li className="py-6">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1_yQB-6IU-chOiUMZohdPaW3LgSOMemOb/view?usp=drivesdk"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Social icons flex flex-row hidden lg:flex fixed lg:flex-col top -[35%] left-0  was initially up the parent div */}
      <div className=" ">
        <ul className=" flex-row hidden lg:flex fixed lg:flex-col top-[35%] left-0">
          <li className=" flex-row w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/temitech001/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Temitech001"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1_yQB-6IU-chOiUMZohdPaW3LgSOMemOb/view?usp=drivesdk"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/Temini001"
            >
              Twitter <AiFillTwitterCircle size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
