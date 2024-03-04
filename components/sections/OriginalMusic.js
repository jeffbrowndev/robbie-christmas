import styles from "@/styles/originalMusic.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import AlbumCarousel from "../carousels/AlbumCarousel";
import Image from "next/image";
import AccentLine from "../common/AccentLine";
import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";

const OriginalMusic = () => {
  const { originalMusicContent } = useContext(DataContext);

  const backgroundStyles = {
    background: `url(${originalMusicContent.background})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    paddingBottom: "10px",
  };

  return (
    <>
      <div className="fixed-background" style={backgroundStyles}>
        <MaxWidthContainer>
          <div id="original-music" className={styles['original-music-content']}>
            <div className={styles['main-content']}>
              <h2>{originalMusicContent.sectionName}</h2>
              <AccentLine />
              <p className='main-text'>{originalMusicContent.description}</p>
              <Link href="https://open.spotify.com/artist/6uIVLxe5YmjFYsIOWH34n4" target="_blank">
                <button className={styles['accent-button']}>
                  LISTEN ON SPOTIFY
                </button>
              </Link>
              <Link href="https://music.apple.com/us/artist/robbie-christmas/415963786" target="_blank">
                <button className={styles['accent-button']}>
                  LISTEN ON APPLE MUSIC
                </button>
              </Link>
            </div>
            <Image className={styles['image']} src={originalMusicContent.mainImage} width={1000} height={1000} />
          </div>
        </MaxWidthContainer>
        <AlbumCarousel />
      </div>
    </>
  )
}

export default OriginalMusic;