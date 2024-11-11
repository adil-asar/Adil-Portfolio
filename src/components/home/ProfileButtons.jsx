import React from 'react';
import Cvlink from '../../assets/Adil-Cv.pdf'
import { NavLink } from 'react-router-dom';
const ProfileButtons = () => {
  return (
    <div className="mt-5 md:mb-0 mb-10 flex md:justify-start justify-center items-center">
      <a
        href={Cvlink} 
        target="_blank"
        rel="noopener noreferrer" 
        className="bg-white hover:bg-[#eb3b5a] text-[] #eb3b5aflex items-center border-2 border-[#eb3b5a] hover:text-white py-2 px-4 text-sm"
        download="Adil_Cv.pdf" 
      >
        Download CV
      </a>

      <NavLink
        to="/contact"
        className="bg-[#eb3b5a] hover:bg-white text-white flex items-center border-2 border-[#eb3b5a] hover:text-[#eb3b5a] py-2 px-4 text-sm ml-4"
      >
        Hire Me
      </NavLink>

    </div>
  );
};

export default ProfileButtons;
