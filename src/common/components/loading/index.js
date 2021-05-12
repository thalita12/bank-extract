import React from 'react';
import styles from './index.module.css';

const Loading = () => (
  <div className={styles.container}>
    <div className={styles.circle} />
    <div className={styles.circle} />
    <div className={styles.circle} />

    <div className={styles.shadow} />
    <div className={styles.shadow} />
    <div className={styles.shadow} />

    <p className={styles.text}>Carregando</p>
  </div>
);

export default Loading;