import { DataContext } from "@/context/DataContext";
import { useContext, useState, useEffect, useRef } from "react";
import Event from "@/components/common/Event";
import styles from "@/styles/calendar.module.scss";
import MaxWidthContainer from "../layouts/MaxWidthContainer";

const Calendar = () => {
  const { events } = useContext(DataContext);
  const [visibleEvents, setVisibleEvents] = useState(null);
  const eventsRendered = useRef({hasRendered: false, showMoreWasClicked: false});

  useEffect(() => {
    setVisibleEvents(events.slice(0, 5));
  }, [])

  useEffect(() => {
    if (eventsRendered.current['hasRendered'] && eventsRendered.current['showMoreWasClicked']) {
      const allEvents = document.querySelectorAll(".event");

      const fifthToLast = allEvents.length - 5;

      allEvents[fifthToLast].scrollIntoView();
    }
    else {
      eventsRendered.current['hasRendered'] = true;
    }
  }, [visibleEvents])

  const showMore = () => {
    setVisibleEvents(events.slice(0, visibleEvents.length + 5));

    if (!eventsRendered.current['showMoreWasClicked']) {
      eventsRendered.current['showMoreWasClicked'] = true;
    }
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
      <div className={styles['calendar']} id="events">
        <p className={styles['no-performances']}>No Performances from April 23rd to May 29th</p>
        <div className={styles['events']}>
          {visibleEvents && visibleEvents.map((data, index) => <Event data={data} key={index} />)}
        </div>
        <div className={styles['button-container']}>
        {visibleEvents && visibleEvents.length <= events.length && 
          <button onClick={() => showMore()} className={styles['accent-button']}>
            SHOW MORE
          </button>}
        {visibleEvents && visibleEvents.length > 5 && 
          <button onClick={() => showLess()} className={styles['accent-button']}>
            SHOW LESS
          </button>}
        </div>
      </div>
    </MaxWidthContainer>
  )
}

export default Calendar;