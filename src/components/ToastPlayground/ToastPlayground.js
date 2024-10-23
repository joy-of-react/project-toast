import React from "react";

import Button from "../Button";
import Toast from "../Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  // create state for message textarea
  const [message, setMessage] = React.useState("");
  // create state for variant radiobuttons
  const [variantType, setVariantType] = React.useState("");
  // create state for opening and closing Toast
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isOpen && (
        <Toast handleDismiss={() => setIsOpen(false)} variant={variantType}>
          {message}
        </Toast>
      )}

      {/**
       * Message textarea content here
       */}
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
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        {/**
         * Variant radiobutton content here
         */}
        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => (
              <div key={variant}>
                <label htmlFor={`variant-${variant}`}>
                  <input
                    type="radio"
                    name="variant"
                    id={`variant-${variant}`}
                    value={variant}
                    checked={variant === variantType}
                    onChange={(event) => {
                      setVariantType(event.target.value);
                    }}
                  />
                  {variant}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => setIsOpen(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
