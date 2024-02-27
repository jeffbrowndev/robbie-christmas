import MaxWidthContainer from "../layouts/MaxWidthContainer"
import styles from "@/styles/partners.module.scss";
import Link from "next/link";

export const Partners = () => {
  return (
    <MaxWidthContainer>
      <div className={styles['partners-container']}>
        <h3>Partners & Vendors</h3>
        <div className={styles['partners']}>
          <div className={styles['partner-category']}>
            <h4>Wedding Planners</h4>
            <ul>
              <Link target="_blank" href='https://www.newcreationsweddings.com/'><li>New Creations</li></Link>
              <Link target="_blank" href='https://pinkblossomevents.com/'><li>Pink Blossom Events</li></Link>
              <Link target="_blank" href='https://weddingswithwendy.com/'><li>Weddings with Wendy</li></Link>
              <Link target="_blank" href='https://rentwander.com/'><li>Wander Design + Rentals</li></Link>
            </ul>
          </div>
          <div className={styles['partner-category']}>
            <h4>Photography</h4>
            <ul>
              <Link target="_blank" href='https://kellylemonphotography.com/'><li>Kelly Lemon Photography</li></Link>
              <Link target="_blank" href='https://www.heidileonardphotography.com/'><li>Heidi Leonard Photography</li></Link>
              <Link target="_blank" href='https://brynnakathleenphotography.com/'><li>Brynna Kathleen Photography</li></Link>
              <Link target="_blank" href='https://www.alantephotography.com/'><li>Alante Photography</li></Link>
            </ul>
          </div>
          <div className={styles['partner-category']}>
            <h4>Catering</h4>
            <ul>
              <Link target="_blank" href='https://www.lisaduparcatering.com/'><li>Lisa Dupar Catering</li></Link>
              <Link target="_blank" href='https://www.honeycrumb.com/'><li>Honey Crumb Cake Studio</li></Link>
              <Link target="_blank" href='https://aplatinumevent.com/'><li>A Platinum Event Catering</li></Link>
              <Link target="_blank" href='https://flourlanebakeshop.com/'><li>Flour Lane Bake Shop</li></Link>
            </ul>
          </div>
          <div className={styles['partner-category']}>
            <h4>Venues</h4>
            <ul>
              <Link target="_blank" href='https://www.jmcellars.com/'><li>JM Cellars</li></Link>
              <Link target="_blank" href='https://www.willowslodge.com/'><li>Willows Lodge</li></Link>
              <Link target="_blank" href='https://www.thelodgeatstedward.com/'><li>The Lodge at St. Edward</li></Link>
              <Link target="_blank" href='https://newcastlegolf.com/weddings/'><li>The Golf Club at Newcastle</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  )
}

export default Partners;