import React, { useContext } from "react";
import { ToastContext } from "../ToastProvider";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { list } = useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
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
