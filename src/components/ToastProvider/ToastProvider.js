import React, { useMemo, useState } from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [list, setList] = useState([]);

  const value = useMemo(
    () => ({
      list,
      setList,
    }),
    [list]
  );

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
