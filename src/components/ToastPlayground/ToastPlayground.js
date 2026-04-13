import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const {
    message,
    setMessage,
    currentOption,
    setCurrentOption,
    toasts,
    setToasts,
    addToast,
    dismissToast,
  } = React.useContext(ToastContext);

  return (
    <form className={styles.wrapper} onSubmit={(e) => addToast(e)}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {<ToastShelf toasts={toasts} dismissToast={dismissToast} />}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((item, index) => (
              <label key={item} htmlFor={item}>
                <input
                  id={item}
                  type="radio"
                  name={item}
                  value={item}
                  checked={currentOption === item}
                  onChange={() => setCurrentOption(item)}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
