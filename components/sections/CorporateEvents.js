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
      <div className={styles['corporate-content']}>
        <Image className={styles['image']} src={corporateMain} />
        <div className={styles['main-content']}>
          <h2>Corporate Events</h2>
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
      </div>
      <Clients />
    </MaxWidthContainer>
  );
}

export default CorporateEvents;