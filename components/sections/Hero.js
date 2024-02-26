import styles from '@/styles/hero.module.scss';
import MaxWidthContainer from '../layouts/MaxWidthContainer';
import Image from 'next/image';
import AccentLine from '../common/AccentLine';
import AccentButton from "../common/AccentButton";
import ServiceCard from '../common/ServiceCard';
import { DataContext } from '@/context/DataContext';
import { useContext } from 'react';



const Hero = () => {
  const { heroContent } = useContext(DataContext);

  const backgroundStyles = {
    background: `url(${heroContent.background})`,
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  }

  return (
    <div style={backgroundStyles} className={`${styles['hero']} fixed-background`} >
      <MaxWidthContainer>
        <div className={styles["hero-content"]}>
          <Image
            className={styles['hero-image']}
            src={heroContent.mainImage}
            width={1000}
            height={1263}
            alt='Robbie Christmas' />
            <div className={styles['hero-content-right']}>
              <h1>{heroContent.primaryHeadline}</h1>
              <h3>{heroContent.secondaryHeadline}</h3>
              <AccentLine />
              <p>{heroContent.overview}</p>
              <AccentButton text="LISTEN" dest='listen' />
              <AccentButton text="MAKE AN INQUIRY" dest='contact' />
            </div>
        </div>
        <div className={styles['service-cards']}>
          <ServiceCard text="CALENDAR" image={heroContent.calendarImage} dest={'calendar'} />
          <ServiceCard text="WEDDINGS" image={heroContent.weddingsImage} dest={'weddings'} />
          <ServiceCard text="CORPORATE EVENTS" image={heroContent.corporateImage} dest={'corporate-events'} />
          <ServiceCard text="ORIGINAL MUSIC" image={heroContent.originalMusicImage} dest={'original-music'} />
        </div>
      </MaxWidthContainer>
    </div>
  )
}

export default Hero;