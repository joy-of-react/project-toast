# Exercise 1: Wiring up form controls

- Use controlled inputs for the message text input and variant radio buttons
  - The default value for `variant` should be the first variant, `"notice"`.
- Use the `VARIANTS` to bind each of the 4 radio buttons (iteration practice!)

# Exercise 2: Toast component

- import and render a `<Toast>` in the ToastPlayground, above the `controlsWrapper`
- Pass the data in to the Toast component
- Use the `variant` to pick the right icon from the map obj.
- Colors! Apply the variant as a class to the top-level toast element.
- Dismissal! Create a `handleDismiss` function that unticks the `isRendered` state
  - Talk about how I could have passed `setIsRendered` directly, but explain that it's too much information/control for this component. And in fact, in the next exercise, we'll see why it's a bad idea!

# Exercise 3: Multiple toasts

- Show a GIF of having multiple toasts. How will this work??
- In ToastPlayground, swap `isRendered` state for `toasts` array. Pre-populate the array with an object containing a test toast.
- COmment out all the broken stuff for now, like `handleDismiss`
- Import and render `ToastShelf`, pass the toast. Get it rendering!
- **Key warning:** needs ID
- Create a `generateNewToast` function, create an ID with `crypto.randomUUID`.
- handleDismiss: for now, do this in `ToastShelf`:
  `handleDismiss={() => handleDismiss(toast.id)}`
- Update the playground to use a form and `onSubmit`. Update the `generateNewToast` function to be the on-submit fn.
  - Make the textarea `required`

# Exercise 4: Context

- Create `ToastProvider.js`
- Standard Provider Component structure (from course)
- Wrap around everything in App.js
- Move the `toasts` state over
- Move the create/dismiss functions over
- pluck the create function out in `ToastPlayground`
- pluck the data and dismiss function out in `ToastShelf`

- Optimize with useMemo and useCallback
  - GOAL: When a new toast is added, the other toasts shouldn't re-render.
  - For create/dismiss, `useCallback` with an empty dep array. Move to callback form for state setters, `currentToasts` instead of `toasts`.
  - Need to pass `handleDismiss` to the toast component, can't pluck it from context.
  - Make this a secondary video? Since it might not be necessary in the future.

# Exercise 5: Supporting keyboard users and screen readers

- Review what we covered in the intro video
- Dismissing all toasts with the "Escape" key
- Add the following markup to ToastShelf:

```jsx
<ol
  className={styles.wrapper}
  role="region"
  aria-label="Notifications"
  aria-live="polite"
```

(I'll dig into this in a separate video, since I can't expect them to know all this)

# Exercise 6: Auto-dismiss

- Mention the a11y concerns
- Give them the following markup:

```jsx
<div className={styles.row}>
  {/* Bind to new “autoDismiss” state variable: */}
  <label htmlFor="auto-dismiss" className={styles.label}>
    Auto-Dismiss
  </label>
  <div className={styles.inputWrapper}>
    <input id="auto-dismiss" type="checkbox" />
  </div>

  {/* Bind to new “dismissDuration” state variable: */}
  <label htmlFor="dismiss-duration" className={styles.label}>
    Duration
  </label>
  <div className={styles.inputWrapper}>
    <input id="dismiss-duration" type="number" />
  </div>
</div>
```

- MENTION GOTCHA: Value will be a string. Convert with `Number()`

- Create the state hooks, bind them. Conditionally render second one
- In ToastProvider, add the new parameters
- In Toast, set up a hook:

```jsx
React.useEffect(() => {
  if (typeof dismissDuration !== 'number') {
    return;
  }

  const timeoutId = window.setTimeout(() => {
    handleDismiss(id);
  }, dismissDuration * 1000);

  return () => {
    window.clearTimeout(timeoutId);
  };
}, [id, dismissDuration, handleDismiss]);
```

# Exercise 7: Custom hooks

- Create `useAutoDismiss` hook, store underneath Toast component
- Create `useEscapeKey` hook:

```jsx
useEscapeKey({ onEscape: handleDismissAllToasts });
```
