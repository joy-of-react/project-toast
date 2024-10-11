import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [selectedToastType, setSelectedToastType] = React.useState("error");

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleChangeType = (event) => {
    console.log(event.target.value);
    setSelectedToastType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!message || !selectedToastType) {
      // handle errors for no content
      return;
    }

    console.log({ message, selectedToastType });
  };
  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
        <p>{message}</p>
      </header>

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
              onChange={handleChangeMessage}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((toastType) => (
              <label htmlFor={`variant-${toastType}`} key={toastType}>
                <input
                  id={`variant-${toastType}`}
                  type="radio"
                  name="variant"
                  value={toastType}
                  onChange={handleChangeType}
                  checked={selectedToastType === toastType}
                />
                {toastType}
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
