import React from "react"
import Button from "../Button"
import TextArea from "../TextArea/TextArea"
import styles from "./ToastPlayground.module.css"
import RadioButton from "../RadioButton"
import Toast from "../Toast"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]

function ToastPlayground() {
  const [variant, setVariant] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [showToast, setShowToast] = React.useState(false)
  return (
    <div className={styles.wrapper}>
      <header>
        <img
          alt="Cute toast mascot"
          src="/toast.png"
        />
        <h1>Toast Playground</h1>
      </header>
      {showToast && (
        <Toast
          message={message}
          variant={variant}
          setShowToast={setShowToast}
        />
      )}
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <TextArea
            message={message}
            setMessage={setMessage}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <RadioButton
                key={option}
                variant={option}
                value={variant}
                setValue={setVariant}
              />
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button
              onClick={() => {
                setShowToast(true)
              }}
            >
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToastPlayground
