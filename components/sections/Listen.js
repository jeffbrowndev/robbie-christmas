import styles from "@/styles/listen.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";
import Video from "@/components/common/Video";

const Listen = () => {
  const { videos } = useContext(DataContext);

  return (
    <MaxWidthContainer>
      <div className={styles['listen-content']}>
        <h2>Listen</h2>
        <div className={styles['video-gallery']}>
          {videos.map(video => <Video video={video} key={video.src} />)}
        </div>
      </div>
    </MaxWidthContainer>
  )
}

export default Listen;