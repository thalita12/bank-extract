import React from 'react';
import { formatDateDMY } from '../../../utils/format-date';
import styles from './index.module.css';

const PanelBody = ({ items }) => (
  <div className={styles.panelBody}>
    {items.map((item) => (
      <div key={`row-${item.dateEvent}-${item.amount}`} className={styles.panelRow}>
        <p className={`w25 ${styles.panelPrimaryText}`}>{item.actor}</p>
        <p className="w25">{item.source}</p>
        <p className="w25">{formatDateDMY(item.dateEvent)}</p>
        <p className="w25">+ R$ {item.amount}</p>
      </div>
    ))}
  </div>
);

export default PanelBody;