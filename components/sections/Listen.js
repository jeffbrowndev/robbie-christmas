import styles from "@/styles/listen.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "@/context/DataContext";
import Video from "@/components/common/Video";
import Audio from "@/components/common/Audio";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktopHuge: {
    breakpoint: { max: 8000, min: 3000 },
    items: 7,
    slidesToSlide: 1
  },
  desktopLarge: {
    breakpoint: { max: 3000, min: 2000 },
    items: 5,
    slidesToSlide: 1
  },
  desktopSmall: {
    breakpoint: { max: 2000, min: 464 },
    items: 4,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1650, min: 0 },
    items: 3,
    slidesToSlide: 1
  },
  tabletSmall: {
    breakpoint: { max: 1350, min: 0 },
    items: 2,
    slidesToSlide: 1
  },
  mobileLarge: {
    breakpoint: { max: 1000, min: 0 },
    items: 1,
    slidesToSlide: 1
  },
  mobileSmall: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};


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
    <>
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
        </div>
      </MaxWidthContainer>
      <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr={true}
      infinite={true} >
        {videos.map((video, index) => {
          return (
            <Video 
              video={video} 
              key={video.src} 
              index={index} 
              playing={index === videoPlaying ? true : false} 
              setVideoPlaying={setVideoPlaying} />)
          })}
      </Carousel>
    </>
  )
}

export default Listen;