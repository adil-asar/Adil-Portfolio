import React, { useEffect, useState, useMemo } from "react";
import {HashLink as Link} from 'react-router-hash-link'
import { IoIosMenu } from "react-icons/io";
import { BsX } from "react-icons/bs";
import Logo from "../../assets/logo-1.png";
import { useLocation } from "react-router-dom";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuItems = [
    {
      id: 1,
      name: "Home",
      link: "#home",
    },
   
    {
      id: 2,
      name: "Resume",
      link: "#resume",
    },
    {
      id: 3,
      name: "Porfolio",
      link: "#portfolio",
    },
    {
      id: 4,
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <header className="bg-white shadow-sm w-full fixed top-0 z-50  px-6   font-ubuntu ">
      <div
        className="xl:max-w-[1250px] lg:max-w-[1000px] md:max-w-[850px] sm:max-w-[700px] h-20   mx-auto flex 
      justify-between items-center flex-wrap"
      >
        <div className="mb-0">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-10 h-10 rounded-full" />
          </Link>
        </div>

        <div className="md:hidden">
          {showMenu ? (
            <BsX
              className="text-3xl text-[#eb3b5a]  cursor-pointer"
              onClick={handleMenu}
            />
          ) : (
            <IoIosMenu
              onClick={handleMenu}
              className="text-3xl text-[#eb3b5a]   cursor-pointer"
            />
          )}
        </div>

        <div
          className={`md:hidden flex flex-col shadow bg-white transition-all duration-500 ease-in-out overflow-hidden absolute  left-0 top-20 w-full ${
            showMenu ? "h-[180px] py-2" : "h-0 overflow-hidden"
          }   `}
        >
        
          {menuItems.map((item) => (
            <Link
              key={item.id}
              className={`text-base font-medium tracking-wider px-5 py-2  ${
              location.hash === item.link ? "text-[#eb3b5a]" : "text-[#343a40]"
            }   hover:text-[#eb3b5a] font-medium `}
              to={item.link}
              onClick={() => setShowMenu(!showMenu)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="md:flex hidden gap-4 ">
          {menuItems.map((item) => (
            <Link
            key={item.id}
            className={`text-base px-3 py-2 font-medium  ${
              location.hash === item.link ? "text-[#eb3b5a] font-medium" : "text-[#343a40]"
            } hover:text-[#eb3b5a]`}
            to={item.link}
            onClick={() => setShowMenu(!showMenu)}
          >
            {item.name}
          </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
