import styles from "@/styles/maxWidthContainer.module.scss";

const MaxWidthContainer = ({ children }) => {
  return (
    <div className={styles['max-width-container']}>
      { children }
    </div>
  )
}

export default MaxWidthContainer;