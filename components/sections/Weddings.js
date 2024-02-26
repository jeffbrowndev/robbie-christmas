import styles from "@/styles/weddings.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import Image from "next/image";
import AccentLine from "../common/AccentLine";
import AccentButton from "../common/AccentButton";
import WeddingService from "../common/WeddingService";
import { useContext } from "react";
import { DataContext } from "@/context/DataContext";

const Weddings = () => {
  const { weddingsContent } = useContext(DataContext);

  const backgroundStyles = {
    background: `url(${weddingsContent.background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="fixed-background" style={backgroundStyles}>
        <MaxWidthContainer>
          <div id="weddings" className={styles['weddings-content']}>
            <div className={styles['main-content']}>
              <h2>{weddingsContent.sectionName}</h2>
              <AccentLine />
              <p className='main-text'>{weddingsContent.description}</p>
              <AccentButton text={"LISTEN"} dest='listen' />
              <AccentButton text={"VIEW SONG LIST"} dest='song-list' />
            </div>
            <Image className={styles['image']} src={weddingsContent.mainImage} width={1000} height={1000} />
          </div>
        </MaxWidthContainer>
      </div>
      <MaxWidthContainer>
        <div className={styles['wedding-services']}>
          {weddingsContent.weddingServices.map(service => <WeddingService key={service.serviceName} title={service.serviceName} description={service.serviceDescription} />)}
        </div>
      </MaxWidthContainer>
    </>
  );
}

export default Weddings;