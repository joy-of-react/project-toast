import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ list }) {
  return (
    <ol className={styles.wrapper}>
      {list.map((item) => {
        return (
          <li key={item.id} className={styles.toastWrapper}>
            <Toast {...item}></Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
