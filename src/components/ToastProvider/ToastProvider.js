import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [currentOption, setCurrentOption] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey({ setToasts });

  function addToast(e) {
    e.preventDefault();
    const arr = [...toasts];
    arr.push({
      id: crypto.randomUUID(),
      theme: currentOption,
      content: message,
    });
    setToasts(arr);
    resetMessage();
  }

  function dismissToast(id) {
    const arr = [...toasts]
      .filter((item) => item.id !== id)
      .map((item, index) => ({
        ...item,
        id: index,
      }));
    setToasts(arr);
  }

  function resetMessage() {
    setMessage("");
  }

  const value = {
    message,
    setMessage,
    currentOption,
    setCurrentOption,
    toasts,
    addToast,
    dismissToast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
