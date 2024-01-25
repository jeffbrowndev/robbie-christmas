import styles from "@/styles/liveMusic.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import Image from "next/image";
import AccentLine from "../common/AccentLine";
import AccentButton from "../common/AccentButton";
import liveMusic from "@/public/images/live-music-main.jpg";

const LiveMusic = () => {
  return (
    <MaxWidthContainer>
      <div className={styles['live-music-content']}>
        <Image className={styles['image']} src={liveMusic} />
        <div className={styles['main-content']}>
          <h2>Live Music</h2>
          <AccentLine />
          <p className='main-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.
          </p>
          <AccentButton text={"LISTEN"} />
        </div>
      </div>
    </MaxWidthContainer>
  );
}

export default LiveMusic;