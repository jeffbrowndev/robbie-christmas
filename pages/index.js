import NavBar from "@/components/navigation/NavBar";
import Hero from "../components/sections/Hero";
import Head from "next/head";
import { Context } from "../context/Context";
import Testimonials from "@/components/sections/Testimonials";
import LineSeparator from "@/components/common/LineSeparator";
import Listen from "@/components/sections/Listen";

export const getStaticProps = () => {
  return {
    props: {
      testimonials: [{
          name: "Diana J",
          text: "I am so glad we found Robbie, and that he was available to play our wedding. He was very responsive and super patient with questions and requests, but more importantly, he is a very talented artist and our guests absolutely loved him. He played the music for our wedding, cocktail hour, and much of dinner before we switched over to a DJ, and it was absolutely perfect",
        },
        {
          name: "Jennifer D",
          text: "Robbie was AMAZING!! Thanks so much for making our wedding magical."
        },
        {
          name: "Ashley T",
          text: "We made the best choice hiring Robbie as the musician for our wedding! We have seen him play at various wineries and events over the years and knew right when we got engaged that we needed him to play at our wedding. We had him play during our ceremony, cocktail hour, dinner, and 'first' dances, and couldn't have been happier. Incredible voice and talent aside (seriously - he is amazing), he was such a pleasure to work with."
        },
        {
          name: "Kylie H",
          text: "I don't have enough words to explain how wonderful Robbie is! He sang at our wedding ceremony, as well as the reception, and he was one of my favorite parts of our day! He has such a beautiful voice, and gives you pages and pages of songs to pick from. He works with couples beforehand to choose song/music styles for your event, and was even willing to learn new songs that weren't on his list."
        }
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
      </Head>
      <Context.Provider value={props}>
        <NavBar />
        <Hero />
        <Testimonials />
        <LineSeparator />
        <Listen />
      </Context.Provider>
    </>
  );
}