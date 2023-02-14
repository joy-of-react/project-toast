import React from "react";
import useGlobalKey from "../../hooks/useGlobalKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastRoster, setToastRoster] = React.useState([]);

  const consumeAllToasts = () => setToastRoster([]);

  useGlobalKey('Escape', consumeAllToasts);

  function addToast(type, message) {
    const id = Math.random();
    const newToast = {id, type, message};
    setToastRoster([...toastRoster, newToast]);
  } 

  function removeToast(idToRemove) {
    setToastRoster(toastRoster.filter((t) => t.id !== idToRemove));
  }
  
  return (
  <ToastContext.Provider value={{ toasts: toastRoster, addToast, removeToast }}>
    {children}
  </ToastContext.Provider>);
}

export default ToastProvider;
