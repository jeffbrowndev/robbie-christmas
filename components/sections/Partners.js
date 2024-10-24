import { DataContext } from "@/context/DataContext";
import MaxWidthContainer from "../layouts/MaxWidthContainer"
import styles from "@/styles/partners.module.scss";
import Link from "next/link";
import { useContext } from "react";

export const Partners = () => {
  const { partners } = useContext(DataContext);

  return (
    <MaxWidthContainer>
      <div className={styles['partners-container']}>
        <h3>Partners & Vendors</h3>
        <div className={styles['partners']}>
          <div className={styles['partner-category']}>
            <h4>Wedding Planners</h4>
            <ul>{partners.weddingPlanners.map(weddingPlanner => <Link target="_blank" href={weddingPlanner.url}><li>{weddingPlanner.name}</li></Link>)}</ul>
          </div>
          <div className={styles['partner-category']}>
            <h4>Photography</h4>
            <ul>{partners.photographers.map(photographer => <Link target="_blank" href={photographer.url}><li>{photographer.name}</li></Link>)}</ul>
          </div>
          <div className={styles['partner-category']}>
            <h4>Catering</h4>
            <ul>{partners.caterers.map(caterer => <Link target="_blank" href={caterer.url}><li>{caterer.name}</li></Link>)}</ul>
          </div>
          <div className={styles['partner-category']}>
            <h4>Venues</h4>
            <ul>{partners.venues.map(venue => <Link target="_blank" href={venue.url}><li>{venue.name}</li></Link>)}</ul>
          </div>
          <div className={styles['partner-category']}>
            <h4>DJ's</h4>
            <ul>{partners.djs.map(dj => <Link target="_blank" href={dj.url}><li>{dj.name}</li></Link>)}</ul>
          </div>
          <div className={styles['partner-category']}>
            <h4>Videography</h4>
            <ul>{partners.videographers.map(videographer => <Link target="_blank" href={videographer.url}><li>{videographer.name}</li></Link>)}</ul>
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  )
}

export default Partners;