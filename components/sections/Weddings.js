import styles from "@/styles/weddings.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import Image from "next/image";
import AccentLine from "../common/AccentLine";
import AccentButton from "../common/AccentButton";
import weddingsMain from "@/public/images/weddings-main.jpg";
import WeddingService from "../common/WeddingService";

const weddingServices = [
  {
    title: "Rehearsal Dinner",
    description: "Enjoy your favorite songs performed live for loved ones in anticipation of your big day."
  },
  {
    title: "Pre-Ceremony",
    description: "Set the mood as guests arrive and mingle with live music that reflects your love story."
  },
  {
    title: "Ceremony",
    description: "Walk down the aisle with heartfelt live music reflecting your own unforgettable moment."
  },
  {
    title: "Cocktail Hour",
    description: "Imagine your favorite music performed live while guests sip libations and socialize."
  },
  {
    title: "Dinner",
    description: "Enjoy a backdrop of live music personalized to complement your dining experience."
  },
  {
    title: "First Dances",
    description: "Memorialize your first dances with intimate live music to manifest your love story."
  },
]

const Weddings = () => {
  return (
    <>
      <div className="fixed-background" id={styles['weddings-background']}>
        <MaxWidthContainer>
          <div id="weddings" className={styles['weddings-content']}>
            <div className={styles['main-content']}>
              <h2>Weddings</h2>
              <AccentLine />
              <p className='main-text'>
                Robbie Christmas is a seasoned acoustic singer-songwriter known for his pure voice, 
                masterful guitar playing and vast repertoire of popular music. Robbie has accrued 15+ 
                years of full-time music industry experience with an ardent following in the Pacific 
                Northwest and beyond. Hundreds of couples have selected Robbie to elevate their wedding 
                events with the perfect soundtrack curated from his catalog of 600+ songs.
              </p>
              <AccentButton text={"LISTEN"} dest='listen' />
              <AccentButton text={"VIEW SONG LIST"} dest='song-list' />
            </div>
            <Image className={styles['image']} src={weddingsMain} />
          </div>
        </MaxWidthContainer>
      </div>
      <MaxWidthContainer>
        <div className={styles['wedding-services']}>
          {weddingServices.map(service => <WeddingService key={service.title} title={service.title} description={service.description} />)}
        </div>
      </MaxWidthContainer>
    </>
  );
}

export default Weddings;