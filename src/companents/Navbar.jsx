// import react-icons
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaHeart, FaMoon, FaSun } from "react-icons/fa";

// import react-router-dom
import { Link, NavLink } from "react-router-dom";

// import react
import { useEffect, useState } from "react";

// import hooks GlobalContext
import { UseGlobalContext } from "../hooks/UseGlobalContext";

const Navbar = () => {
  const { likedImages } = UseGlobalContext();
  const themeFromLocalStrage = () => {
    return localStorage.getItem("theme") || "autumn";
  };

  const [theme, setTheme] = useState(themeFromLocalStrage());

  const toggleTheme = () => {
    const newTheme = theme == "autumn" ? "coffee" : "autumn";
    setTheme(newTheme);
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <nav className="bg-base-200 ">

    <div className="navbar   align-elements">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-2xl"
            >
            <AiOutlineMenuUnfold />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">
          Unsplash.com
        </Link>
      </div>
      <div className="navbar-end">
        <NavLink to="/like">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator text-xl">
              <FaHeart />

              <span className="badge badge-xs badge-primary indicator-item">
                {likedImages.length}{" "}
              </span>
            </div>
          </button>
        </NavLink>
        <button className="btn btn-ghost btn-circle">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={toggleTheme} />

            {/* sun icon */}
            <FaSun className="swap-on h-5 w-5 fill-current" />

            {/* moon icon */}
            <FaMoon className="swap-off h-5 w-5 fill-current" />
          </label>
        </button>
      </div>
    </div>
            </nav>
  );
};

export default Navbar;
