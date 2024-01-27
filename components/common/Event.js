import styles from "@/styles/calendar.module.scss";
import Image from "next/image";

export const Event = ({ data }) => {
  return (
    <div className={styles['event']}>
      <Image className={styles['logo']} src={data.logo} alt={data.summary} width={150} height={150} />
      <div className={styles['event-content-left']}>
        <h3>{data.summary}</h3>
        <p className={styles['event-info']}>{data.date}</p>
        <p id={styles['mobile-time']} className={styles['event-info']}>{data.start} - {data.end}</p>
      </div>
      <p id={styles['desktop-time']} className={styles['event-info']}>{data.start} - {data.end}</p>
    </div>
  )
}

export default Event;