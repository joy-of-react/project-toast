import React from 'react'
import ToastShelf from '../ToastShelf'
import Button from '../Button'
import styles from './ToastPlayground.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
  const [toasts, setToasts] = React.useState([])
  const [formInput, setFormInput] = React.useState({
    message: '',
    variant: 'notice',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormInput({
      ...formInput,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formInput.message || !formInput.variant) {
      return
    }

    const newToast = {
      ...formInput,
      id: crypto.randomUUID(),
    }

    setToasts([...toasts, newToast])
    setFormInput({
      message: '',
      variant: 'notice',
    })
  }
  console.log(formInput)
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toasts={toasts} setToasts={setToasts} />
      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor='message'
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id='message'
                name='message'
                className={styles.messageInput}
                value={formInput.message}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => (
                <label htmlFor='variant-notice' key={option}>
                  <input
                    id='variant-notice'
                    type='radio'
                    name='variant'
                    value={option}
                    onChange={handleChange}
                    checked={formInput.variant === option}
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
    </div>
  )
}

export default ToastPlayground
