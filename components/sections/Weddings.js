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
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title: "Pre-Ceremony",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title: "Ceremony",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title: "Cocktail Hour",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title: "Dinner",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    title: "First Dances",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
]

const Weddings = () => {
  return (
    <MaxWidthContainer>
      <div className={styles['weddings-content']}>
        <div className={styles['main-content']}>
          <h2>Weddings</h2>
          <AccentLine />
          <p className='main-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.
          </p>
          <AccentButton text={"LISTEN"} />
          <AccentButton text={"VIEW SONG LIST"} />
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