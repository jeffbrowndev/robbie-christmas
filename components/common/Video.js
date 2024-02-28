import styles from "@/styles/listen.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import play from "@/public/images/play-video.png";

const Video = ({ video, playing, index, setVideoPlaying }) => {
  const [embedUrl, setEmbedUrl] = useState(null);

  useEffect(() => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = video.src.match(regExp);

    if (match && match[2].length == 11) {
        setEmbedUrl(`//www.youtube.com/embed/${match[2]}?autoplay=1`);
    }
  },[])

  return (
    <div className={styles['video-container']}>
      {!playing && 
        <>
          <div className={styles['thumbnail-container']}>
            <Image className={styles['play-button']} alt="thumbnail" src={video.thumbnail} fill />
            <Image className={styles['play-icon']} alt="play" src={play} onClick={() => setVideoPlaying(index)} />
          </div>
          <div className={styles['video-overlay']}>
            <p>{video.title}</p>
          </div>
        </>}
      {playing && <iframe className={styles['video']} src={embedUrl} allowFullScreen allow="autoplay" />}
    </div>
  )
}

export default Video;