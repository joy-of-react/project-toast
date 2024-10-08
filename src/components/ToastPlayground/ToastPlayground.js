import React from 'react';

import Button from '../Button';
import Toast from '../Toast/Toast'
import styles from './ToastPlayground.module.css';
import useToggle from "../../utils/useToggle"

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState("")
  const [optionValue, setOptionValue] = React.useState('notice')
  const [isToastOpen, toggleIsToastOpen] = useToggle(false)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {
        isToastOpen &&
        <Toast variant={optionValue} toggleIsToastOpen={toggleIsToastOpen}>
          {message}
          </Toast>
      }
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
            <textarea id="message" className={styles.messageInput} value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option) => (
              <label htmlFor={`variant-${option}`}>
                <input
                  id={`variat-${option}`}
                  type='radio'
                  name='variant'
                  value={option}
                  key={`variat-${option}`}
                  onChange={(e) => setOptionValue(e.target.value)}
                  checked={optionValue === option}
                />
                {option}
              </label>
            ))}
            {/* TODO Other Variant radio buttons here: 'warning', 'success', 'error' */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={toggleIsToastOpen}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
