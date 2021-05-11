import React from 'react';
import { formatCurrency } from '../../../utils/format-currency';
import styles from './index.module.css';

const PanelFooter = ({ amountTotal }) => (
  <p className={styles.panelFooter}>
    Saldo do dia <strong>{formatCurrency(amountTotal)}</strong>
  </p>
);

export default PanelFooter;