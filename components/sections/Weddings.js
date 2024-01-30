import styles from "@/styles/weddings.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import Image from "next/image";
import AccentLine from "../common/AccentLine";
import AccentButton from "../common/AccentButton";
import weddingsMain from "@/public/images/weddings-main.jpg";
import WeddingService from "../common/WeddingService";

const weddingServices = [
  {
    title: "Rehearsal Dinners",
    description: "Enjoy live renditions of your chosen songs, creating an atmosphere of excitement and anticipation for you and your wedding party as you look forward to your big day."
  },
  {
    title: "Pre-Ceremony",
    description: "Set the tone for your wedding as guests arrive, mingle, and eagerly await your ceremony with a curated playlist of songs that reflects your love story."
  },
  {
    title: "Ceremony",
    description: "Walk down the aisle with heartfelt, live renditions of songs reflecting your journey and future to create a uniquely unforgettable moment, unmatched by any recording."
  },
  {
    title: "Cocktail Hour",
    description: "Create a warm and vibrant atmosphere for you and your community to enjoy the festivities against the backdrop of a thoughtfully selected set of songs performed live."
  },
  {
    title: "Dinner",
    description: "Relax and engage in deeper conversations over dinner. Accompanied by a selection of live music, carefully chosen to complement the dining experience."
  },
  {
    title: "First Dances",
    description: "Cherish emotional and intimate first dances with live renditions of songs that resonate with your love story, creating unforgettable memories for you and your guests."
  },
]

const Weddings = () => {
  return (
    <MaxWidthContainer>
      <div id="weddings" className={styles['weddings-content']}>
        <div className={styles['main-content']}>
          <h2>Weddings</h2>
          <AccentLine />
          <p className='main-text'>
            With over 15 years of experience in the music industry, Robbie Christmas
            has not only garnered an ardent following in the Pacific Northwest but has also 
            established an exceptional connection with engaged couples seeking the perfect
            musical ambiance for their weddings, engagements, and rehearsal dinners. His elegant 
            sound is a combination of lush, compelling vocal stylings with remarkable acoustic 
            guitar accompaniment. His professionalism and sensitivity make for a meaningful 
            collaborative experience when curating the song selections for your perfect day 
            handpicked from Robbie's extensive repertoire of over 600 cherished favorites.
          </p>
          <AccentButton text={"LISTEN"} dest='listen' />
          <AccentButton text={"VIEW SONG LIST"} dest='song-list' />
        </div>
        <Image className={styles['image']} src={weddingsMain} />
      </div>
      <div className={styles['wedding-services']}>
          {weddingServices.map(service => <WeddingService key={service.title} title={service.title} description={service.description} />)}
      </div>
    </MaxWidthContainer>
  );
}

export default Weddings;