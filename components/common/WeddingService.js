import styles from "@/styles/weddings.module.scss";

const WeddingService = ({ title, description }) => {
  return (
    <div className={styles['wedding-service']}>
      <h2>{title}</h2>
      <p className="main-text">{description}</p>
    </div>
  )
}

export default WeddingService;