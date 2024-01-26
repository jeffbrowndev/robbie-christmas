import styles from "@/styles/weddings.module.scss";

const WeddingService = ({ title, description }) => {
  return (
    <div className={styles['wedding-service']}>
      <h3>{title}</h3>
      <p className="main-text">{description}</p>
    </div>
  )
}

export default WeddingService;