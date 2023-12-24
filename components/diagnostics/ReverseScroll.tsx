import React from "react";
import styles from "./style.module.css"; // Importing the CSS file

const ReverseScroll = () => {
  return (
    <div className={styles.columns}>
      <div className={`${styles.column} ${styles["column-reverse"]}`}>
        <img src="https://tympanus.net/Development/ColumnScroll/2.3ff1fdb6.jpg" />
        <img src="https://tympanus.net/Development/ColumnScroll/2.3ff1fdb6.jpg" />
        <img src="https://tympanus.net/Development/ColumnScroll/2.3ff1fdb6.jpg" />
      </div>
      <div className={styles.column}>
        <img src="https://tympanus.net/Development/ColumnScroll/2.3ff1fdb6.jpg" height="600" width="800px" />
        <img src="https://tympanus.net/Development/ColumnScroll/2.3ff1fdb6.jpg" height="600" width="800px" />
        <img src="https://tympanus.net/Development/ColumnScroll/2.3ff1fdb6.jpg" height="600" width="800px" />
      </div>{" "}
      <div className={`${styles.column} ${styles["column-reverse"]}`}>
        <img src="https://tympanus.net/Development/ColumnScroll/2.3ff1fdb6.jpg" />
        <img src="https://tympanus.net/Development/ColumnScroll/2.3ff1fdb6.jpg" />
        <img src="https://tympanus.net/Development/ColumnScroll/2.3ff1fdb6.jpg" />
        <img src="https://tympanus.net/Development/ColumnScroll/2.3ff1fdb6.jpg" />
      </div>
    </div>
  );
};

export default ReverseScroll;
