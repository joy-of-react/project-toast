import clsx from "clsx";
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast() {
  return (
    <div
      className={clsx(
        styles.notice,
        "relative flex items-center gap-4 rounded-2xl",
        "text-black [color-scheme:light] bg-white",
        "max-w-full w-80 box-shadow-md"
      )}
    >
      <div className={styles.iconContainer}>
        <Info size={24} />
      </div>
      <p className="flex flex-1 py-3 font-semibold">16 photos have been uploaded</p>
      <button className="flex shrink-0 border-none bg-transparent p-4 cursor-pointer">
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
