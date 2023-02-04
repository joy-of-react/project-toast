import React from "react";
import FocusLock, { AutoFocusInside } from "react-focus-lock";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDismiss }) {
  const [isFocusLocked, setIsFocusLocked] = React.useState(false);
  const prevToastCount = React.useRef(toasts.length);
  const scrollRef = React.useRef();

  React.useEffect(() => {
    function handleFocus(e) {
      if (e.code === "Escape") {
        setIsFocusLocked((l) => !l);
      }
    }

    window.addEventListener("keydown", handleFocus);
    return () => window.removeEventListener("keydown", handleFocus);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // if we don't have a focus lock and
      // the element isn't on the page and
      // we have a new toast,
      // then scroll
      if (
        !isFocusLocked &&
        !entry.isIntersecting &&
        prevToastCount.current < toasts.length
      ) {
        entry?.target?.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
      // update the prevToastCount (could have shrunk)
      prevToastCount.current = toasts.length;
    });

    observer.observe(scrollRef.current);

    return () => observer.disconnect();
  }, [isFocusLocked, toasts]);

  return (
    <FocusLock disabled={!isFocusLocked} returnFocus>
      <ol className={styles.wrapper}>
        {toasts.map((toast, i) => (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast
              key={toast.id}
              variant={toast.variant}
              handleDismiss={() => handleDismiss(toast.id)}
            >
              {toast.message}
            </Toast>
          </li>
        ))}
        <div ref={scrollRef} style={{ height: "1px" }} />
      </ol>
    </FocusLock>
  );
}

export default ToastShelf;
