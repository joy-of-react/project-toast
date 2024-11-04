import { useEffect } from "react";

function useEscapeKey(callback) {
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape") {
        callback();
      }
    };
    window.addEventListener("keydown", fn);

    return () => window.removeEventListener("keydown", fn);
  }, [callback]);
}

export default useEscapeKey;
