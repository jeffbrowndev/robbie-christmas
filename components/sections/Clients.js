import styles from "@/styles/clients.module.scss";
import Image from "next/image";

const Clients = ({ clients }) => {
  return (
    <div className={styles['clients-container']}>
      <h3>Past Clients</h3>
      <div className={styles['clients']}>
        {clients.map(client => <Image className={styles['client']} src={client.src} alt={client.alt} width={150} height={150} />)}
      </div>
    </div>
  )
}

export default Clients;