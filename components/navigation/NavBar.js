import styles from "../../styles/navbar.module.scss";
import Image from "next/image";
import logo from "../../public/images/rx-logo.png";
import NavLinks from "./NavLinks";
import NavLinksMobile from "./NavLinksMobile";
import Hamburger from "./Hamburger";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const handleClick = () => setActive(!active);

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", () => {         
          if (window.scrollY > 0) {
            setScrolling(true);
          }
          else {
            setScrolling(false);
          }
      })
    }

    watchScroll();
  });

  return (
    <>
      <div className={scrolling ? styles['navbar-scrolling'] : styles['navbar']}>
        <Image
          className={styles['navbar-logo']}
          src={logo}
          alt='RX Logo' />
          <Hamburger handleClick={handleClick} active={active} />
          <NavLinks />
      </div>
      <NavLinksMobile active={active} />
    </>
  );
}

export default NavBar;