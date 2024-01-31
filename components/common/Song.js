import styles from "@/styles/songList.module.scss";

const Song = ({ song, addToPlaylist }) => {
  return (
    <div className={`${styles['song']} ${song.playlist ? styles['playlist'] : ''}`} onClick={() => addToPlaylist(song.index, song.playlist)}>
      <p className={styles['artist-column']}>{song.artist}</p>
      <p className={styles['title-column']}>{song.title}</p>
      <p className={styles['genre-column']}>{song.genre}</p>
      <p className={styles['audio-column']}></p>
    </div>
  )
}

export default Song;