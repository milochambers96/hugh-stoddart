import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

// Define interfaces for type safety
interface DropdownItem {
  text: string;
  path: string;
}

interface NavItem {
  text: string;
  path: string;
  hasDropdown?: boolean;
  dropdown?: DropdownItem[];
}

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleBurger = () => {
    setIsActive(!isActive);
    // Reset expanded items when closing the menu
    if (isActive) {
      setExpandedItem(null);
    }
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

  const navbarItems: NavItem[] = [
    { text: "Home", path: "/" },
    {
      text: "Writings",
      path: "/Writings",
      hasDropdown: true,
      dropdown: [
        { text: "Screenplays", path: "/Writings/Screenplays" },
        { text: "Theatre", path: "/Writings/Theatre" },
        { text: "Visual Arts", path: "/Writings/TheArts" },
        { text: "Prison", path: "/Writings/Prison" },
      ],
    },
    { text: "About", path: "/About" },
    { text: "Contact", path: "/Contact" },
  ];

  // Toggle dropdown for mobile
  const toggleDropdown = (itemText: string) => {
    setExpandedItem(expandedItem === itemText ? null : itemText);
  };

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
              <ul className="md:flex text-hs-link md:gap-14 2xl:gap-24 my-auto font-interactive">
                {navbarItems.slice(0, 2).map((item) => (
                  <li key={item.text} className="relative group">
                    <Link
                      to={item.path}
                      className="text-hs-accent hover:text-hs-accent-hover transition-colors duration-500 flex items-center"
                    >
                      {item.text}
                      {item.hasDropdown && (
                        <HiChevronDown className="ml-1 h-4 w-4 text-hs-accent group-hover:text-hs-accent-hover transition-colors duration-500" />
                      )}
                    </Link>

                    {/* Dropdown for Writing */}
                    {item.dropdown && (
                      <div className="absolute left-0 mt-2 w-48 bg-hs-card border border-hs-card-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.text}
                              to={dropdownItem.path}
                              className="block px-4 py-2 text-hs-accent hover:text-hs-accent-hover hover:bg-hs-background/50 transition-colors duration-300"
                            >
                              {dropdownItem.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Only render  title if NOT on the homepage */}
              {!isHomePage && (
                <div className="text-center 2xl:px-20">
                  <h2 className="text-4xl text-hs-title font-title">
                    Hugh Stoddart
                  </h2>
                  <h3 className="text-xl text-hs-subtitle font-body">
                    Screenwriter
                  </h3>
                </div>
              )}

              <ul className="md:flex text-hs-link md:gap-14 2xl:gap-24 my-auto font-interactive">
                {navbarItems.slice(2, navbarItems.length).map((item) => (
                  <li key={item.text} className="relative group">
                    <Link
                      to={item.path}
                      className="text-hs-accent hover:text-hs-accent-hover transition-colors duration-500 flex items-center"
                    >
                      {item.text}
                      {item.hasDropdown && (
                        <HiChevronDown className="ml-1 h-4 w-4 text-hs-accent group-hover:text-hs-accent-hover transition-colors duration-500" />
                      )}
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
                {isActive ? (
                  <HiX size={24} className="text-red-900" />
                ) : (
                  <HiMenu size={24} className="text-hs-accent" />
                )}
              </button>
            </div>

            <div
              className={`
                md:hidden
                absolute
                left-0
                right-0
                bg-hs-card/85
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
                    <div className="flex items-center">
                      <Link
                        to={item.path}
                        className="text-hs-accent hover:text-hs-accent-hover transition-colors duration-500"
                        onClick={item.hasDropdown ? undefined : toggleBurger}
                      >
                        {item.text}
                      </Link>
                      {item.hasDropdown && (
                        <button
                          onClick={() => toggleDropdown(item.text)}
                          className="ml-1 text-hs-accent hover:text-hs-accent-hover p-2"
                          aria-label={`Toggle ${item.text} dropdown`}
                        >
                          <HiChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                              expandedItem === item.text ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile dropdown items */}
                    {item.dropdown && expandedItem === item.text && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <li key={dropdownItem.text}>
                            <Link
                              to={dropdownItem.path}
                              className="text-hs-accent hover:text-hs-accent-hover transition-colors duration-500"
                              onClick={toggleBurger}
                            >
                              {dropdownItem.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
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
