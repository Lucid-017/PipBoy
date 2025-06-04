import React, { useState } from "react";
import "./css/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobile, isMobile] = useState(false);
  const navItems = [
    { name: "STAT", path: "/" },
    { name: "INV", path: "/inventory" },
    { name: "DATA", path: "/data" },
    { name: "MAP", path: "/map" },
    { name: "RADIO", path: "/radio" },
  ];
  const handleToggle = () => {
    // on each click close the window
    isMobile(!mobile);
  };
  
  const handleClick = (e) => {
    // on each click close the window
    console.log(e)
    isMobile(false);
  };


  return (
    <nav className="w-full px-4 pt-2 relative">
      <div id="MyNav" className="hidden sm:block border-b-2">
        <ul className="flex flex-wrap text-center md:text-start justify-center space-x-4">
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* hamburger */}
      <div className="hamburger flex justify-end block sm:hidden">
        <div
          onClick={() => handleToggle()}
          className="logo-btn cursor-pointer w-fit"
        >
          <img
            src="../../public/assets/favicon/icons8-fallout-shelter-50.svg"
            alt="fallout Logo"
                      />
        </div>
      </div>
      {mobile && (
        <div className="mobile block sm:hidden">
          <ul>
            {navItems.map((nav) => (
              <li on onClick={handleClick} key={nav.name} className="px-5 mobile-item text-center">
                <NavLink to={nav.path}>{nav.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
