import React from 'react';

import { formatDateDMY } from '../../../utils/format-date';
import { formatCurrency } from '../../../utils/format-currency';
import formatTransactionType from '../../../utils/format-transaction-type';

import { ENTRY_TYPE, STATUS_TYPE } from '../../../constants/transaction-type';

import { ReactComponent as IconArrowDownIn } from '../../../../assets/icons/arrow-down-in.svg';
import { ReactComponent as IconArrowReturn } from '../../../../assets/icons/arrow-return.svg';
import { ReactComponent as IconTimeClock } from '../../../../assets/icons/time-clock.svg';

import styles from './index.module.css';

const getClasses = ({ entry, status }) => {
  if (status === STATUS_TYPE.REFUNDED) return styles.panelRefundedText;
  if (entry === ENTRY_TYPE.DEBIT) return styles.panelDebitText;
  return styles.panelCreditText;
};

const getIcon = ({ entry, status }) => {
  if (status === STATUS_TYPE.REFUNDED) return <IconArrowReturn />;
  if (status === STATUS_TYPE.PENDING) return <IconTimeClock />;
  if (entry === ENTRY_TYPE.DEBIT) return <IconArrowDownIn />;
  return <IconTimeClock />;
};

const PanelBody = ({ items }) => (
  <div className={styles.panelBody}>
    {items.map((item) => (
      <div key={`row-${item.dateEvent}-${item.amount}`} className={styles.panelRow}>
        <p className={`w25 ${styles.panelPrimaryText}`}>
          <div className={styles.panelIcon}>{getIcon(item)}</div>
          {item.actor}
        </p>
        <p className="w25">{formatTransactionType(item)}</p>
        <p className="w25">{formatDateDMY(item.dateEvent)}</p>
        <p className={`w25 ${getClasses(item)}`}>{formatCurrency(item.amount)}</p>
      </div>
    ))}
  </div>
);

export default PanelBody;