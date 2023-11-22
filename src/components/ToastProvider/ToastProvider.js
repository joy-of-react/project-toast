import React from "react";
import useKeydown from "../../hooks/use-keydown";
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  const addToastItem = (message, variant) => {
    const newItem = {
      message,
      variant,
      id: Math.random(),
    };
    const nextList = [...toastList, newItem];
    setToastList(nextList);
  };

  const handleEscape = React.useCallback(() => {
    setToastList([]);
  }, []);

  useKeydown("Escape", handleEscape);

  const handleDismiss = (id) => {
    const nextToasts = toastList.filter((toast) => {
      return toast.id !== id;
    });

    setToastList(nextToasts);
  };

  return (
    <ToastContext.Provider
      value={{ toastList, setToastList, addToastItem, handleDismiss }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
