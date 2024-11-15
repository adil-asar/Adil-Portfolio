import React, { useEffect, useState, useMemo } from "react";
import { NavLink as Link } from "react-router-dom";
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
      link: "/",
    },
   
    {
      id: 2,
      name: "Resume",
      link: "/resume",
    },
    {
      id: 3,
      name: "Porfolio",
      link: "/portfolio",
    },
    {
      id: 4,
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <header className="bg-white shadow-sm w-full py-5 px-6 fixed z-50 top-0  font-ubuntu ">
      <div
        className="xl:max-w-[1250px] lg:max-w-[1000px] md:max-w-[850px] sm:max-w-[700px] mx-auto flex 
      justify-between items-center flex-wrap"
      >
        <div>
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
          className={`md:hidden flex flex-col shadow bg-white transition-all duration-500 ease-in-out overflow-hidden absolute  left-0 top-[64px] w-full ${
            showMenu ? "h-[210px] py-1" : "h-0 overflow-hidden"
          }   `}
        >
        
          {menuItems.map((item) => (
            <Link
              key={item.id}
              className={`text-base font-medium tracking-wider px-5 py-2  ${
              location.pathname === item.link ? "text-[#eb3b5a]" : "text-[#343a40]"
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
              location.pathname === item.link ? "text-[#eb3b5a] font-medium" : "text-[#343a40]"
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
