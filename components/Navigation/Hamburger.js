import styles from "../../styles/hamburger.module.scss";

const Hamburger = ({ handleClick, active }) => {
  return (
    <>
      <div 
        onClick={ handleClick } 
        id={styles["icon-fixed"]} 
        className={active ? styles["active"] : ""}>
        <div id={styles["icon-container"]}>
          <div id={styles["hamburger"]}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div id={styles["cross"]}>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hamburger;