import React from "react";
import { NavLink } from "react-router-dom";

import { FaTelegram, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10 ">
      <nav className="grid grid-flow-col gap-4">
        <NavLink to="/" className="link link-hover">
          Home
        </NavLink>
        <NavLink to="/about" className="link link-hover">
          About us
        </NavLink>
        <NavLink to="/contact" className="link link-hover">
          Contact
        </NavLink>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="hover:text-white transition-all duration-300 cursor-pointer">
            <FaTelegram className="text-2xl" />
          </a>
          <a className="hover:text-white transition-all duration-300 cursor-pointer">
            <FaInstagram className="text-2xl" />
          </a>
          <a className="hover:text-white transition-all duration-300 cursor-pointer">
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by M1RZO
          DEV
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
