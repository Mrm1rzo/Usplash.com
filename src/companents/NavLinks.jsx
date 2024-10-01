import React from "react";
import { Link } from "react-router-dom";
const navLinks = [
  { path: "/", text: "Home" },
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
  { path: "/imageinfo", text: "Contact" },
];

const NavLinks = () => {
  return (
    <>
      {navLinks.map((link) => {
        <li key={link.path}>
          <Link to={link.path}>{link.text}</Link>
        </li>;
      })}
    </>
  );
};

export default NavLinks;
