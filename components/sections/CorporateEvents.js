import styles from "@/styles/corporate.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import Image from "next/image";
import AccentLine from "../common/AccentLine";
import AccentButton from "../common/AccentButton";
import corporateMain from "@/public/images/corporate-main.jpg";
import Clients from "./Clients";

const CorporateEvents = () => {
  return (
    <>
      <div className="fixed-background" id={styles['corporate-background']}>
        <MaxWidthContainer>
          <div id="corporate-events" className={styles['corporate-content']}>
            <Image className={styles['image']} src={corporateMain} />
            <div className={styles['main-content']}>
              <h2>Corporate Events</h2>
              <AccentLine />
              <p className='main-text'>
                Robbie Christmas is a seasoned acoustic singer-songwriter known for his pure voice, 
                masterful guitar playing and vast repertoire of popular music. Robbie has accrued 15+ 
                years of full-time music industry experience with an ardent following in the Pacific Northwest and beyond.
                Organizations of all sizes have enlisted Robbie to elevate their event with a musical backdrop curated 
                from his vast catalog of 600+ songs. Robbie’s client roster includes: Microsoft, Amazon.com, Boeing, 
                Seattle Seahawks, and many more. 
              </p>
              <AccentButton text={"LISTEN"} dest='listen' />
              <AccentButton text={"VIEW SONG LIST"} dest='song-list' />
            </div>
          </div>
        </MaxWidthContainer>
      </div>
      <MaxWidthContainer>
        <Clients />
      </MaxWidthContainer>
    </>
  );
}

export default CorporateEvents;