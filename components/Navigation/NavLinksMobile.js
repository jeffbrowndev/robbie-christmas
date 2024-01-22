import NavLink from "./NavLink";
import styles from "../../styles/navbar.module.scss";

const NavLinksMobile = ({ active }) => {
  return (
    <>
      { active && 
        <div className={styles['nav-links-mobile']}>
          <NavLink text="LISTEN" />
          <NavLink text="LIVE MUSIC" />
          <NavLink text="CALENDAR" />
          <NavLink text="WEDDINGS" />
          <NavLink text="CORPORATE EVENTS" />
          <NavLink text="SONG LIST" />
          <NavLink text="CONTACT" />
      </div> }
    </>
  )
}

export default NavLinksMobile;