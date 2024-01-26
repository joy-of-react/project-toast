import React from "react";

import Button from "../Button";

import RadioButton from "../RadioButton/RadioButton";
import Toast from "../Toast/Toast";
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");

  const [selectedVariant, setSelectedVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );

  const [toasts, setToasts] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newToasts = [
      ...toasts,
      { id: crypto.randomUUID(), message: message, variant: selectedVariant },
    ];
    setToasts(newToasts);
    setMessage("");
    setSelectedVariant(VARIANT_OPTIONS[0]);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
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
