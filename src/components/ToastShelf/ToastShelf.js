import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { list } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {list.map(({ notice, message, ind }) => (
        <li className={styles.toastWrapper} key={`${notice} + ${ind}`}>
          <Toast variant={notice} ind={ind}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
