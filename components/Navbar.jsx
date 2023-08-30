"use client";
import { useState, useRef } from "react";
import { logo } from "@/public/assets";
import Image from "next/image";
import { navLinks } from "@/constants";
import {
  rightarrow,
  downarrow,
  facebook,
  flickr,
  instagram,
  linkedin,
  pinterest,
  whatsapp,
  tumblr,
  twitter,
  mail
} from "@/public/assets";

const Navbar = () => {
  const [liActive, setLiActive] = useState("");
  const [secondliActive, setsecondLiActive] = useState("");
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isCountriesHovered, setIsCountriesHovered] = useState(false);
  const [isServicesDropdownVisible, setIsServicesDropdownVisible] =
    useState(false);
  const [isCountriesDropdownVisible, setIsCountriesDropdownVisible] =
    useState(false);

  const timeoutRef = useRef(null);

  const handleMouseEnterServices = () => {
    setIsServicesHovered(true);
    clearTimeout(timeoutRef.current);
    setIsServicesDropdownVisible(true);
    setIsCountriesDropdownVisible(false); // Hide the other dropdown
  };

  const handleMouseLeaveServices = () => {
    setIsServicesHovered(false);
    timeoutRef.current = setTimeout(() => {
      setIsServicesDropdownVisible(false);
      setLiActive("");
      setsecondLiActive("");
    }, 700);
  };

  const handleMouseEnterCountries = () => {
    setIsCountriesHovered(true);
    clearTimeout(timeoutRef.current);
    setIsCountriesDropdownVisible(true);
    setIsServicesDropdownVisible(false); // Hide the other dropdown
  };

  const handleMouseLeaveCountries = () => {
    setIsCountriesHovered(false);
    timeoutRef.current = setTimeout(() => {
      setIsCountriesDropdownVisible(false);
    }, 700);
  };

  const handleMouseLeaveSubdropDown = () => {
    timeoutRef.current = setTimeout(() => {
      setLiActive("");
    }, 700);
  };

  return (
    <nav className="flex flex-col fixed  z-30">
      <div className="bg-secondary/80 w-screen px-3 sm:px-8 md:px-14 lg:px-20   backdrop-blur-md z-30  flex justify-between items-center h-10">
        <div className="flex cursor-pointer   font-semibold  rounded-full">
          <Image className="mr-2 p-[3px] hover:-translate-y-1 transition-all cursor-pointer" src={mail} height={20} width={30}/>
          <p className="hidden md:block">sales@reportwritinghelp.com</p>
        </div>
        <div className="flex font-semibold rounded-lg  items-center">
          <Image className="p-[6px] hover:-translate-y-1 transition-all cursor-pointer" src={twitter} height={20} width={40}/>
          <Image  className="p-[6px] hover:-translate-y-1 transition-all cursor-pointer" src={facebook} height={20} width={40}/>
          <Image  className="p-[4px] hover:-translate-y-1 transition-all cursor-pointer" src={pinterest} height={20} width={40}/>
          <Image  className="p-[5px] hover:-translate-y-1 transition-all cursor-pointer" src={instagram} height={20} width={40} />
          <Image   className="p-[5px] hover:-translate-y-1 transition-all cursor-pointer" src={linkedin} height={20} width={40}/>
          <Image   className="p-[7px] hover:-translate-y-1 transition-all cursor-pointer" src={tumblr} height={20} width={40}/>
          <Image  className="p-[3px] hover:-translate-y-1 transition-all cursor-pointer" src={flickr} height={20} width={40}/>
          <Image  className="p-[7px] hover:-translate-y-1 transition-all cursor-pointer" src={whatsapp} height={20} width={40} />
        </div>
      </div>
      <div className="bg-slate-300/80 backdrop-blur-lg px-3 sm:px-8 md:px-14 lg:px-20 flex flex-col md:flex-row justify-between items-center">
        <Image src={logo} height={150} width={150} className="p-1" />
        <div className="md:flex text-black">
          <ul className="hidden md:flex flex-col md:flex-row space-y-4   md:space-y-0 md:space-x-5 lg:space-x-16">
            {navLinks.map((link, index) => (
              <li
                className="flex items-center "
                key={index}
                onMouseEnter={
                  link.title === "Services"
                    ? handleMouseEnterServices
                    : link.title === "Countries"
                    ? handleMouseEnterCountries
                    : null
                }
                onMouseLeave={
                  link.title === "Services"
                    ? handleMouseLeaveServices
                    : link.title === "Countries"
                    ? handleMouseLeaveCountries
                    : null
                }
              >
                {typeof link === "string" ? (
                  <a href="#" className="hover:text-secondary hover:border-b-secondary hover:border-b-2">
                    {link}
                  </a>
                ) : (
                  <div className="relative">
                    <a
                      href="#"
                      className={`hover:text-secondary flex items-center ${
                        (link.title === "Services" && isServicesHovered) ||
                        (link.title === "Countries" && isCountriesHovered)
                          ? "border-b-2 border-secondary"
                          : ""
                      }`}
                    >
                      {link.title}
                      {link.dropdown ? (
                        <Image
                          className="ml-2"
                          src={downarrow}
                          height={10}
                          width={10}
                        />
                      ) : (
                        ""
                      )}
                    </a>

                    {link.dropdown && (
                      <ul
                        className={`absolute ${
                          (isServicesDropdownVisible &&
                            link.title === "Services") ||
                          (isCountriesDropdownVisible &&
                            link.title === "Countries")
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        } md:flex flex-col space-y-2 top-[55px] left-[-70px] z-20 w-60 rounded-bl-lg rounded-br-lg transition-opacity duration-500 bg-slate-300/80 backdrop-blur-lg`}
                      >
                        {link.dropdown.map((item, subIndex) => (
                          <div key={subIndex}>
                            <a href={item.href}>
                              <li
                                className={`hover:text-black transition-all items-center flex justify-between  hover:bg-secondary p-[6px] ${
                                  liActive === link.title ? "active" : ""
                                }`}
                                onMouseEnter={() => setLiActive(item.text)}
                                onMouseLeave={() => setLiActive("")} // Update liActive on hover
                              >
                                {item.text}
                                {item.subdropdown ? (
                                  <Image
                                    src={rightarrow}
                                    height={2}
                                    width={10}
                                  />
                                ) : (
                                  ""
                                )}
                              </li>
                            </a>

                            {item.subdropdown && liActive === item.text && (
                              <ul
                                className={`absolute md:flex flex-col space-y-2 rounded-br-lg rounded-bl-lg rounded-tr-lg bg-slate-300/90 left-full z-20 w-56`}
                                style={{
                                  top: `${subIndex * 2.75}rem`,
                                }}
                                onMouseEnter={() => setLiActive(item.text)}
                                onMouseLeave={() => {
                                  handleMouseLeaveSubdropDown;
                                }}
                              >
                                {item.subdropdown.map(
                                  (subitem, subsubIndex) => (
                                    <div key={subsubIndex}>
                                      <a key={subsubIndex} href={subitem.href}>
                                        <li
                                          className="hover:bg-secondary flex justify-between items-center p-[6px]"
                                          onMouseEnter={() => {
                                            setsecondLiActive(subitem.text);
                                          }}
                                        >
                                          {subitem.text}
                                          {subitem.subsubdropdown ? (
                                            <Image
                                              src={rightarrow}
                                              height={2}
                                              width={10}
                                            />
                                          ) : (
                                            ""
                                          )}
                                        </li>
                                      </a>

                                      {subitem.subsubdropdown &&
                                        secondliActive === subitem.text && (
                                          <ul
                                            className={`absolute md:flex flex-col  rounded-tl-lg space-y-2 rounded-br-lg rounded-tr-lg bg-slate-300/90 left-full z-20 w-56`}
                                            style={{
                                              top: `${-subsubIndex * 1.5}rem`,
                                            }}
                                          >
                                            {subitem.subsubdropdown.map(
                                              (
                                                thirddropdownitem,
                                                thirdindex
                                              ) => (
                                                <div key={thirdindex}>
                                                  <a
                                                    href={
                                                      thirddropdownitem.href
                                                    }
                                                  >
                                                    <li className="hover:text-black transition-all hover:bg-secondary p-[6px] ">
                                                      {thirddropdownitem.text}
                                                    </li>
                                                  </a>
                                                </div>
                                              )
                                            )}{" "}
                                          </ul>
                                        )}
                                    </div>
                                  )
                                )}
                              </ul>
                            )}
                          </div>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
