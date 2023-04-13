import React from "react";

import styles from "./ToastPlayground.module.css";
import ToastForm from "../ToastForm/ToastForm";
import ToastShelf from "../ToastShelf/ToastShelf";
import ToastProvider from "../ToastProvider/ToastProvider";

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastProvider>
        <ToastShelf />

        <ToastForm styles={styles} />
      </ToastProvider>
    </div>
  );
}

export default ToastPlayground;
