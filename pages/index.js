import NavBar from "@/components/navigation/NavBar";
import Hero from "../components/sections/Hero";
import Head from "next/head";
import { DataContext } from "../context/DataContext";
import Testimonials from "@/components/sections/Testimonials";
import LineSeparator from "@/components/common/LineSeparator";
import Listen from "@/components/sections/Listen";
import LiveMusic from "@/components/sections/LiveMusic";
import Weddings from "@/components/sections/Weddings";
import CorporateEvents from "@/components/sections/CorporateEvents";
import Calendar from "@/components/sections/Calendar";
import { DateTime } from "luxon";
import SongList from "@/components/sections/SongList";
import Contact from "@/components/sections/Contact";
import OriginalMusic from "@/components/sections/OriginalMusic";

const getEventLogo = (summary) => {
  if (summary.includes('Willows Lodge'))
    return "/images/event-logos/willows-lodge.png";
  if (summary.includes('The Cottage'))
    return "/images/event-logos/the-cottage.png";
  if (summary.includes('The Lodge'))
    return "/images/event-logos/the-lodge.png";

  return "/images/event-logos/rx.png"; 
}

const getEvents = async () => {
  const apiKey = process.env.API_KEY;
  const id = process.env.CALENDAR_ID;
  const now = new Date().toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/${id}/events?key=${apiKey}&timeMin=${now}&singleEvents=true&orderBy=startTime`;
  const res = await fetch(url);
  const data = await res.json();

  return data.items.map(e => {
    return {
      summary: e.summary,
      date: DateTime.fromISO(e.start.dateTime, {zone: "PST"}).toFormat('DDDD'),
      start: DateTime.fromISO(e.start.dateTime, {zone: "PST"}).toFormat('t'),
      end: DateTime.fromISO(e.end.dateTime, {zone: "PST"}).toFormat('t'),
      description: e.description || null,
      logo: getEventLogo(e.summary)
    };
  });
}

const getSongs = async () => {
  const apiKey = process.env.API_KEY;
  const id = process.env.SHEETS_ID;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/Sheet1!A2:Z?key=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();

  return data.values.map((s, i) => {
    return {
      index: i,
      artist: s[0],
      title: s[1],
      genre: s[2],
      playlist: false
    };
  });
}

export const getStaticProps = async () => {
  return {
    props: {
      testimonials: [
        {
          name: "Ashley T",
          text: "We made the best choice hiring Robbie as the musician for our wedding! We have seen him play at various wineries and events over the years and knew right when we got engaged that we needed him to play at our wedding. We had him play during our ceremony, cocktail hour, dinner, and 'first' dances, and couldn't have been happier. Incredible voice and talent aside (seriously - he is amazing), he was such a pleasure to work with."
        },
        {
          name: "Diana J",
          text: "I am so glad we found Robbie, and that he was available to play our wedding. He was very responsive and super patient with questions and requests, but more importantly, he is a very talented artist and our guests absolutely loved him. He played the music for our wedding, cocktail hour, and much of dinner before we switched over to a DJ, and it was absolutely perfect",
        },
        {
          name: "Kylie H",
          text: "I don't have enough words to explain how wonderful Robbie is! He sang at our wedding ceremony, as well as the reception, and he was one of my favorite parts of our day! He has such a beautiful voice, and gives you pages and pages of songs to pick from. He works with couples beforehand to choose song/music styles for your event, and was even willing to learn new songs that weren't on his list."
        },
        {
          name: "Jennifer D",
          text: "Robbie was AMAZING!! Thanks so much for making our wedding magical."
        },
      ],
      videos: [
        {
          title: "Robbie Christmas - After The Storm [Live]",
          src: "https://www.youtube.com/watch?v=0c1rGBiH_J8&ab_channel=RobbieChristmas",
          thumbnail: "/images/thumbnails/after-the-storm.jpg"
        },
        {
          title: "Superstar - Robbie Christmas & Company Live [4K]",
          src: "https://www.youtube.com/watch?v=dUj4-hqkdR4&ab_channel=RobbieChristmas",
          thumbnail: "/images/thumbnails/superstar.jpg"
        },
        {
          title: "Taking Too Long - Robbie Christmas & Company Live [4K]",
          src: "https://www.youtube.com/watch?v=Sr6rHW50K-E&ab_channel=RobbieChristmas",
          thumbnail: "/images/thumbnails/taking-too-long.jpg"
        },
        {
          title: "Official National Anthem Footage [Sang by Robbie Christmas]",
          src: "https://www.youtube.com/watch?v=WxEludZzP54&t=67s&ab_channel=RobbieChristmas",
          thumbnail: "/images/thumbnails/national-anthem.jpg"
        },
      ],
      audio: [
        {
          title: "Windows Are Rolled Down",
          artist: "Amos Lee",
          src: "/audio/windows-are-rolled-down.mp3"
        },
        {
          title: "God Only Knows",
          artist: "The Beach Boys",
          src: "/audio/god-only-knows.mp3"
        },
        {
          title: "Father and Son",
          artist: "Cat Stevens",
          src: "/audio/father-and-son.mp3"
        },
        {
          title: "I Can't Tell You Why",
          artist: "The Eagles",
          src: "/audio/i-cant-tell-you-why.mp3"
        },
        {
          title: "Change The World",
          artist: "Eric Clapton",
          src: "/audio/change-the-world.mp3"
        },
        {
          title: "Layla",
          artist: "Eric Clapton",
          src: "/audio/layla.wav"
        },
        {
          title: "Thinkin Bout You",
          artist: "Frank Ocean",
          src: "/audio/thinkin-bout-you.mp3"
        },
        {
          title: "If Not for You",
          artist: "George Harrison",
          src: "/audio/if-not-for-you.mp3"
        },
        {
          title: "Operator",
          artist: "Jim Croce",
          src: "/audio/operator.mp3"
        },
        {
          title: "Isn't She Lovely",
          artist: "Stevie Wonder",
          src: "/audio/isnt-she-lovely.mp3"
        },
        {
          title: "Mad World",
          artist: "Tears for Fears",
          src: "/audio/mad-world.wav"
        },
        {
          title: "Everybody Wants To Rule The World",
          artist: "Tears for Fears",
          src: "/audio/everybody-wants-to-rule-the-world.mp3"
        },
      ],
      events: await getEvents(),
      songs: await getSongs(),
      albums: [
        {
          title: "Epilogue",
          year: "2020",
          type: "Album",
          songCount: "10",
          imageSrc: "/images/albums/epilogue.jpg",
          spotifyUrl: "https://open.spotify.com/album/3KIAzBtU9hBfc7Br3k1iae?si=luzrEqLlR9eWwu2agL-vow",
          appleMusicUrl: "https://music.apple.com/us/album/epilogue/1520346855",
        },
        {
          title: "Reckless",
          year: "2020",
          type: "Single",
          songCount: "1",
          imageSrc: "/images/albums/reckless.jpg",
          spotifyUrl: "https://open.spotify.com/album/6agBtAbscC0fWeRqb1EEg9?si=pbw8WqgJThiZHKw-wFB3TA",
          appleMusicUrl: "https://music.apple.com/us/album/reckless-feat-linzy-collins-single/1514718825",
        },
        {
          title: "Somewhere in the Quiet",
          year: "2019",
          type: "Single",
          songCount: "1",
          imageSrc: "/images/albums/somewhere-in-the-quiet.jpg",
          spotifyUrl: "https://open.spotify.com/album/1iubTLmMSBDU62NybufedI?si=uhaCNDPvThKOpl8GLmRzAA",
          appleMusicUrl: "https://music.apple.com/us/album/somewhere-in-the-quiet-single/1486032229",
        },
        {
          title: "Fade.",
          year: "2019",
          type: "Single",
          songCount: "1",
          imageSrc: "/images/albums/fade.jpg",
          spotifyUrl: "https://open.spotify.com/album/4fLVqXwkmdVg9MvQghLs09?si=3cbtSMMBQ1eZaZq-M8mXlg",
          appleMusicUrl: "https://music.apple.com/us/album/fade-single/1481019676",
        },
        {
          title: "Synthesize",
          year: "2019",
          type: "Single",
          songCount: "1",
          imageSrc: "/images/albums/synthesize.jpg",
          spotifyUrl: "https://open.spotify.com/album/109chd17oG02hWvl1EVIvc?si=BR5qRcBTQbGT2oiMei6APg",
          appleMusicUrl: "https://music.apple.com/us/album/synthesize-single/1473753474",
        },
        {
          title: "Who I Was",
          year: "2019",
          type: "Single",
          songCount: "1",
          imageSrc: "/images/albums/who-i-was.jpg",
          spotifyUrl: "https://open.spotify.com/album/3gHShRgYWzgdWKjJuYw82m?si=TC3NYcteQqqzwRAOEO3VKw",
          appleMusicUrl: "https://music.apple.com/us/album/who-i-was-single/1462963378",
        },
        {
          title: "Over The Moon",
          year: "2019",
          type: "Single",
          songCount: "1",
          imageSrc: "/images/albums/over-the-moon.jpg",
          spotifyUrl: "https://open.spotify.com/album/56X70bxZp76BBl83i3KAGT?si=yo2JFb_WRo25r67myo0sIg",
          appleMusicUrl: "https://music.apple.com/us/album/over-the-moon-single/1453649793",
        },
        {
          title: "Misery",
          year: "2019",
          type: "Single",
          songCount: "1",
          imageSrc: "/images/albums/misery.jpg",
          spotifyUrl: "https://open.spotify.com/album/5KVB2eGuW8bxlNfEsyfQ8P?si=b9veRNwPQEyo9paMe9RfSw",
          appleMusicUrl: "https://music.apple.com/us/album/misery-single/1448905728",
        },
        {
          title: "When I Finally Get Myself Together",
          year: "2017",
          type: "EP",
          songCount: "6",
          imageSrc: "/images/albums/when-i-finally-get-myself-together.jpg",
          spotifyUrl: "https://open.spotify.com/album/5YRifQFYCdAYbRlASuQ3Fg?si=AhJ3hEpKStSExpksQssjmw",
          appleMusicUrl: "https://music.apple.com/us/album/when-i-finally-get-myself-together/1447189536",
        },
        {
          title: "Few and Far Between",
          year: "2015",
          type: "EP",
          songCount: "5",
          imageSrc: "/images/albums/few-and-far-between.jpg",
          spotifyUrl: "https://open.spotify.com/album/2E1fo27Cpo8nbs1lZfCr2k?si=Eo12dDkZQhyXBhKgfIEGzQ",
          appleMusicUrl: "https://music.apple.com/us/album/far-and-few-between-ep/1446685544",
        },
      ]
    }
  }
}

export default function App(props) {
  return (
    <>
      <Head>
        <title>Robbie Christmas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta 
          name="description" 
          content="Robbie Christmas is a singer-songwriter and multi-instrumentalist based in Seattle, Washington. 
          He is best known for his skills in both acoustic and electric guitar, his familiar yet artful sound, and his rare, compelling vocals." />
        <meta name="keywords" content="wedding singer, wedding singer seattle, corporate musician, wedding musician, live music seattle" />
      </Head>
      <DataContext.Provider value={props}>
        <NavBar />
        <Hero />
        <Testimonials />
        <LineSeparator />
        <Listen />
        <LiveMusic />
        <Calendar />
        <Weddings />
        <CorporateEvents />
        <OriginalMusic />
        <SongList />
        <Contact />
      </DataContext.Provider>
    </>
  );
}