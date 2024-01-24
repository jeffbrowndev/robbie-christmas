import styles from "../../styles/navbar.module.scss";
import Image from "next/image";
import logo from "../../public/images/rx-logo.png";
import NavLinks from "./NavLinks";
import NavLinksMobile from "./NavLinksMobile";
import Hamburger from "./Hamburger";
import { useState } from "react";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => setActive(!active);

  return (
    <>
      <div className={styles['navbar']}>
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