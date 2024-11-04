import React, { useContext, useState, useEffect } from "react";
import ToastShelf from "../ToastShelf";
import Button from "../Button";
import { ToastContext } from "../ToastProvider";
import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [selectNoticeType, setSelectNoticeType] = useState(VARIANT_OPTIONS[0]);
  const [content, setContent] = useState("");
  const { setList } = useContext(ToastContext);

  useEscapeAllToast(setList);

  function handleSubmit(e) {
    e.preventDefault();

    if (!content) {
      return;
    }

    setList((list) => [
      ...list,
      {
        content,
        variant: selectNoticeType,
        id: crypto.randomUUID(),
      },
    ]);
    setSelectNoticeType(VARIANT_OPTIONS[0]);
    setContent("");
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <div className={styles.controlsWrapper}>
        <form onSubmit={handleSubmit}>
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
                onChange={(e) => setContent(e.target.value)}
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
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function useEscapeAllToast(setList) {
  useEffect(() => {
    const removeAllToast = (e) => {
      if (e.key === "Escape") {
        setList([]);
      }
    };
    window.addEventListener("keydown", removeAllToast);

    return () => window.removeEventListener("keydown", removeAllToast);
  }, [setList]);
}

export default ToastPlayground;
