import { useState } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('notice');

  // const [showToastPreview, setShowToastPreview] = useState(false);
  const [toasts, setToasts] = useState([]);

  const addNewToast = (e) => {
    e.preventDefault();
    const newToast = {
      id: crypto.randomUUID(),
      message: message,
      variant: selectedVariant,
    };
    setToasts([...toasts, newToast]);
    setMessage('');
    setSelectedVariant('notice');
  };

  const closeToast = (toastId) => {
    const toastCopy = [...toasts];
    const toastIndex = toastCopy.findIndex((toast) => toast.id === toastId);
    toastCopy.splice(toastIndex, 1);
    setToasts(toastCopy);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} closeToast={closeToast} />
      {/* {showToastPreview && (
        <ToastShelf
          message={message}
          variant={selectedVariant}
          handleClose={() => setShowToastPreview(false)}
        />
      )} */}

      <form className={styles.controlsWrapper} onSubmit={addNewToast}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
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
            {VARIANT_OPTIONS.map((variant) => (
              <label htmlFor={`variant-${variant}`} key={variant}>
                <input
                  id={`variant-${variant}`}
                  type="radio"
                  name="variant"
                  value={variant}
                  onChange={(e) => setSelectedVariant(e.target.value)}
                  checked={selectedVariant === variant}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {/* <Button handleClick={() => setShowToastPreview(!showToastPreview)}> */}
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
