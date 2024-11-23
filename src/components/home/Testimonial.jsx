import React from "react";
import Profile_1 from "../../assets/imran.jfif" 
import Profile_2 from "../../assets/waleed.jfif" 
const Testimonial = () => {
  return (
    <div id="Testimonials" className="w-full  pt-32   ">
      <h1 className="text-4xl  font-semibold md:text-left text-center text-[#eb3b5a]">
        Testimonials
      </h1>
      <div className="px-2 py-0.5 text-white text-sm w-fit bg-[#eb3b5a] md:mx-0 mx-auto ">
        collaborative, quality, top-notch work
      </div>

      <div className="grid  lg:grid-cols-2 grid-cols-1 mt-20 text-[#343a40]   lg:gap-6 gap-12">
        <div className=" p-5 rounded-md text-center relative  bg-[#ecf0f1]">
          <div className="w-16 h-16 bg-white mx-auto rounded-full flex items-center justify-center -mt-[53px]  ">
            <img
              src={Profile_1}
              className="rounded-full w-12 h-12"
            />
          </div>

          <p className=" text-sm my-4 text-gray-500">
            He is honest, down-to-earth, and has been a great developer with us
            for the past year. Showed strong skills in JavaScript, React, Next.js, PHP, and
            Node.js. Adil is very focused and works hard, handling tough
            projects well and always delivering quality work. His positive attitude and dedication make him a
            valuable part of our team.
          </p>
          <a href="https://www.linkedin.com/in/imran-khan-92000978/" target="_blank" className=" text-[#eb3b5a] text-lg font-bold">Imran Khan</a>
          <p className="text-sm ">Founder at OffSetup</p>
        </div>
        <div className=" p-5 rounded-md text-center  bg-[#ecf0f1]">
          <div className="w-16 h-16 bg-white mx-auto rounded-full flex items-center justify-center -mt-[53px]  ">
            <img
              src={Profile_2}
              className="rounded-full w-12 h-12"
            />
          </div>
 
          <p className=" text-sm my-4 text-gray-500">
            I've had the pleasure of working with Adil, and I can confidently
            say he's a dedicated and collaborative professional. He's developed
            exceptional expertise in his field, consistently delivering
            top-notch work. I highly recommend Adil to anyone - he's a valuable
            addition to any team.
          </p>
          <a href="https://www.linkedin.com/in/muhammad-waleed-akhtar-340097290/" target="_blank" className=" text-[#eb3b5a] text-lg font-bold">
            Muhammad Waleed Akhtar
          </a>
          <p className="text-sm">Content Writer at OffSetup</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
