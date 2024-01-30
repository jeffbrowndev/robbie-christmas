import styles from "@/styles/listen.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "@/context/DataContext";
import Video from "@/components/common/Video";
import Audio from "@/components/common/Audio";

const Listen = () => {
  const { audio, videos } = useContext(DataContext);
  const [audioPlaying, setAudioPlaying] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(null);

  useEffect(() => {
    if (audioPlaying > -1) {
      setVideoPlaying(-1);
    }
  }, [audioPlaying])

  useEffect(() => {
    if (videoPlaying > -1) {
      setAudioPlaying(-1);
    }
  }, [videoPlaying])

  return (
    <MaxWidthContainer>
      <div id="listen" className={styles['listen-content']}>
        <h2>Listen</h2>
        <div className={styles['all-audio']}>
          {audio.map((song, index) => {
            return (
              <Audio 
                audio={song} 
                key={song.title} 
                index={index} 
                playing={index === audioPlaying ? true : false} 
                setAudioPlaying={setAudioPlaying} />)
          })}
        </div>
        <div className={styles['video-gallery']}>
          {videos.map((video, index) => {
            return (
              <Video 
                video={video} 
                key={video.src} 
                index={index} 
                playing={index === videoPlaying ? true : false} 
                setVideoPlaying={setVideoPlaying} />)
          })}
        </div>
      </div>
    </MaxWidthContainer>
  )
}

export default Listen;