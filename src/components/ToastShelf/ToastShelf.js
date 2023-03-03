import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  return (
    <ol className="fixed right-0 bottom-0 flex flex-col gap-4 p-4 list-none">
      <li className={styles.toastWrapper}>
        <Toast variant="notice">Example notice toast</Toast>
      </li>
      <li className={styles.toastWrapper}>
        <Toast variant="error">Example error toast</Toast>
      </li>
    </ol>
  );
}

export default ToastShelf;
