import React from 'react';
import { formatDateDMY } from '../../../utils/format-date';
import styles from './index.module.css';

const PanelHeader = ({ date }) => (
  <div className={styles.panelHead}>
    <p className="w25">
      <strong>{formatDateDMY(date)}</strong>
    </p>
    <p className="w25">Tipo de transação</p>
    <p className="w25">Data</p>
    <p className="w25">Valor</p>
  </div>
);

export default PanelHeader;