import Image from "next/image";
import styles from "@/styles/listen.module.scss";
import playAudio from "@/public/images/play-audio.png";
import pauseAudio from "@/public/images/pause-audio.png";
import { useRef, useState } from 'react';

const Song = ({ song }) => {
  const playButton = useRef(null)
  const [playing, setPlaying] = useState(false);

  const play = () => {
    playButton.current.play();
    setPlaying(true);
  }

  const pause = () => {
    playButton.current.pause();
    playButton.current.currentTime = 0;
    setPlaying(false);
  }

  return (
    <div className={styles['song']}>
      <audio ref={playButton} src={song.src} />
      {!playing && <Image onClick={() => play()} alt='play audio' src={playAudio} className={styles['play-button']} />}
      {playing && <Image onClick={() => pause()} alt='pause audio' src={pauseAudio} className={styles['pause-button']} />}
      <div className={styles['audio-data']}>
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>
    </div>
  )
}

export default Song;