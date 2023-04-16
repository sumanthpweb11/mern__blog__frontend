import { useState } from "react";
import { Images } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const navItemsInfo = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  { name: "Pages", type: "dropdown", items: ["About Us", "Contact Us"] },
  { name: "Pricing", type: "link" },
  { name: "Faq", type: "link" },
];

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((currState) => {
      return !currState;
    });
  };
  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a className="px-4 py-2 " href="/">
            {item.name}
          </a>
          <span className="cursor-pointer text-green-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            onClick={toggleDropdownHandler}
            className="px-4 py-2 flex items-center gap-x-1 "
          >
            <span>{item.name}</span>
            <MdOutlineKeyboardArrowDown />
          </button>
          <div
            className={` ${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-2 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className=" bg-dark-soft text-center lg:bg-transparent flex flex-col shadow-lg rounded-lg  ">
              {item.items.map((page) => {
                return (
                  <a
                    className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                    href="/"
                  >
                    {page}
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((currState) => {
      return !currState;
    });
  };
  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between items-center py-4   ">
        <div>
          <img className="hidden md:block w-16" src={Images.Logo} alt="logo" />
        </div>

        {/* HAMBURGER AND CLOSE ICON DIV */}
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        {/* HAMBURGER AND CLOSE ICON DIV */}
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[76px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-normal lg:flex-row  fixed  top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
            {navItemsInfo.map((item) => {
              return <NavItem key={item.name} item={item} />;
            })}
          </ul>
          <button className=" mt-5 lg:mt-0 border-2 border-green-500 px-6 py-1 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 text-green-500 font-semibold">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
