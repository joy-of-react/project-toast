import React from 'react';

import Button from '../Button';
import Toast from '../Toast/Toast'
import styles from './ToastPlayground.module.css';
import useToggle from "../../utils/useToggle"
import ToastShelf from '../ToastShelf/ToastShelf'


const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState("")
  const [variant, setVariant] = React.useState('notice')
  // const [isToastOpen, toggleIsToastOpen] = useToggle(false)
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'Please enter the information',
      variant: 'error'
    },
    {
      id: crypto.randomUUID(),
      message: 'Please enter the information',
      variant: 'notice'
    }
  ])

  function handleSubmit(e) {
    e.preventDefault();

    if (message !== '' && variant !== '') {
      setToasts([
        ...toasts,
        {
          id: crypto.randomUUID(),
          message: message,
          variant: variant,
        }
      ])
    }
    setMessage('')
    setVariant('')
  }

  function handleDismiss(id) {
    const nextToasts = toasts.filter(toast => {return toast.id !== id})
    setToasts(nextToasts)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toasts={toasts} handleDismiss={handleDismiss}/>
      <form className={styles.controlsWrapper}
        onSubmit={handleSubmit}
      >
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
                  onChange={(e) => setVariant(e.target.value)}
                  checked={variant === option}
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
            <Button type='submit' >Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
