import styles from "../../styles/navbar.module.scss";

const NavLink = ({ text }) => {
  return (
    <p className={styles['navbar-link']}>{text}</p>
  )
}

export default NavLink;