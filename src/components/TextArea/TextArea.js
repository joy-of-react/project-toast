import React from "react"
import styles from "./../ToastPlayground/ToastPlayground.module.css"

function TextArea() {
  const [value, setValue] = React.useState("")
  const id = React.useId()

  return (
    <>
      <label
        htmlFor={`message-${id}`}
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        Message
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          id={`message-${id}`}
          className={styles.messageInput}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </>
  )
}

export default TextArea
