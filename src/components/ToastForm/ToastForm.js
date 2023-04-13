import React from "react";
import Button from "../Button/Button";
import { ToastCtx } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastForm({ styles }) {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const { addToast } = React.useContext(ToastCtx);

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setVariant("notice");

    const newToast = {
      message: message,
      id: Math.random(),
      variant: variant,
    };

    addToast(newToast);
  }

  return (
    <form onSubmit={handleSubmit}>
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
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              value={message}
              className={styles.messageInput}
              minLength={1}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option, i) => (
              <label key={i} htmlFor={`variant-${option}`}>
                <input
                  key={i}
                  id={`variant-${option}`}
                  type="radio"
                  name={option}
                  value={option}
                  checked={variant === option}
                  onChange={(e) => setVariant(e.target.value)}
                />
                {option}
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

export default ToastForm;
