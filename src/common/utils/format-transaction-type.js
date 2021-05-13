import {
  ENTRY_TYPE,
  SOURCE_TYPE,
  STATUS_TYPE,
  TRANSACTION_TYPE,
} from '../constants/transaction-type';
import { sortDates } from './format-date';

/**
 * Formata valores de transações para o tipo adequado dependendo do status.
 * @param {Object} options valores para comparação
 * @param {string} options.entry tipo de transação
 * @param {boolean} options.scheduled se é transação agendada
 * @param {string} options.source tipo de operação
 * @param {string} options.status status da operação
 * @returns {string}
 */
export const formatTransactionType = ({ entry, scheduled, source, status }) => {
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

/**
 * Filtra os resultados de acordo com o tipo.
 * @param {Object} options valores para comparação
 * @param {string} options.type tipo de filtro ativo para a pesquisa
 * @param {Object} options.results lista de resultados
 * @returns {Object}
 */
export const filterByType = ({ type, results }) => {
  switch (type) {
    case 'ALL':
      return results;

    case 'ENTRY':
      // eslint-disable-next-line no-case-declarations
      const updatedEntryResults = [];

      results.forEach((result) => {
        const filteredItems = result.items.filter((item) => item.entry === ENTRY_TYPE.DEBIT);

        if (filteredItems.length > 0) {
          const updatedItems = sortDates({ results: filteredItems });

          updatedEntryResults.push({
            date: result.date,
            amountTotal: result.amountTotal,
            items: updatedItems,
          });
        }
      });

      return updatedEntryResults;

    case 'EXIT':
      // eslint-disable-next-line no-case-declarations
      const updateExitdResults = [];

      results.forEach((result) => {
        const filteredItems = result.items.filter((item) => item.entry === ENTRY_TYPE.CREDIT);

        if (filteredItems.length > 0) {
          const updatedItems = sortDates({ results: filteredItems });

          updateExitdResults.push({
            date: result.date,
            amountTotal: result.amountTotal,
            items: updatedItems,
          });
        }
      });
      return updateExitdResults;

    default:
      return [];
  }
};