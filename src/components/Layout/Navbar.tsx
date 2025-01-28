import { Link } from "react-router-dom";
import { useState } from "react";

import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleBurger = () => {
    setIsActive(!isActive);
  };

  const navbarItems = [
    { text: "Home", path: "/" },
    { text: "Writing", path: "/Writings" },
    { text: "About", path: "/About" },
    // { text: "Contact", path: "" },
  ];

  return (
    <header>
      <nav className="fixed w-full bg-hs-accent backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="font-semibold md:text-lg sm:text-base">
            {/* desktop navbar */}
            <ul className="hidden md:flex justify-between text-hs-link">
              <li>Hugh Stoddard</li>
              {navbarItems.map((item) => (
                <li key={item.text}>
                  <Link
                    to={item.path}
                    className="hover:text-hs-link-hover transition-colors duration-500"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* mobile navbar */}
            <div className="md:hidden flex justify-end">
              <button
                onClick={toggleBurger}
                className="text-hs-button-accent p-2 focus:outline-none"
                aria-label="toggle menu"
              >
                {" "}
                {isActive ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>

            <div
              className={`
                md:hidden
                absolute
                left-0
                right-0
                bg-hs-accent/85
                backdrop-blur-sm
                transform
                transition-all
                duration-300
                ease-in-out
                ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}
              `}
            >
              <ul className="py-4 px-6 space-y-4 text-hs-link">
                {navbarItems.map((item) => (
                  <li key={item.text}>
                    <Link
                      to={item.path}
                      className="hover:text-hs-link-hover transition-colors duration-500"
                      onClick={toggleBurger}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
