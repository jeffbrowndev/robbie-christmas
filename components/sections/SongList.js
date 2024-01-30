import { DataContext } from "@/context/DataContext";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import styles from "@/styles/songList.module.scss";
import { useContext, useState, useRef } from "react";
import Song from "../common/Song";
import AccentButton from "../common/AccentButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownAZ } from "@fortawesome/free-solid-svg-icons";

const SongList = () => {
  const { songs } = useContext(DataContext);
  const [allSongs, setAllSongs] = useState(songs);
  
  // filters
  const [genre, setGenre] = useState("All");
  const [searchText, setSearchText] = useState('');
  const [hasAudio, setHasAudio] = useState(false);
  const [playlistOnly, setPlaylistOnly] = useState(false);

  const sort = (type) => {
    const copy = [...allSongs];

    copy.sort((a, b) => a[type].localeCompare(b[type]));

    setAllSongs(copy);
  }

  const getGenres = () => {
    const genreSet = new Set();

    for (const s of songs) {
      genreSet.add(s.genre)
    }

    return Array.from(genreSet);
  }

  const addToPlaylist = (index, addToPlaylist) => {
    const copy = [...allSongs];
    const song = copy.find(song => song.index === index);

    song.playlist = addToPlaylist;

    setAllSongs(copy);
  };

  const displaySongs = () => {
    return allSongs.map(song => {
      if (!isFiltered(song)) {
        return <Song song={song} addToPlaylist={addToPlaylist} key={song.index} />
      }
    })
  }

  const isFiltered = (song) => {
    const songText = Object.values(song).join(' ').toLowerCase();

    if (!songText.includes(searchText.toLowerCase())) {
      return true;
    }
    if (song.genre !== genre && genre !== "All") {
      return true;
    }
    if (hasAudio && !song.audio) {
      return true;
    }
    if (playlistOnly && !song.playlist) {
      return true;
    }

    return false;
  }

  return (
    <MaxWidthContainer>
      <div id='song-list' className={styles['song-list']}>
        {/* <div className={styles['song-list-header']}>
          <h2>Song List</h2>
          <p className="main-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className={styles['song-list-container']}>
          <div className={styles['controls']}>
            <div className={styles['search']}>
            <h3>Search</h3>
              <div className={styles['input-row']}>
                <input onChange={(e) => setSearchText(e.currentTarget.value)} className={styles['search-box']} placeholder="Search by artist, song, or genre" />
                <div className={styles['controls-right']}>
                  <div className={styles['filters']}>
                    <div>
                      <input className={styles['checkbox']} type='checkbox' onChange={(e) => setPlaylistOnly(e.currentTarget.checked)} />
                      <label>Playlist only</label>
                    </div>
                    <div>
                      <input className={styles['checkbox']} type='checkbox' onChange={(e) => setHasAudio(e.currentTarget.checked)} />
                      <label>Has audio</label>
                    </div>
                  </div>
                  <select onChange={(e) => setGenre(e.currentTarget.value)}>
                    <option selected>All</option>
                    {getGenres().map(genre => <option>{genre}</option>)}
                </select>
                  <AccentButton text="DOWNLOAD PLAYLIST" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles['song-list-head']}>
              <div class={styles['playlist-column']}>
                <span>Playlist</span>
              </div>
              <div class={styles['artist-column']}>
                <span>Artist</span>
                <FontAwesomeIcon className={styles['carat']} icon={faArrowDownAZ} onClick={() => sort("artist")} />
              </div>
              <div class={styles['title-column']}>
                <span>Title</span>
                <FontAwesomeIcon className={styles['carat']} icon={faArrowDownAZ} onClick={() => sort("title")} />
              </div>
              <div class={styles['genre-column']}>
                <span>Genre</span>
              </div>
              <div class={styles['audio-column']}>
                <span>Audio</span>
              </div>
            </div>
          <div className={styles['scrolling-song-list']}>{displaySongs()}</div>
        </div> */}
      </div>
    </MaxWidthContainer>
  )
}

export default SongList;