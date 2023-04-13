import React from "react";

import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastCtx = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  // toasts = [{id: '', message: '', variant:''}, ...]
  useEscapeKey(setToasts);

  function addToast(toast) {
    const nextToasts = [...toasts, toast];
    setToasts(nextToasts);
  }

  function dismissToast(toastId) {
    return (event) => {
      const filteredToasts = toasts.filter(({ id }) => id !== toastId);
      setToasts(filteredToasts);
    };
  }

  return (
    <ToastCtx.Provider value={{ toasts, setToasts, dismissToast, addToast }}>
      {children}
    </ToastCtx.Provider>
  );
}

export default ToastProvider;
