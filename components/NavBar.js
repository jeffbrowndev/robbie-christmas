import styles from "../styles/navbar.module.scss";
import Image from "next/image";
import logo from "../public/images/rx-logo.png";

const NavBar = () => {
  return (
    <div className={styles['navbar']}>
      <Image
        className={styles['navbar-logo']}
        src={logo}
        alt='RX Logo' />
      <ul>
        <li>LISTEN</li>
        <li>LIVE MUSIC</li>
        <li>CALENDAR</li>
        <li>WEDDINGS</li>
        <li>CORPORTATE EVENTS</li>
        <li>SONG LIST</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
}

export default NavBar;