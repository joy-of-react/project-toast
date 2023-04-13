import React from "react";

export default function useEscapeKey(setToasts) {
  React.useEffect(() => {
    function handleESC(event) {
      if (event.code === "Escape") {
        setToasts([]);
      }
    }

    window.addEventListener("keydown", handleESC);

    return () => window.removeEventListener("keydown", handleESC);
  }, [setToasts]);
}
