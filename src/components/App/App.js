import React from 'react';
import Header from '../Header/Header';
import ToastPlayground from '../ToastPlayground/ToastPlayground';
import Footer from '../Footer';
import ToastProvider from '../ToastProvider/ToastProvider';

import styles from '../ToastPlayground/ToastPlayground.module.css'


function App() {
  return (
    <ToastProvider>
      <div className={styles.wrapper}>
        <Header />
        <ToastPlayground />
        <Footer />
      </div>
    </ToastProvider>
  );
}

export default App;
