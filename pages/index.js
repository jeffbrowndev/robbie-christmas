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
import { createClient } from "contentful";

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
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_KEY,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });

  const testimonials = await client.getEntries({ content_type: 'testimonial'});
  const videos = await client.getEntries({ content_type: 'video'});
  const audio = await client.getEntries({ content_type: 'audio', order: 'fields.artist'});
  const albums = await client.getEntries({ content_type: 'originalAlbum', order: "-fields.year"});

  return {
    props: {
      testimonials: [...testimonials.items.map(testimonial => testimonial.fields)],
      videos: [...videos.items.map(video => {
        return {
          title: video.fields.title,
          src: video.fields.src,
          thumbnail: `https:${video.fields.thumbnail.fields.file.url}`
        }})],
      audio: [...audio.items.map(song => {
        return {
          title: song.fields.title,
          artist: song.fields.artist,
          src: `https:${song.fields.src.fields.file.url}`
        }})],
      albums: [...albums.items.map(album => {
        return {
          title: album.fields.title,
          year: album.fields.year,
          type: album.fields.type,
          songCount: album.fields.songCount,
          spotifyUrl: album.fields.spotifyUrl,
          appleMusicUrl: album.fields.appleMusicUrl,
          imageSrc: `https:${album.fields.imageSrc.fields.file.url}`
        }})],
      events: await getEvents(),
      songs: await getSongs(),
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