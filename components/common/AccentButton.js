import styles from "@/styles/accentButton.module.scss";

const AccentButton = ({ text }) => {
  return (
    <button className={styles['accent-button']}>
      {text}
    </button>
  )
}

export default AccentButton;