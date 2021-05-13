import React from 'react';
import { formatDateDMY } from '../../../utils/format-date';
import styles from './index.module.css';

const PanelHeader = ({ date }) => (
  <div className={styles.panelHead}>
    <p className="column">
      <strong>{formatDateDMY(date)}</strong>
    </p>
    <p className="column">Tipo de transação</p>
    <p className="column">Data</p>
    <p className="column">Valor</p>
  </div>
);

export default PanelHeader;