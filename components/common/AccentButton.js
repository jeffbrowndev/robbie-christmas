import styles from "@/styles/accentButton.module.scss";

const AccentButton = ({ text, dest }) => {
  
  const scroll = () => {
    const target = document.getElementById(dest);

    target.scrollIntoView();
  }

  return (
    <button onClick={() => scroll()} className={styles['accent-button']}>
      {text}
    </button>
  )
}

export default AccentButton;