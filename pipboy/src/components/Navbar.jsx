import React from "react";
import "./css/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navItems = [
        { name: "STAT", path: "/" },
        { name: "INV", path: "/inventory" },
        { name: "DATA", path: "/data" },
        { name: "MAP", path: "/map" },
        { name: "RADIO", path: "/radio" },
      ];

  return (
    <nav className="w-full border-b-2 px-4 pt-2">
      <div id="MyNav">
        <ul class="flex flex-wrap text-center md:text-start justify-center space-x-4">
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
    </nav>
  );
};

export default Navbar;
