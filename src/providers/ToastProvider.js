import React, { useContext } from "react";
import ToastShelf from "../components/ToastShelf/ToastShelf";
import { useKeydown } from "../hooks/use-keydown";

export const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

const ToastContext = React.createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);

  const showToast = ({ variant, message }) => {
    const nextToast = {
      id: crypto.randomUUID(),
      variant,
      message,
    };

    setToasts((prevToasts) => [...prevToasts, nextToast]);
  };

  const dismissToast = (id) => {
    setToasts((prevToasts) =>
      prevToasts.filter((toast) => Boolean(toast.id !== id)),
    );
  };

  const handleEscape = React.useCallback(() => setToasts([]), []);

  useKeydown("Escape", handleEscape);

  const value = React.useMemo(() => showToast, []);

  return (
    <ToastContext.Provider value={value}>
      <ToastShelf toasts={toasts} dismiss={dismissToast} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const toastValue = useContext(ToastContext);

  return toastValue;
};
