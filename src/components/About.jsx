import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-slate-100 text-slate-900 mt-[70px]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 text-center mt-4">
            <p className="  text-4xl font-bold inline border-b-4 border-pink-600  ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className=" sm:text-right text-sm lg:text-4xl font-bold">
            <p className="fo">
              Hi. I'm Monsuru Samuel, nice to meet you. Please take a look
              around.
            </p>

            <img
              className="w-[220px] h-[260px] mt-6 lg:ml-[70px] ml-9"
              src="https://res.cloudinary.com/dutvrzezk/image/upload/v1695112715/newpics_ecj2hh.jpg"
              alt="my pics"
            />
          </div>
          <div className="text-sm px-3">
            <p>
              i passionate web developer with a knack for creating visually
              stunning designs that captivate audiences. I believe that great
              design should be accessible to everyone, and that's what drives me
              to craft user-friendly websites that leave a lasting impression.
              <p>
                By day, I'm a dedicated full-stack web developer, leveraging my
                experience in the field to bring innovative solutions to life. I
                enjoy the dynamic nature of my work, constantly pushing
                boundaries to deliver seamless experiences and optimize websites
                for better search engine visibility.
              </p>
              <p className="bg-slate-100">
                Beyond the realm of code and design, I find joy in the simple
                pleasures of life. Music is a passion of mine, serving as a
                constant source of inspiration and motivation throughout my
                creative journey. And when I'm not coding or designing, you can
                find me enjoying the refreshing embrace of the water, as
                swimming provides me with the perfect outlet for relaxation and
                rejuvenation.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
