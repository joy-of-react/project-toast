import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [notice, setNotice] = React.useState("notice");
  const [list, setList] = React.useState([]);

  const deleteToast = (index) => {
    setList((prev) => [...prev.filter((i) => i.ind !== index)]);
  };

  return (
    <ToastContext value={{ notice, setNotice, deleteToast, list, setList }}>
      {children}
    </ToastContext>
  );
}

export default ToastProvider;
