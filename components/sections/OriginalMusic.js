import styles from "@/styles/originalMusic.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import AlbumCarousel from "../carousels/AlbumCarousel";
import Image from "next/image";
import originalMusic from "@/public/images/original-music-main.jpg";
import AccentLine from "../common/AccentLine";
import Link from "next/link";

const OriginalMusic = () => {
  return (
    <>
      <div className="fixed-background" id={styles['original-music-background']}>
        <MaxWidthContainer>
          <div id="original-music" className={styles['original-music-content']}>
            <div className={styles['main-content']}>
              <h2>Original Music</h2>
              <AccentLine />
              <p className='main-text'>
                Robbie has dedicated himself to nurturing his passion for songwriting 
                and releasing his own music for nearly 15 years. Occasionally known as "RX," 
                short for "Robbie Xmas," this nickname emerged during his days of performing 
                in high school bands and has since become a familiar part of his musical identity. 
                Throughout his musical journey, Robbie has produced two full-length albums, one 
                EP, and seven singles, drawing inspiration from timeless icons like James Taylor, 
                John Mayer, and George Harrison. You can discover his original music on all major 
                streaming platforms.
              </p>
              <Link href="https://open.spotify.com/artist/7067KOGZGX4Hyxhjy2g7WK" target="_blank">
                <button className={styles['accent-button']}>
                  LISTEN ON SPOTIFY
                </button>
              </Link>
              <Link href="https://music.apple.com/us/artist/rx/1358469798" target="_blank">
                <button className={styles['accent-button']}>
                  LISTEN ON APPLE MUSIC
                </button>
              </Link>
            </div>
            <Image className={styles['image']} src={originalMusic} />
          </div>
        </MaxWidthContainer>
        <AlbumCarousel />
      </div>
    </>
  )
}

export default OriginalMusic;