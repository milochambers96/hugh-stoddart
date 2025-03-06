import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleBurger = () => {
    setIsActive(!isActive);
  };

  // Add scroll listener to detect when to add background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarItems = [
    { text: "Home", path: "/" },
    { text: "Writing", path: "/Writings" },
    { text: "About", path: "/About" },
    { text: "Contact", path: "/Contact" },
  ];

  return (
    <header>
      <nav
        className={`fixed w-full border-b-2 border-hs-card-border backdrop-blur-sm z-50 transition-all duration-300 ${
          scrolled ? "bg-hs-card/70" : "bg-hs-card"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="font-semibold md:text-lg 2xl:text-xl sm:text-base">
            {/* desktop navbar */}
            <div className="hidden md:flex justify-around">
              <ul className="md:flex text-hs-link md:gap-14 2xl:gap-24 my-auto">
                {navbarItems.slice(0, 2).map((item) => (
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
              <div className="text-center 2xl:px-20">
                <h2 className="text-4xl text-hs-title">Hugh Stoddart</h2>
                <h3 className="text-xl text-hs-subtitle">Screenwriter</h3>
              </div>
              <ul className="md:flex text-hs-link md:gap-14 2xl:gap-24 my-auto">
                {navbarItems.slice(2, navbarItems.length).map((item) => (
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
            </div>

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
