import styles from "@/styles/album.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faItunes } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Album = ({album}) => {
  const getSongCountString = () => {
    if (Number(album.songCount) <= 1) {
      return `${album.songCount} song`;
    }

    return `${album.songCount} songs`;
  }

  return (
    <div className={styles['album-card']}>
      <Image className={styles['album-cover']} src={album.imageSrc} width={500} height={500} />
      <div className={styles['album-card-content']}>
        <h4>{album.title}</h4>
        <p>{`${album.year} | ${album.type} | ${getSongCountString()}`}</p>
        <div className={styles['listen-icons']}>
          <Link href={album.spotifyUrl || ""} target="_blank">
            <FontAwesomeIcon className={styles['icon']} icon={faSpotify} />
          </Link>
          <Link href={album.appleMusicUrl || ""} target="_blank">
            <FontAwesomeIcon className={styles['icon']} icon={faItunes} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Album;