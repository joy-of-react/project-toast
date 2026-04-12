import React from "react";

import Button from "../Button";
import Toast from "../Toast"

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState('')
  const [showToast, setShowToast] = React.useState(false)
  const [currentOption, setCurrentOption] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([])

  function addToast() {
    const arr = [...toasts]
    arr.push({
      id: crypto.randomUUID(),
      theme: currentOption,
      content: message,
    })
    setToasts(arr)
  }

  function dismissToast(id) {
    const arr = [...toasts].filter((item) => item.id !== id).map((item, index) => ({
      ...item,
      id: index
    }))
    setToasts(arr)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {
        toasts.map((item, index) => (<Toast key={item.id} dismissToast={dismissToast} { ...item }/>))
      }

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
            <textarea id="message" className={styles.messageInput} value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {
              VARIANT_OPTIONS.map((item, index) => (
                <label htmlFor={item}>
                  <input
                    key={item}
                    id={item}
                    type="radio"
                    name={item}
                    value={item}
                    checked={currentOption === item}
                    onChange={() => setCurrentOption(item)}
                  />
                  {item}
                </label>
              ))
            }
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => addToast()}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
