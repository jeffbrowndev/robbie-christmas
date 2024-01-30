import styles from "@/styles/songList.module.scss";

const Song = ({ song, addToPlaylist }) => {
  return (
    <div className={styles['song']}>
      <div className={styles['playlist-column']}>
        <input defaultChecked={song.playlist} type='checkbox' onChange={(e) => addToPlaylist(song.index, e.currentTarget.checked)} />
      </div>
      <p className={styles['artist-column']}>{song.artist}</p>
      <p className={styles['title-column']}>{song.title}</p>
      <p className={styles['genre-column']}>{song.genre}</p>
      <p className={styles['audio-column']}></p>
    </div>
  )
}

export default Song;