import Image from "next/image";
import styles from "@/styles/listen.module.scss";
import playAudio from "@/public/images/play-audio.png";
import pauseAudio from "@/public/images/pause-audio.png";
import { useRef, useEffect } from 'react';

const Audio = ({ audio, playing, index, setAudioPlaying }) => {
  const playButton = useRef(null)

  useEffect(() => {
    if (playing) {
      playButton.current.play();
    }
    else {
      playButton.current.pause();
      playButton.current.currentTime = 0;
    }
  }, [playing])

  return (
    <div className={styles['audio']}>
      <audio ref={playButton} src={audio.src} />
      {!playing && <Image onClick={() => setAudioPlaying(index)} alt='play audio' src={playAudio} className={styles['play-button']} />}
      {playing && <Image onClick={() => setAudioPlaying(-1)} alt='pause audio' src={pauseAudio} className={styles['pause-button']} />}
      <div className={styles['audio-data']}>
        <h3>{audio.title}</h3>
        <p>{audio.artist}</p>
      </div>
    </div>
  )
}

export default Audio;