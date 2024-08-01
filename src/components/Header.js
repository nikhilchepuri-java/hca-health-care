import React from "react";
import "../styles/Header.css";

const Header = () => {
  const NavItems = [
    "My Health Resources",
    "Specialities",
    "Locations",
    "carrers",
  ];
  return (
    <div className="header">
      <h2 className="title">
        HCA <span>Houston Healthcare</span>
      </h2>

      <div className="nav-menu-wrapper">
        <div className="nav-menu">
          {(NavItems || [])?.map((navItem, index) => {
            return (
              <a className={`nav-item`} key={index}>
                {navItem}
              </a>
            );
          })}
        </div>

        <input type="text" className="search" placeholder="Search" />
      </div>
    </div>
  );
};

export default Header;
