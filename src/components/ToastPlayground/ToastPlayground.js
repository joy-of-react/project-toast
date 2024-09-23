import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
// import Toast from "../Toast";
import ToastShelf from "../ToastShelf";
import VisuallyHidden from "../VisuallyHidden";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [forceShow, setForceShow] = React.useState(false);
  const [toasts, setToasts] = React.useState([]);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {forceShow && (
        <VisuallyHidden forceShow={forceShow} setForceShow={setForceShow}>
          <ToastShelf toasts={toasts} />
        </VisuallyHidden>
      )}

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
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <label htmlFor="variant-notice">
              <input
                id="variant-notice"
                type="radio"
                name="variant"
                value="notice"
                checked={variant === "notice"}
                onChange={(event) => setVariant(event.target.value)}
              />
              notice
            </label>

            <label htmlFor="variant-warning">
              <input
                id="variant-warning"
                type="radio"
                name="variant"
                value="warning"
                checked={variant === "warning"}
                onChange={(event) => setVariant(event.target.value)}
              />
              warning
            </label>

            <label htmlFor="variant-success">
              <input
                id="variant-success"
                type="radio"
                name="variant"
                value="success"
                checked={variant === "success"}
                onChange={(event) => setVariant(event.target.value)}
              />
              success
            </label>

            <label htmlFor="variant-error">
              <input
                id="variant-error"
                type="radio"
                name="variant"
                value="error"
                checked={variant === "error"}
                onChange={(event) => setVariant(event.target.value)}
              />
              error
            </label>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button
              onClick={(event) => {
                const newToast = {
                  message: message,
                  variant: variant,
                  id: crypto.randomUUID(),
                };
                const nextToasts = [...toasts, newToast];
                setToasts(nextToasts);
                setForceShow(true);
                setMessage("");
                setVariant("notice");
              }}
            >
              {" "}
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
