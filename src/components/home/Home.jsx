import React, { useEffect } from "react";
import Profile from "../../assets/profile.png";
import TypeWriter from "./Typewriter";
import ProfileButtons from "./ProfileButtons";
import About from "./About";
import Services from "./Services";
import Funfacts from "./Funfacts";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div id="home" className="  p-6 bg-white mt-20 font-ubuntu    w-full ">
      <div className="xl:max-w-[1250px] lg:max-w-[1000px] md:max-w-[850px] sm:max-w-[700px] mx-auto ">
        <section className="grid md:grid-cols-2 grid-cols-1 justify-center items-center md:gap-5 gap-0">
          <div className="md:pt-0 pt-7 md:text-left text-center md:order-1 order-2 animate__animated  animate__fadeInLeft">
            {/* hot div */}
            <div className="flex items-center  py-2 px-3 md:mx-0 mx-auto  w-fit bg-[#ecf0f1] rounded-full">
              <div className="text-white bg-[#eb3b5a] text-xs tracking-wide py-[3px] px-2 rounded-full">
                Hot
              </div>
              <span className="text-[#343a40] md:text-sm text-xs tracking-wide  px-2">
                {" "}
                Looking for a Developer !
              </span>
            </div>
            {/* Typeriter */}
            <TypeWriter />
            {/* Buttons */}
            <ProfileButtons />
          </div>
          <div className="flex justify-end md:order-2 order-1 md:mt-0 mt-5 animate__animated animate__fadeInRight  ">
            <img
              src={Profile}
              className="lg:w-[80%] md:w-[70%] w-[60%] lg:mx-0 mx-auto  md:mb-8 mb-0"
              alt="profile image"
            />
          </div>
        </section>
        <About />
        <Services />
        <Funfacts />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
