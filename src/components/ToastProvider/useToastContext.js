import { useContext } from "react";
import { ToastContext } from "./ToastProvider";

function useToastContext() {
  return useContext(ToastContext);
}

export default useToastContext;
