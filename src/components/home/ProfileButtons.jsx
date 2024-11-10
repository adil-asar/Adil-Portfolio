import React from 'react';
import Cvlink from '../../assets/Adil-Cv.pdf'
const ProfileButtons = () => {
  return (
    <div className="mt-5 md:mb-0 mb-10 flex md:justify-start justify-center items-center">
      <a
        href={Cvlink} 
        target="_blank"
        rel="noopener noreferrer" 
        className="bg-white hover:bg-[#e74c3c] text-[#e74c3c] flex items-center border-2 border-[#e74c3c] hover:text-white py-2 px-4 text-sm"
        download="Adil_Cv.pdf" 
      >
        Download CV
      </a>
    </div>
  );
};

export default ProfileButtons;
