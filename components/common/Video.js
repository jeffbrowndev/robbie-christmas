import styles from "@/styles/listen.module.scss";
import { useEffect, useState } from "react";
import playButton from "@/public/images/play-button.png";
import Image from "next/image";

const Video = ({ video }) => {
  const [embedUrl, setEmbedUrl] = useState(null);
  const [playing, setPlaying] = useState(false);

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
        <div className={styles['thumbnail-container']}>
          <Image className={styles['play-button']} alt="thumbnail" src={video.thumbnail} onClick={() => setPlaying(true)} fill />
        </div>}
      {playing && <iframe className={styles['video']} src={embedUrl} allowFullScreen allow="autoplay" />}
    </div>
  )
}

export default Video;