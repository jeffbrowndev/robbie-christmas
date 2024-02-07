import styles from "@/styles/calendar.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Event = ({ data }) => {
  const [href, setHref] = useState("");

  useEffect(() => {
    const regex = /href="(.*)"/;
    const href = regex.exec(data.description);

    if (href) {
      setHref(href[1]);
    }
  }, []);

  return (
    <div className={styles['event']}>
      <Image className={styles['logo']} src={data.logo} alt={data.summary} width={150} height={150} />
      <div className={styles['event-content-left']}>
        <h3>{data.summary}</h3>
        <p className={styles['event-info']}>{data.date}<span id={styles['mobile-time']} className={styles['event-info']}>&nbsp;| {data.start} - {data.end}</span></p>
        
        {href && <a id={styles['mobile-event-link']} className={styles['event-link']} href={href} target="_blank">Visit website</a>}
      </div>
      <div className={styles['event-content-right']}>
        <p id={styles['desktop-time']} className={styles['event-info']}>{data.start} - {data.end}</p>
        {href && <a id={styles['desktop-event-link']} className={styles['event-link']} href={href} target="_blank">Visit website</a>}
      </div>
    </div>
  )
}

export default Event;