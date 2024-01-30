import styles from "@/styles/liveMusic.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import Image from "next/image";
import AccentLine from "../common/AccentLine";
import AccentButton from "../common/AccentButton";
import liveMusic from "@/public/images/live-music-main.jpg";

const LiveMusic = () => {
  return (
    <MaxWidthContainer>
      <div id='live-music' className={styles['live-music-content']}>
        <Image className={styles['image']} src={liveMusic} />
        <div className={styles['main-content']}>
          <h2>Live Music</h2>
          <AccentLine />
          <p className='main-text'>
            You can catch Robbie performing regularly at various venues in the Seattle area, 
            often with no cover charge. During these performances, Robbie showcases his extensive 
            repertoire of over 600 favorite songs, occasionally including original compositions. 
            It's an excellent opportunity to gauge how Robbie's music can seamlessly complement your event. 
            If you're planning to attend one of his performances, feel free to send us an email in advance, 
            and Robbie will be delighted to greet you personally.
          </p>
          <AccentButton text={"LISTEN"} dest='listen' />
        </div>
      </div>
    </MaxWidthContainer>
  );
}

export default LiveMusic;