import React from "react";
import Phone from "../../assets/phone.gif";
import gml from "../../assets/gml.gif";
import loc from "../../assets/loc.gif";
import fb from "../../assets/fb.gif";
import lnkd from "../../assets/lnkd.gif";
import insta from "../../assets/insta.gif";
const Contact = () => {
  return (
    <div id="contact" className="  px-6  bg-white pt-32  pb-8 font-ubuntu  w-full ">
      <div className="xl:max-w-[1250px] lg:max-w-[1000px] md:max-w-[850px] sm:max-w-[700px] mx-auto ">
        <h1 className="text-4xl font-semibold md:text-left text-center text-[#eb3b5a]">
          Contact
        </h1>
        <div className="px-2 py-0.5 text-white text-sm w-fit bg-[#eb3b5a] md:mx-0 mx-auto ">
          Feel free to contact me
        </div>

        <div className=" grid   grid-cols-1 my-10    gap-8">
          <div>
            <div className=" px-2 w-fit h-8 border-l-2  flex justify-center border-[#eb3b5a] items-center">
              <h1 className="text-2xl font-semibold md:text-left text-center text-[#343a40]">
                Get in touch
              </h1>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Are you prepared to bring your ideas to life? Let us work together
              to create something truly extraordinary. As a developer, my
              objective is to solve your technical issues and exceed your
              expectations. Get in touch to discuss your project!
            </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
            <div className=" border-2 rounded-md  py-8 border-[#ecf0f1]  flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <img src={Phone} alt="" />
                 </div>
              <p className="text-lg font-semibold text-gray-600 mt-2">
                +92 301 8139325 </p>
            </div>
            
            <div className=" border-2 rounded-md  py-8 border-[#ecf0f1]  flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <img src={gml} alt="" />
                 </div>
              <p className="text-lg font-semibold text-gray-600 mt-2">
                madildev9gmail.com </p>
            </div>

            <div className=" border-2 rounded-md  py-8 border-[#ecf0f1]  flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <img src={loc} alt="" />
                 </div>
              <p className="text-lg font-semibold text-gray-600 mt-2">
                Islamabad, Pakistan </p>
            </div>
         
            <a href="" target="_blank" className=" border rounded-md  py-8 border-[#ecf0f1]  flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <img src={fb} alt="" />
                 </div>
              <p className="text-lg font-semibold text-gray-600 mt-2">
                Facebook </p>
            </a>

            <a  href="https://www.linkedin.com/in/adil-asar/" target="_blank" className=" border-2 rounded-md  py-8 border-[#ecf0f1]  flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <img src={lnkd} alt="" />
                 </div>
              <p className="text-lg font-semibold text-gray-600 mt-2">
                Linkedin  </p>
            </a>

            <a  href="https://www.instagram.com/madildev9/" target="_blank" className=" border-2 rounded-md  py-8 border-[#ecf0f1]  flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <img src={insta} alt="" />
                 </div>
              <p className="text-lg font-semibold text-gray-600 mt-2">
                Instagram </p>
            </a>
            
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
