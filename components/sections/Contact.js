import AccentLine from "../common/AccentLine";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import styles from "@/styles/contact.module.scss";
import Image from "next/image";
import rxLogo from "@/public/images/rx-logo-footer.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSpotify, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import AccentButton from "../common/AccentButton";
import Link from "next/link";

const Contact = () => {

  const scroll = (dest) => {
    const target = document.getElementById(dest);

    target.scrollIntoView();
  }

  return (
    <div id='contact' className={styles['contact-container']}>
      <MaxWidthContainer>
        <div className={styles['contact-content']}>
          <div className={styles['contact-content-left']}>
            <div>
              <h2>Contact & Booking</h2>
              <AccentLine />
              <p className={styles['p-large']} >For all inquiries, booking, or to request a quote, please contact the e-mail address below and allow 24-48 hours for a response.</p>
            </div>
            <p className={styles['e-mail']} >robbiechristmasmusic@gmail.com</p>
            <Image className={styles['contact-image-desktop']} src={rxLogo} alt="rx logo" />
          </div>
          <div className={styles['contact-content-right']}>
          <div className={styles['social-media']}>
              <h3>Consulting</h3>
              <p className={styles['p-large']} >Want to talk it through before your big event? Schedule a consultation today to walk through the details.</p>
              <Link href="https://robbiechristmasmusic241689.hbportal.co/schedule/656a354a96d85800394d945a" target="_blank">
                <button className={styles['accent-button']}>
                  SCHEDULE CONSULTATION
                </button>
              </Link>
            </div>
            <div className={styles['social-media']}>
              <h3>Follow</h3>
              <div className={styles['icons']}>
                <Link href="https://open.spotify.com/artist/7067KOGZGX4Hyxhjy2g7WK" target="_blank">
                  <FontAwesomeIcon className={styles['icon']} icon={faSpotify} />
                </Link>
                <Link href="https://www.youtube.com/@RXRobbie" target="_blank">
                  <FontAwesomeIcon className={styles['icon']} icon={faYoutube} />
                </Link>
                <Link href="https://www.instagram.com/rxrobbie/?hl=en" target="_blank">
                  <FontAwesomeIcon className={styles['icon']} icon={faInstagram} />
                </Link>
                <Link href="https://www.facebook.com/RobbieChristmas" target="_blank">
                  <FontAwesomeIcon className={styles['icon']} icon={faFacebook} />
                </Link>
              </div>
            </div>
            <div className={styles['contact-nav-links']}>
              <p className={styles['navbar-link']} onClick={() => scroll("listen")}>LISTEN</p>
              <p className={styles['navbar-link']} onClick={() => scroll("weddings")}>WEDDINGS</p>
              <p className={styles['navbar-link']} onClick={() => scroll("live-music")}>LIVE MUSIC</p>
              <p className={styles['navbar-link']} onClick={() => scroll("corporate-events")}>CORPORATE EVENTS</p>
              <p className={styles['navbar-link']} onClick={() => scroll("calendar")}>CALENDAR</p>
              <p className={styles['navbar-link']} onClick={() => scroll("song-list")}>SONG LIST</p>
            </div>
            <Image className={styles['contact-image-mobile']} src={rxLogo} alt="rx logo" />
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  )
}

export default Contact;