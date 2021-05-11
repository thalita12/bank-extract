import {
  ENTRY_TYPE,
  SOURCE_TYPE,
  STATUS_TYPE,
  TRANSACTION_TYPE,
} from '../constants/transaction-type';

/**
 * Formata valores de transações para o tipo adequado dependendo do status.
 * @param {Object} date - Data para realizar a formatação
 * @returns {string} 'Pagamento realizado'
 */
const formatTransactionType = ({ entry, scheduled, source, status }) => {
  switch (status) {
    case STATUS_TYPE.PENDING:
      return source === SOURCE_TYPE.PAYMENT
        ? TRANSACTION_TYPE.PAYMENT_PENDING
        : TRANSACTION_TYPE.TRANSFER_PENDING;

    case STATUS_TYPE.REFUNDED:
      return source === SOURCE_TYPE.PAYMENT
        ? TRANSACTION_TYPE.PAYMENT_REFUNDED
        : TRANSACTION_TYPE.TRANSFER_REFUNDED;

    case STATUS_TYPE.COMPLETED:
      if (scheduled) {
        return source === SOURCE_TYPE.PAYMENT
          ? TRANSACTION_TYPE.PAYMENT_SCHEDULED
          : TRANSACTION_TYPE.TRANSFER_SCHEDULED;
      }
      if (!scheduled && entry === ENTRY_TYPE.CREDIT) {
        return source === SOURCE_TYPE.PAYMENT
          ? TRANSACTION_TYPE.PAYMENT_CREDIT
          : TRANSACTION_TYPE.TRANSFER_CREDIT;
      }
      if (!scheduled && entry === ENTRY_TYPE.DEBIT) {
        return source === SOURCE_TYPE.PAYMENT
          ? TRANSACTION_TYPE.PAYMENT_DEBIT
          : TRANSACTION_TYPE.TRANSFER_DEBIT;
      }
      return '-';

    default:
      return '-';
  }
};

export default formatTransactionType;