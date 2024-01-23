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
              <h1>Live music for weddings, corporate events, and more.</h1>
              <AccentLine />
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
              <AccentButton text="LISTEN" />
              <AccentButton text="MAKE AN INQUIRY" />
            </div>
        </div>
        <div className={styles['service-cards']}>
          <ServiceCard text="LIVE MUSIC" image={liveMusic} />
          <ServiceCard text="WEDDINGS" image={weddings} />
          <ServiceCard text="CORPORATE EVENTS" image={corporateEvents} />
        </div>
      </MaxWidthContainer>
    </div>
  )
}

export default Hero;