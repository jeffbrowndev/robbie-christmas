import styles from "@/styles/accentButton.module.scss";

const AccentButton = ({ text, action }) => {
  return (
    <button onClick={action} className={styles['accent-button']}>
      {text}
    </button>
  )
}

export default AccentButton;