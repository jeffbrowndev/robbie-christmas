import styles from "@/styles/serviceCard.module.scss";
import Image from "next/image";

const ServiceCard = ({ text, image }) => {
  return (
    <div className={styles['service-card']}>
      <Image
        className={styles['service-card-image']}
        src={image}
        alt={text} />
      <p>{text}</p>
    </div>
  )
}

export default ServiceCard;