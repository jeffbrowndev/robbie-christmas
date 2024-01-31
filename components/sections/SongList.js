import { DataContext } from "@/context/DataContext";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import styles from "@/styles/songList.module.scss";
import { useContext, useState } from "react";
import Song from "../common/Song";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownAZ } from "@fortawesome/free-solid-svg-icons";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";


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
      genreSet.add(s.genre.trim())
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

  const downloadPlaylist = () => {
    const pdf = new jsPDF();
    const playlist = allSongs.filter(song => song.playlist);

    pdf.text("Robbie Christmas Playlist", 14, 10);

    autoTable(pdf, {
      head: [["Artist", "Title", "Genre"]],
      body: playlist.map(song => [song.artist, song.title, song.genre])
    })

    pdf.save("playlist.pdf");
  }

  return (
    <MaxWidthContainer>
      <div id='song-list' className={styles['song-list']}>
        <div className={styles['song-list-header']}>
          <h2>Song List</h2>
          <p className="main-text">Explore over 600 popular songs or select your favorite songs to create and download a playlist.</p>
        </div>
        <div className={styles['song-list-container']}>
          <div className={styles['controls']}>
            <div className={styles['search']}>
            <h3>Search</h3>
              <div className={styles['input-row']}>
                <input onChange={(e) => setSearchText(e.currentTarget.value)} className={styles['search-box']} placeholder="Search by artist, song, or genre" />
                <div className={styles['controls-right']}>
                  <div className={styles['filters']}>
                    <input className={styles['checkbox']} type='checkbox' onChange={(e) => setPlaylistOnly(e.currentTarget.checked)} />
                    <label>Playlist only</label>
                  </div>
                  <button onClick={() => downloadPlaylist()} className={styles['accent-button']}>
                    DOWNLOAD PLAYLIST (.pdf)
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['song-list-head']}>
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
              <select onChange={(e) => setGenre(e.currentTarget.value)}>
                <option selected>All</option>
                {getGenres().map(genre => <option>{genre}</option>)}
              </select>
            </div>
          </div>
          <div className={styles['scrolling-song-list']}>{displaySongs()}</div>
        </div>
      </div>
    </MaxWidthContainer>
  )
}

export default SongList;