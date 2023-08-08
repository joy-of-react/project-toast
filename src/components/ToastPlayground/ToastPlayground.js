import React, { useState, useContext } from 'react';

import Button from '../Button/Button'
import RadioBtn from '../RadioBtn/RadioBtn';
import ToastShelf from '../ToastShelf/ToastShelf';

import styles from '../ToastPlayground/ToastPlayground.module.css'
import { ToastContext } from '../ToastProvider/ToastProvider';

export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const { createToast } = useContext(ToastContext);

    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);

    function handleCreateToast(event) {
        event.preventDefault();

        createToast(message, variant);

        setMessage('');
        setVariant(VARIANT_OPTIONS[0]);
    }

    return (
        <>
            <ToastShelf />
            <form className={styles.controlsWrapper} onSubmit={handleCreateToast}>
                <label
                    htmlFor="message"
                    className={styles.label}
                    style={{ alignSelf: 'baseline' }}
                >
                    Message
                </label>
                <div className={styles.inputWrapper}>
                    <textarea id="message" className={styles.messageInput} value={message} onChange={(event) => setMessage(event.target.value)} />
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    {VARIANT_OPTIONS.map((option, index) => {
                        return (
                            <RadioBtn key={index} option={option} variant={variant} setVariant={setVariant} />
                        )
                    })}
                </div>

                <div className={styles.row}>
                    <div className={styles.label} />
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button>Pop Toast!</Button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ToastPlayground;