import { DataContext } from "@/context/DataContext";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import styles from "@/styles/songList.module.scss";
import { useContext, useState, useRef } from "react";
import Song from "../common/Song";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownAZ, faClose } from "@fortawesome/free-solid-svg-icons";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";


const SongList = () => {
  const { songs } = useContext(DataContext);
  const [allSongs, setAllSongs] = useState(songs);
  const [downloadPopup, showDownloadPopup] = useState(false);
  const [emptyPlaylistPopup, showEmptyPlaylistPopup] = useState(false);
  const name = useRef(null);
  
  // filters
  const [genre, setGenre] = useState("All genres");
  const [searchText, setSearchText] = useState('');
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

    song.playlist = !addToPlaylist;

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
    if (song.genre !== genre && genre !== "All genres") {
      return true;
    }
    if (playlistOnly && !song.playlist) {
      return true;
    }

    return false;
  }

  const showPopup = () => {
    const playlist = allSongs.filter(song => song.playlist);

    if (!playlist.length) {
      showEmptyPlaylistPopup(true);
    }
    else {
      showDownloadPopup(true);
    }
  }

  const downloadPlaylist = (e) => {
    e.preventDefault();
    const playlist = allSongs.filter(song => song.playlist);
    const pdf = new jsPDF();
    var img = new Image()
    img.src = 'images/rx-logo.png';
    pdf.addImage(img, 'png', 145, 3, 50, 8)
    pdf.text(`${name.current.value}'s playlist`, 14, 9);

    autoTable(pdf, {
      head: [["Artist", "Title", "Genre"]],
      body: playlist.map(song => [song.artist, song.title, song.genre])
    })

    pdf.save("playlist.pdf");

    showDownloadPopup(false);
  }

  const handlePlaylistOnly = (value) => value === "Playlist" ? setPlaylistOnly(true) : setPlaylistOnly(false);

  return (
    <MaxWidthContainer>
      {emptyPlaylistPopup &&
        <div className={styles['popup-overlay']}>
          <div className={styles['popup']}>
            <FontAwesomeIcon icon={faClose} className={styles['close']} onClick={() => showEmptyPlaylistPopup(false)} />
            <p>Playlist empty!</p>
            <button className={styles['accent-button']} onClick={() => showEmptyPlaylistPopup(false)}>
              CLOSE
            </button>
          </div>
        </div>}
      {downloadPopup &&
        <div className={styles['popup-overlay']}>
          <div className={styles['popup']}>
            <FontAwesomeIcon icon={faClose} className={styles['close']} onClick={() => showDownloadPopup(false)} />
            <p>Please enter your name to download a playlist:</p>
            <form onSubmit={(e) => downloadPlaylist(e)}>
              <input placeholder="Name" ref={name} required />
              <button type="submit" className={styles['accent-button']}>
                DOWNLOAD
              </button>
            </form>
          </div>
        </div>}
      <div id='song-list' className={styles['song-list']}>
        <div className={styles['song-list-header']}>
          <h2>Song List</h2>
          <p className="main-text">Explore over 600 popular songs or select your favorites to create and download a customized&nbsp;playlist.</p>
        </div>
        <div className={styles['song-list-container']}>
          <div className={styles['controls']}>
            <div className={styles['search']}>
              <div className={styles['input-row']}>
                <input onChange={(e) => setSearchText(e.currentTarget.value)} className={styles['search-box']} placeholder="Search by artist, song, or genre" />
                <div className={styles['controls-right']}>
                  <div className={styles['filters']}>
                    <select id={styles['genre-select']} defaultValue='All genres' onChange={(e) => setGenre(e.currentTarget.value)}>
                      <option value='All genres'>All genres</option>
                      {getGenres().map(genre => <option key={genre}>{genre}</option>)}
                    </select>
                    <select id={styles['song-select']} defaultValue='All songs' onChange={(e) => handlePlaylistOnly(e.currentTarget.value)}>
                      <option value='All songs'>All songs</option>
                      <option value='Playlist'>Playlist</option>
                    </select>
                  </div>
                  <button id={styles['download-desktop']} className={styles['accent-button']} onClick={() => showPopup()}>
                    DOWNLOAD PLAYLIST (.pdf)
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['song-list-head']}>
            <div className={styles['artist-column']}>
              <span>Artist</span>
              <FontAwesomeIcon className={styles['carat']} icon={faArrowDownAZ} onClick={() => sort("artist")} />
            </div>
            <div className={styles['title-column']}>
              <span>Title</span>
              <FontAwesomeIcon className={styles['carat']} icon={faArrowDownAZ} onClick={() => sort("title")} />
            </div>
            <div className={styles['genre-column']}>
              <span>Genre</span>
            </div>
          </div>
          <div className={styles['scrolling-song-list']}>{displaySongs()}</div>
        </div>
        <button id={styles['download-mobile']} className={styles['accent-button']} onClick={() => showPopup()}>
          DOWNLOAD PLAYLIST (.pdf)
        </button>
      </div>
    </MaxWidthContainer>
  )
}

export default SongList;