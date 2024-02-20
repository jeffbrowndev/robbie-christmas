import styles from "../../styles/navbar.module.scss";

const NavLinks = () => {
  
  const scroll = (dest) => {
    const target = document.getElementById(dest);

    target.scrollIntoView({block: 'start', behavior: "smooth"});
  }

  return (
    <div className={styles['navbar-links']}>
      <p className={styles['navbar-link']} onClick={() => scroll("listen")}>LISTEN</p>
      <p className={styles['navbar-link']} onClick={() => scroll('calendar')}>CALENDAR</p>
      <p className={styles['navbar-link']} onClick={() => scroll('weddings')}>WEDDINGS</p>
      <p className={styles['navbar-link']} onClick={() => scroll('corporate-events')}>CORPORATE EVENTS</p>
      <p className={styles['navbar-link']} onClick={() => scroll('song-list')}>SONG LIST</p>
      <p className={styles['navbar-link']} onClick={() => scroll('original-music')}>ORIGINAL MUSIC</p>
      <p className={styles['navbar-link']} onClick={() => scroll('contact')}>CONTACT</p>
    </div>
  )
}

export default NavLinks;