import { DataContext } from "@/context/DataContext";
import { useContext, useState, useEffect } from "react";
import Event from "@/components/common/Event";
import styles from "@/styles/calendar.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";
import AccentButton from "../common/AccentButton";

const Calendar = () => {
  const { events } = useContext(DataContext);
  const [visibleEvents, setVisibleEvents] = useState(events);

  useEffect(() => {
    setVisibleEvents(events.slice(0, 5));
  }, [])

  const showMore = () => {
    setVisibleEvents(events.slice(0, visibleEvents.length + 5));
  }

  return (
    <MaxWidthContainer>
      <div className={styles['calendar']} id="calendar">
        <h2>Calendar</h2>
        <div className={styles['events']}>
          {visibleEvents.map(data => <Event data={data} />)}
        </div>
        <div className={styles['button-container']}>
          <AccentButton className={styles['show-more']} text="SHOW MORE" action={showMore} />
        </div>
      </div>
    </MaxWidthContainer>
  )
}

export default Calendar;