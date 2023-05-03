import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContext } from '../ToastProvider/';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import Toast from '../Toast';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const {
    playgroundSelectedOptions,
    setPlaygroundSelectedOptions,
    toastsInShelf,
    setToastsInShelf,
  } = React.useContext(ToastContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToast = {
      id: uuidv4(),
      message: playgroundSelectedOptions.message,
      variant: playgroundSelectedOptions.variant,
    };
    setToastsInShelf([...toastsInShelf, newToast]);
    setPlaygroundSelectedOptions({
      message: '',
      variant: 'notice',
    });
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf>
        {toastsInShelf.map((toast) => (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast
              message={toast.message}
              variant={toast.variant}
              onDismiss={() => {
                setToastsInShelf(
                  toastsInShelf.filter((t) => t.id !== toast.id)
                );
              }}
            />
          </li>
        ))}
      </ToastShelf>
      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
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
                value={playgroundSelectedOptions.message}
                onChange={(e) =>
                  setPlaygroundSelectedOptions({
                    ...playgroundSelectedOptions,
                    message: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            {VARIANT_OPTIONS.map((option) => (
              <div
                key={option}
                className={`${styles.inputWrapper} ${styles.radioWrapper}`}
              >
                <label htmlFor={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={playgroundSelectedOptions.variant === option}
                    onChange={(e) =>
                      setPlaygroundSelectedOptions({
                        ...playgroundSelectedOptions,
                        variant: e.target.value,
                      })
                    }
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
