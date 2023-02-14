import React from "react";

// reference to change keys:
// https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values

export default function useGlobalKey(keyCode, callback) {
  // ensure callback is a function!
  if (typeof callback !== "function")
    throw Error("Hook useGlobalKey given non-function callback.");

  const memoedCallback = React.useCallback(callback, [callback]);

  React.useEffect(() => {
    function handleKey(e) {
      if (e.code === keyCode) {
        memoedCallback();
      }
    }

    window.addEventListener("keyup", handleKey);
    return () => window.removeEventListener("keyup", handleKey);
  }, [keyCode, memoedCallback]);
}
