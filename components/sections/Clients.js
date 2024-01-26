import styles from "@/styles/clients.module.scss";
import seahawks from "@/public/images/clients/seahawks.png";
import bensFund from "@/public/images/clients/bens-fund.png";
import microsoft from "@/public/images/clients/microsoft.png";
import boeing from "@/public/images/clients/boeing.png";
import brooks from "@/public/images/clients/brooks.png";
import chateauSteMichelle from "@/public/images/clients/chateau-ste-michelle.png";
import fremontAnimalHospital from "@/public/images/clients/fremont-animal-hospital.png";
import gatesFoundation from "@/public/images/clients/gates-foundation.png";
import johnHowieSteak from "@/public/images/clients/john-howie-steak.png";
import rosario from "@/public/images/clients/rosario.png";
import seattleArtMuseum from "@/public/images/clients/seattle-art-museum.png";
import seattleChildrens from "@/public/images/clients/seattle-childrens.png";
import theNoahCenter from "@/public/images/clients/the-noah-center.png";
import washingtonAthleticClub from "@/public/images/clients/washington-athletic-club.png";
import Image from "next/image";

const Clients = () => {
  return (
    <div className={styles['clients-container']}>
      <h3>Past Clients</h3>
      <div className={styles['clients']}>
        <Image className={styles['client']} src={seahawks} alt="seahawks" />
        <Image className={styles['client']} src={microsoft} alt="microsoft" />
        <Image className={styles['client']} src={brooks} alt="brooks" />
        <Image className={styles['client']} src={boeing} alt="boeing" />
        <Image className={styles['client']} src={seattleChildrens} alt="seattle childrens" />
        <Image className={styles['client']} src={gatesFoundation} alt="gates foundation" />
        <Image className={styles['client']} src={seattleArtMuseum} alt="seattle art museum" />
        <Image className={styles['client']} src={bensFund} alt="bens fund" />
        <Image className={styles['client']} src={johnHowieSteak} alt="john howie steak" />
        <Image className={styles['client']} src={chateauSteMichelle} alt="chataeu ste michelle" />
        <Image className={styles['client']} src={fremontAnimalHospital} alt="fremont animal hospital" />
        <Image className={styles['client']} src={rosario} alt="rosario" />
        <Image className={styles['client']} src={theNoahCenter} alt="the noah center" />
        <Image className={styles['client']} src={washingtonAthleticClub} alt="washinton athletic club" />
      </div>
    </div>
  )
}

export default Clients;