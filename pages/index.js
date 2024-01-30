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
      audio: s[3] || null,
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
          src: "https://www.youtube.com/watch?v=0c1rGBiH_J8&ab_channel=RobbieChristmas",
          thumbnail: "/images/thumbnails/after-the-storm.jpg"
        },
        {
          src: "https://www.youtube.com/watch?v=b2lK8KqgW6k&ab_channel=RobbieChristmas",
          thumbnail: "/images/thumbnails/runaway.jpg"
        },
        {
          src: "https://www.youtube.com/watch?v=Sr6rHW50K-E&ab_channel=RobbieChristmas",
          thumbnail: "/images/thumbnails/taking-too-long.jpg"
        },
        {
          src: "https://www.youtube.com/watch?v=_omAM4RG13o&ab_channel=RobbieChristmas",
          thumbnail: "/images/thumbnails/thinkin-bout-you.jpg"
        },
      ],
      audio: [
        {
          title: "Change The World",
          artist: "Eric Clapton",
          src: "/audio/change-the-world.mp3"
        },
        {
          title: "Everybody Wants To Rule The World",
          artist: "Tears for Fears",
          src: "/audio/everybody-wants-to-rule-the-world.mp3"
        },
        {
          title: "Father and Son",
          artist: "Cat Stevens",
          src: "/audio/father-and-son.mp3"
        },
        {
          title: "God Only Knows",
          artist: "The Beach Boys",
          src: "/audio/god-only-knows.mp3"
        },
        {
          title: "I Can't Tell You Why",
          artist: "The Eagles",
          src: "/audio/i-cant-tell-you-why.mp3"
        },
        {
          title: "If Not for You",
          artist: "George Harrison",
          src: "/audio/if-not-for-you.mp3"
        },
        {
          title: "Isn't She Lovely",
          artist: "Stevie Wonder",
          src: "/audio/isnt-she-lovely.mp3"
        },
        {
          title: "Layla",
          artist: "Eric Clapton",
          src: "/audio/layla.wav"
        },
        {
          title: "Mad World",
          artist: "Tears for Fears",
          src: "/audio/mad-world.wav"
        },
        {
          title: "Operator",
          artist: "Jim Croce",
          src: "/audio/operator.mp3"
        },
        {
          title: "Thinkin Bout You",
          artist: "Frank Ocean",
          src: "/audio/thinkin-bout-you.wav"
        },
        {
          title: "Windows Are Rolled Down",
          artist: "Amos Lee",
          src: "/audio/windows-are-rolled-down.mp3"
        },
      ],
      events: await getEvents(),
      songs: await getSongs()
    }
  }
}

export default function App(props) {
  return (
    <>
      <Head>
        <title>Robbie Christmas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DataContext.Provider value={props}>
        <NavBar />
        <Hero />
        <Testimonials />
        <LineSeparator />
        <Listen />
        <LineSeparator />
        <LiveMusic />
        <Calendar />
        <LineSeparator />
        <Weddings />
        <LineSeparator />
        <CorporateEvents />
        <LineSeparator />
        <SongList />
        <Contact />
      </DataContext.Provider>
    </>
  );
}