import React from "react";

import Button from "../Button";

import RadioButton from "../RadioButton/RadioButton";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastPlayground() {
  const {
    message,
    selectedVariant,
    toasts,
    setMessage,
    setSelectedVariant,
    handleDismiss,
    handleSubmit,
    VARIANT_OPTIONS,
  } = React.useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toasts={toasts} handleDismiss={handleDismiss} />
      <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
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
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          {VARIANT_OPTIONS &&
            VARIANT_OPTIONS.length > 0 &&
            VARIANT_OPTIONS.map((variant) => (
              <RadioButton
                key={variant}
                variant={variant}
                checked={variant === selectedVariant}
                onChange={(event) => setSelectedVariant(event.target.value)}
              />
            ))}
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
