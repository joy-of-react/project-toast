import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';



const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({message, messageVariant } ) {

  let variantStyle = styles[messageVariant]

  const IconName = messageVariant ? ICONS_BY_VARIANT[messageVariant] : "Info"

  const [ showToast, setShowToast ] = React.useState(true);
 
  function hideToast() {
    setShowToast(false)
  };

  const hiddenStyle = showToast ? "" : "hidden";


  return (
    <div className={`${styles.toast} ${variantStyle}`}>
      <div className={styles.iconContainer}>
        <IconName size={24} />
      </div>
      <p className={styles.content}>
        {message}
      </p>
      <button className={styles.closeButton} onClick={hideToast}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
