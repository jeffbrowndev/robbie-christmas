import styles from "@/styles/listen.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";
import Video from "@/components/common/Video";
import Song from "@/components/common/Song";

const Listen = () => {
  const { audio, videos } = useContext(DataContext);

  return (
    <MaxWidthContainer>
      <div className={styles['listen-content']}>
        <h2>Listen</h2>
        <div className={styles['audio']}>
          {audio.map(song => <Song song={song} key={song.title} />)}
        </div>
        <div className={styles['video-gallery']}>
          {videos.map(video => <Video video={video} key={video.src} />)}
        </div>
      </div>
    </MaxWidthContainer>
  )
}

export default Listen;