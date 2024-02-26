import styles from "@/styles/corporate.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import Image from "next/image";
import AccentLine from "../common/AccentLine";
import AccentButton from "../common/AccentButton";
import Clients from "./Clients";
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";

const CorporateEvents = () => {
  const { corporateContent } = useContext(DataContext);

  const backgroundStyles = {
    background: `url(${corporateContent.background})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="fixed-background" style={backgroundStyles}>
        <MaxWidthContainer>
          <div id="corporate-events" className={styles['corporate-content']}>
            <Image className={styles['image']} src={corporateContent.mainImage} width={1000} height={1000} />
            <div className={styles['main-content']}>
              <h2>{corporateContent.sectionName}</h2>
              <AccentLine />
              <p className='main-text'>{corporateContent.description}</p>
              <AccentButton text={"LISTEN"} dest='listen' />
              <AccentButton text={"VIEW SONG LIST"} dest='song-list' />
            </div>
          </div>
        </MaxWidthContainer>
      </div>
      <MaxWidthContainer>
        <Clients clients={corporateContent.clients} />
      </MaxWidthContainer>
    </>
  );
}

export default CorporateEvents;