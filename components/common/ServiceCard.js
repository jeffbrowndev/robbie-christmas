import styles from "@/styles/serviceCard.module.scss";
import Image from "next/image";

const ServiceCard = ({ text, image, dest }) => {

  const scroll = () => {    
    const target = document.getElementById(dest);

    target.scrollIntoView();
  }

  return (
    <div onClick={() => scroll()} className={styles['service-card']}>
      <Image
        className={styles['service-card-image']}
        src={image}
        alt={text} />
      <p>{text}</p>
    </div>
  )
}

export default ServiceCard;