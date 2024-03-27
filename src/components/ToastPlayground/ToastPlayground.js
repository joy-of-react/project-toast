import React, {useState} from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from "../ToastShelf";


const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = useState([]);

  const visibleToasts = toasts.filter(toast => toast.shown === true);

  function handleDismiss(toastID) {
    const selectedToast = toasts.find(toast => toast.id === toastID);
    selectedToast.shown = false
    setToasts([
        ...toasts,
        selectedToast
    ])
  }

  function handleToastSubmit(e) {
    e.preventDefault();

    setToasts([
      ...toasts,
      {
        id: crypto.randomUUID(),
        message: e.target.message.value,
        variant: e.target.variant.value,
        shown: true
      }
    ]);

    setMessage('');
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={visibleToasts} handleDismiss={handleDismiss}/>

      <form className={styles.controlsWrapper} onSubmit={handleToastSubmit}>
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
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
              {VARIANT_OPTIONS.map(option => (
                <label key={option} htmlFor={`variant-${option}`}>
                  <input
                      type={'radio'}
                      name={'variant'}
                      id={`variant-${option}`}
                      value={option}
                      checked={option === variant}
                      onChange={(e) => setVariant(e.target.value)}
                  />
                  {option}
              </label>
              ))}
        </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
