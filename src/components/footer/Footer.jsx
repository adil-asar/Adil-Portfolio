import React from "react";
import Logo from "../../assets/logo-1.png";
import { PiLinkedinLogo } from "react-icons/pi";
import { PiGithubLogo} from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";

const Footer = () => {
  const socials = [
    {
      name: "Linkedin",
      icon: <PiLinkedinLogo className="text-[#eb3b5a] text-xl hover:text-white" />,
      link:"https://www.linkedin.com/in/adil-asar/"
    },
    {
      name: "Github",
      icon: <PiGithubLogo className="text-[#eb3b5a] text-xl hover:text-white" />,
      link:"https://github.com/adil-asar"
    },
      
    {
      name: "Instagram",
      icon: <PiInstagramLogo className="text-[#eb3b5a] text-xl hover:text-white" />,
      link:"https://www.instagram.com/madildev9/"
    },
  
  ];

  return (
    <footer className="w-full bg-[#303952] flex items-center px-6 py-8">
      <div className=" md:max-w-[700px] sm:max-w-[700px] mx-auto ">
        <div className="text-center">
          <img
            src={Logo}
            className="mx-auto rounded-full w-12 h-12 mb-4"
            alt=""
          />
          <p className="text-gray-300 text-base">
            Obviously I'm a Web Designer. Experienced with all stages of the
            development cycle for dynamic web projects.
          </p>
          <p className="text-[#eb3b5a] mt-2 text-lg font-semibold font-ubuntu">
          Innovating one project at a time
          </p>
        </div>
        <div className="w-full flex items-center mt-4 justify-center sm:gap-1 ">
        {
            socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-[#eb3b5a] w-8 h-8 flex items-center justify-center border border-[#eb3b5a]   transition-all duration-300"
              >
                {social.icon}
              </a>
            ))
  
        }
        </div>
      </div>
    </footer>
  );
};

export default Footer;
