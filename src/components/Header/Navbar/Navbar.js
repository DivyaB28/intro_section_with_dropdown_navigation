import React, { useState } from "react";
import HambergerMenu from "./HambergerMenu";
import styles from "../../../styles/styles";

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  const [featuresMenu, setFeaturesMenu] = useState(false);
  const [companyMenu, setCompanyMenu] = useState(false);

  const handleFeaturesMenu = () => {
    setFeaturesMenu(!featuresMenu);
    setCompanyMenu(false);
  };

  const handleCompanyMenu = () => {
    console.log(companyMenu);
    setCompanyMenu(!companyMenu);
    setFeaturesMenu(false);
  };
  return (
    <nav className="w-auto lg:w-full">
      <HambergerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      <ul
        className={`transition-visibility z-40 flex translate-x-[150%] flex-col items-start gap-4 p-10 pt-24 text-[0.87rem] text-medium-grey lg:static lg:max-w-none lg:flex-row lg:items-center lg:gap-10 
        lg:bg-transparent lg:p-0 max-lg:invisible
         ${isMenuOpen ? "!visible !translate-x-0 max-lg:overflow-y-auto" : ""}
         ${styles.navdesktop} ${styles.navmobile}
         `}
        id="navbar-menu"
      >
        <li className="relative">
          <button
            type="button"
            className={`${styles.transition} icon-menu flex gap-2 tracking-wide hover:text-almost-black`}
            aria-expanded={featuresMenu}
            aria-controls="features-menu"
            onClick={handleFeaturesMenu}
          >
            Features
          </button>
          <ul
            id="features-menu"
            className={`${styles.submenudesktop} ${styles.submenumobile} ${featuresMenu ? "!visible p-4 pb-2 lg:!translate-y-[3rem] lg:!opacity-100 max-lg:max-h-max" : ""}
             transition-visibility invisible flex flex-col gap-4 rounded-md leading-none lg:right-0 lg:-translate-y-[40%] lg:bg-white/95 lg:opacity-0`}
          >
            {[
              ["icon-todo", "Todo List"],
              ["icon-calendar", "Calendar"],
              ["icon-reminders", "Reminders"],
              ["icon-planning", "Planning"],
            ].map(([className, item], index) => (
              <li key={`features-${index}`}>
                <a
                  href="/"
                  className={`flex gap-4 hover:text-almost-black ${className} ${styles.transition}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li className="relative">
          <button
            type="button"
            className={`${styles.transition} icon-menu flex gap-2 tracking-wide hover:text-almost-black`}
            aria-expanded={companyMenu}
            aria-controls="features-menu"
            onClick={handleCompanyMenu}
          >
            Company
          </button>

          <ul
            id="company-menu"
            className={`${styles.submenudesktop} ${styles.submenumobile} ${companyMenu ? "!visible p-4 pb-2 lg:!translate-y-[3rem] lg:!opacity-100 max-lg:max-h-max" : ""}
             transition-visibility invisible flex flex-col gap-4 rounded-md leading-none lg:right-0 lg:-translate-y-[40%] lg:bg-white/95 lg:opacity-0`}
          >
            {["History", "Our Team", "Blog"].map((text, index) => (
              <li key={`company-${index}`}>
                <a
                  href="/"
                  className={`block hover:text-almost-black ${styles.transition}`}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <a href="/" className="block">
            Careers
          </a>
        </li>
        <li>
          <a href="/" className=" block hover:text-almost-black">
            About
          </a>
        </li>
        <li className={` ${isMenuOpen ? "" : "md:ml-auto"}`}>
          <a href="/" className=" block hover:text-almost-black">
            Login
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block rounded-xl border border-almost-black px-[1.1325rem] py-[0.625rem] hover:bg-almost-black hover:text-white"
          >
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
