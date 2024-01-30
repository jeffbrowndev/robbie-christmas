import styles from "@/styles/corporate.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import Image from "next/image";
import AccentLine from "../common/AccentLine";
import AccentButton from "../common/AccentButton";
import corporateMain from "@/public/images/corporate-main.jpg";
import Clients from "./Clients";

const CorporateEvents = () => {
  return (
    <MaxWidthContainer>
      <div id="corporate-events" className={styles['corporate-content']}>
        <Image className={styles['image']} src={corporateMain} />
        <div className={styles['main-content']}>
          <h2>Corporate Events</h2>
          <AccentLine />
          <p className='main-text'>
            Over 15 years of experience performing has established Robbie Christmas 
            as a leading performer in the Pacific Northwest; earning him an ardent following; 
            cherished for his compelling voice and remarkable acoustic guitar accompaniment. 
            Enhance your corporate event with Robbie’s personalized touch, selecting from his extensive 
            600+ song collection to create a memorable, tailored soundtrack that your guests will remember.
          </p>
          <AccentButton text={"LISTEN"} dest='listen' />
          <AccentButton text={"VIEW SONG LIST"} dest='song-list' />
        </div>
      </div>
      <Clients />
    </MaxWidthContainer>
  );
}

export default CorporateEvents;