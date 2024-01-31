import styles from '@/styles/hero.module.scss';
import MaxWidthContainer from '../layouts/MaxWidthContainer';
import heroImage from "@/public/images/hero-image.jpg";
import Image from 'next/image';
import AccentLine from '../common/AccentLine';
import AccentButton from "../common/AccentButton";
import ServiceCard from '../common/ServiceCard';

// service card images
import liveMusic from "@/public/images/live-music.jpg";
import weddings from "@/public/images/weddings.jpg";
import corporateEvents from "@/public/images/corporate-events.jpg";

const Hero = () => {
  return (
    <div className={styles['hero']}>
      <MaxWidthContainer>
        <div className={styles["hero-content"]}>
          <Image
            className={styles['hero-image']}
            src={heroImage}
            alt='Robbie Christmas' />
            <div className={styles['hero-content-right']}>
              <h1>Intimate, Memorable, & Captivating Live Music.</h1>
              <h3>Tailored To Make Any Moment The Perfect Moment.</h3>
              <AccentLine />
              <p>
                Setting the tone in the Pacific Northwest with 15+ years of experience 
                and offering a catalog of over 600 popular songs tailored for each unique 
                event and celebration.
              </p>
              <AccentButton text="LISTEN" dest='listen' />
              <AccentButton text="MAKE AN INQUIRY" dest='contact' />
            </div>
        </div>
        <div className={styles['service-cards']}>
          <ServiceCard text="CALENDAR" image={liveMusic} dest={'calendar'} />
          <ServiceCard text="WEDDINGS" image={weddings} dest={'weddings'} />
          <ServiceCard text="CORPORATE EVENTS" image={corporateEvents} dest={'corporate-events'} />
        </div>
      </MaxWidthContainer>
    </div>
  )
}

export default Hero;