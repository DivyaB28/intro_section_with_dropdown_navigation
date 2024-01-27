import styles from "../../../styles/styles";

const HambergerMenu = ({ toggleMenu, isMenuOpen }) => {
  return (
    <button
      type="button"
      onClick={toggleMenu}
      aria-haspopup="menu"
      aria-expanded={isMenuOpen}
      aria-controls="navbar-menu"
      className={`absolute right-[1.25rem] top-[1.6rem] z-50 flex h-[1.15rem] w-7 flex-col justify-between lg:hidden ${isMenuOpen ? "!fixed" : ""}`}
    >
      <span
        aria-hidden="true"
        className={`${styles.transition} z-50 h-0.5 w-7 transform bg-almost-black ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
      ></span>
      <span
        aria-hidden="true"
        className={`${styles.transition} z-50 h-0.5 w-7 transform bg-almost-black ${isMenuOpen ? "opacity-0" : ""}`}
      ></span>
      <span
        aria-hidden="true"
        className={`${styles.transition} z-50 h-0.5 w-7 transform bg-almost-black ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
      ></span>
    </button>
  );
};

export default HambergerMenu;
