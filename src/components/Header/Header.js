import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import Navbar from "./Navbar/Navbar";
import styles from "../../styles/styles";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleIsMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("lock-scroll");
  };
  return (
    <header
      className={`${styles.container} flex items-center justify-between py-[1.3125rem]`}
    >
      <a href="/">
        <img
          src={logo}
          alt="snap"
          width={91}
          height={26}
          className={"mr-[4rem] mt-[0.3125rem]"}
        />
      </a>
      <Navbar toggleMenu={toggleIsMenu} isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
