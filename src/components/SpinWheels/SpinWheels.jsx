import React from "react";
import styles from "./SpinWheels.module.css";

function SpinWheels() {
  return (
    <div>
      <ul className={styles.circle}>
        <li>
          <div className={styles.text}>1</div>
        </li>
        <li>
          <div className={styles.text}>2</div>
        </li>
        <li>
          <div className={styles.text}>3</div>
        </li>
        <li>
          <div className={styles.text}>4</div>
        </li>
        <li>
          <div className={styles.text}>5</div>
        </li>
        <li>
          <div className={styles.text}>6</div>
        </li>
        <li>
          <div className={styles.text}>7</div>
        </li>
        <li>
          <div className={styles.text}>8</div>
        </li>
        <li>
          <div className={styles.text}>9</div>
        </li>
        <li>
          <div className={styles.text}>10</div>
        </li>
        <li>
          <div className={styles.text}>11</div>
        </li>
        <li>
          <div className={styles.text}>12</div>
        </li>
      </ul>
    </div>
  );
}

export default SpinWheels;
