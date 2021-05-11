import React from 'react';
import styles from './index.module.css';

const PanelFooter = ({ amountTotal }) => (
  <p className={styles.panelFooter}>
    Saldo do dia <strong>R$ {amountTotal}</strong>
  </p>
);

export default PanelFooter;