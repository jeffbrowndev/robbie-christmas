import { DataContext } from "@/context/DataContext";
import { useContext, useState, useEffect } from "react";
import Event from "@/components/common/Event";
import styles from "@/styles/calendar.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";

const Calendar = () => {
  const { events } = useContext(DataContext);
  const [visibleEvents, setVisibleEvents] = useState(events);

  useEffect(() => {
    setVisibleEvents(events.slice(0, 5));
  }, [])

  const showMore = () => {
    setVisibleEvents(events.slice(0, visibleEvents.length + 5));
  }

  const showLess = () => {
    if (visibleEvents >= 10) {
      setVisibleEvents(events.slice(0, 5));
    }
    else {
      setVisibleEvents(events.slice(0, visibleEvents.length - 5));
    }
  }

  return (
    <MaxWidthContainer>
      <div className={styles['calendar']} id="calendar">
        <div className={styles['events']}>
          {visibleEvents.map((data, index) => <Event data={data} key={index} />)}
        </div>
        <div className={styles['button-container']}>
        {visibleEvents.length <= events.length && 
          <button onClick={() => showMore()} className={styles['accent-button']}>
            SHOW MORE
          </button>}
        {visibleEvents.length > 5 && 
          <button onClick={() => showLess()} className={styles['accent-button']}>
            SHOW LESS
          </button>}
        </div>
      </div>
    </MaxWidthContainer>
  )
}

export default Calendar;