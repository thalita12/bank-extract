import React from 'react';
import styles from './index.module.css';

const Panel = () => (
  <div>
    <div className={styles.panelHead}>
      <p className={styles.w25}>
        <strong>29 de agosto</strong>
      </p>
      <p className={styles.w25}>Tipo de transação</p>
      <p className={styles.w25}>Data</p>
      <p className={styles.w25}>Valor</p>
    </div>

    <span className={styles.line} />

    <div className={styles.panelData}>
      <div className={styles.panelRow}>
        <p className={styles.w25}>Lucas Vallim da Costa</p>
        <p className={styles.w25}>Transferência recebida</p>
        <p className={styles.w25}>Hoje - 12 de Jun 2020 - 17:35</p>
        <p className={styles.w25}>+ R$ 320,00</p>
      </div>

      <div className={styles.panelRow}>
        <p className={styles.w25}>Lucas Vallim da Costa</p>
        <p className={styles.w25}>Transferência recebida</p>
        <p className={styles.w25}>Hoje - 12 de Jun 2020 - 17:35</p>
        <p className={styles.w25}>+ R$ 320,00</p>
      </div>
    </div>

    <span className={styles.line} />

    <p className={styles.panelFooter}>
      Saldo do dia <strong>R$ 3.100,00</strong>
    </p>
  </div>
);

export default Panel;