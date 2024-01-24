import styles from "@/styles/listen.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";
import Video from "@/components/common/Video";
import playAudio from "@/public/images/play-audio.png";
import Image from "next/image";

const Listen = () => {
  const { videos } = useContext(DataContext);

  return (
    <MaxWidthContainer>
      <div className={styles['listen-content']}>
        <h2>Listen</h2>
        <div className={styles['audio']}>
          <div className={styles['song']}>
            <Image alt='play audio' src={playAudio} className={styles['play-button']} />
            <div className={styles['audio-data']}>
              <h3>Song Name</h3>
              <p>Artist Name</p>
            </div>
          </div>
          <div className={styles['song']}>
            <Image alt='play audio' src={playAudio} className={styles['play-button']} />
            <div className={styles['audio-data']}>
              <h3>Song Name</h3>
              <p>Artist Name</p>
            </div>
          </div>
          <div className={styles['song']}>
            <Image alt='play audio' src={playAudio} className={styles['play-button']} />
            <div className={styles['audio-data']}>
              <h3>Song Name</h3>
              <p>Artist Name</p>
            </div>
          </div>
          <div className={styles['song']}>
            <Image alt='play audio' src={playAudio} className={styles['play-button']} />
            <div className={styles['audio-data']}>
              <h3>Song Name</h3>
              <p>Artist Name</p>
            </div>
          </div>
          <div className={styles['song']}>
            <Image alt='play audio' src={playAudio} className={styles['play-button']} />
            <div className={styles['audio-data']}>
              <h3>Song Name</h3>
              <p>Artist Name</p>
            </div>
          </div>
          <div className={styles['song']}>
            <Image alt='play audio' src={playAudio} className={styles['play-button']} />
            <div className={styles['audio-data']}>
              <h3>Song Name</h3>
              <p>Artist Name</p>
            </div>
          </div>
          <div className={styles['song']}>
            <Image alt='play audio' src={playAudio} className={styles['play-button']} />
            <div className={styles['audio-data']}>
              <h3>Song Name</h3>
              <p>Artist Name</p>
            </div>
          </div>
          <div className={styles['song']}>
            <Image alt='play audio' src={playAudio} className={styles['play-button']} />
            <div className={styles['audio-data']}>
              <h3>Song Name</h3>
              <p>Artist Name</p>
            </div>
          </div>
          <div className={styles['song']}>
            <Image alt='play audio' src={playAudio} className={styles['play-button']} />
            <div className={styles['audio-data']}>
              <h3>Song Name</h3>
              <p>Artist Name</p>
            </div>
          </div>
          <div className={styles['song']}>
            <Image alt='play audio' src={playAudio} className={styles['play-button']} />
            <div className={styles['audio-data']}>
              <h3>Song Name</h3>
              <p>Artist Name</p>
            </div>
          </div>
          <div className={styles['song']}>
            <Image alt='play audio' src={playAudio} className={styles['play-button']} />
            <div className={styles['audio-data']}>
              <h3>Song Name</h3>
              <p>Artist Name</p>
            </div>
          </div>
          <div className={styles['song']}>
            <Image alt='play audio' src={playAudio} className={styles['play-button']} />
            <div className={styles['audio-data']}>
              <h3>Song Name</h3>
              <p>Artist Name</p>
            </div>
          </div>
        </div>
        <div className={styles['video-gallery']}>
          {videos.map(video => <Video video={video} key={video.src} />)}
        </div>
      </div>
    </MaxWidthContainer>
  )
}

export default Listen;