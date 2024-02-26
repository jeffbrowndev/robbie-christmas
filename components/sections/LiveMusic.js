import styles from "@/styles/liveMusic.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import Image from "next/image";
import AccentLine from "../common/AccentLine";
import AccentButton from "../common/AccentButton";
import { DataContext } from "@/context/DataContext";
import { useContext } from "react";

const LiveMusic = () => {
  const { calendarContent } = useContext(DataContext);

  const backgroundStyles = {
    background: `url(${calendarContent.background})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="fixed-background" style={backgroundStyles}>
      <MaxWidthContainer>
        <div id='calendar' className={styles['live-music-content']}>
          <Image className={styles['image']} src={calendarContent.mainImage} width={1000} height={1000} />
          <div className={styles['main-content']}>
            <h2>{calendarContent.sectionName}</h2>
            <AccentLine />
            <p className='main-text'>{calendarContent.description}</p>
            <AccentButton text={"LISTEN"} dest='listen' />
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
}

export default LiveMusic;