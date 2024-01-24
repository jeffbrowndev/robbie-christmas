import NavLink from "./NavLink";
import styles from "../../styles/navbar.module.scss";

const NavLinks = () => {
  return (
    <div className={styles['navbar-links']}>
      <NavLink text="LISTEN" />
      <NavLink text="LIVE MUSIC" />
      <NavLink text="CALENDAR" />
      <NavLink text="WEDDINGS" />
      <NavLink text="CORPORATE EVENTS" />
      <NavLink text="SONG LIST" />
      <NavLink text="CONTACT" />
    </div>
  )
}

export default NavLinks;