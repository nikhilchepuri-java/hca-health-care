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
      <div>HCA Houston Healthcare</div>
      <div className="nav-menu">
        {(NavItems || [])?.map((navItem, index) => {
          return (
            <a className={`nav-item`} key={index}>
              {navItem}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
