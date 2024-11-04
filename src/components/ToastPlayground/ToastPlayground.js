import React, { useState } from "react";
import Toast from "../Toast";
import Button from "../Button";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [selectNoticeType, setSelectNoticeType] = useState(VARIANT_OPTIONS[0]);
  const [isShowToast, setIsShowToast] = useState(false);
  const [content, setContent] = useState('');

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isShowToast && (
        <Toast
          setIsShowToast={setIsShowToast}
          type={selectNoticeType}
          content={content}
        />
      )}

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
              value={content}
              onChange={(e) =>  setContent(e.target.value)}
              id="message"
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((noticeType) => {
              const id = `variant-notice-${noticeType}`;

              return (
                <label htmlFor={id} key={noticeType}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={noticeType}
                    checked={selectNoticeType === noticeType}
                    onChange={() => setSelectNoticeType(noticeType)}
                  />
                  {noticeType}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => setIsShowToast(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
