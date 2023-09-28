import React from 'react';
import '@auroratide/typewritten-text/lib/style.css';
import '@auroratide/typewritten-text/lib/define.js';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-slate-100"
    >
      {/* Container */}
      <div className=" w-[100%] max-w-[750px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className=" text-sm md:text-4xl font-bold text-slate-900 ">
          Monsuru Samuel T.
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] ">
          <p className="">
            <typewritten-text> A Software Developer.</typewritten-text>
          </p>
        </h2>
        <p className="text-slate-900 font-semibold py-4 max-w-[700px]">
          I'm a freelance Front-End Web Developer with a passion for crafting
          exceptional digital experiences. My expertise lies in building
          accessible, human-centered, and SEO-friendly products. As a
          freelancer, I have the flexibility to work on various projects and I'm
          currently available for new opportunities. Let's collaborate to create
          outstanding solutions tailored to your needs.
        </p>
        <div>
          <button className="text-slate-900 group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 mt-5">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
