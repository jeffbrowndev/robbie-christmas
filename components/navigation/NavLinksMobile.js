import styles from "../../styles/navbar.module.scss";

const NavLinksMobile = ({ active, setActive }) => {

  const scroll = (dest) => {
    setActive(false);
    
    const target = document.getElementById(dest);

    target.scrollIntoView();
  }

  return (
    <>
      { active && 
        <div className={styles['nav-links-mobile']}>
          <p className={styles['navbar-link']} onClick={() => scroll("listen")}>LISTEN</p>
          <p className={styles['navbar-link']} onClick={() => scroll('calendar')}>CALENDAR</p>
          <p className={styles['navbar-link']} onClick={() => scroll('weddings')}>WEDDINGS</p>
          <p className={styles['navbar-link']} onClick={() => scroll('corporate-events')}>CORPORATE EVENTS</p>
          <p className={styles['navbar-link']} onClick={() => scroll('original-music')}>ORIGINAL MUSIC</p>
          <p className={styles['navbar-link']} onClick={() => scroll('song-list')}>SONG LIST</p>
          <p className={styles['navbar-link']} onClick={() => scroll('contact')}>CONTACT</p>
        </div> }
    </>
  )
}

export default NavLinksMobile;