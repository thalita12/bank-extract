import {
  ENTRY_TYPE,
  SOURCE_TYPE,
  STATUS_TYPE,
  TRANSACTION_TYPE
} from '../constants/transaction-type';
import { sortDates } from './format-date';

const CURRENT_DATE = new Date();

/**
 * Filtra se tem o nome na transação.
 * @param {Object} options valores para comparação
 * @param {Object} options.values itens para buscar o nome
 * @param {string} options.nameSearch nome a ser encontrado
 * @returns {*[]|*}
 */
const filterByName = ({ values, nameSearch }) => {
  const updatedByName = [];

  values.forEach((value) => {
    if (value.actor.toLowerCase().includes(nameSearch)) {
      updatedByName.push(value);
    }
  });

  return nameSearch.length ? updatedByName : values;
};

/**
 * Formata valores de transações para o tipo adequado dependendo do status.
 * @param {Object} options valores para comparação
 * @param {string} options.entry tipo de transação
 * @param {string} options.source tipo de operação
 * @param {string} options.status status da operação
 * @returns {string}
 */
export const formatTransactionType = ({ entry, source, status }) => {
  switch (status) {
    case STATUS_TYPE.PENDING:
      if (entry === ENTRY_TYPE.DEBIT) {
        return source === SOURCE_TYPE.PAYMENT
          ? TRANSACTION_TYPE.PAYMENT_PENDING
          : TRANSACTION_TYPE.TRANSFER_PENDING;
      }

      return '-';

    case STATUS_TYPE.REFUNDED:
      if (entry === ENTRY_TYPE.CREDIT) {
        return source === SOURCE_TYPE.PAYMENT
          ? TRANSACTION_TYPE.PAYMENT_REFUNDED
          : TRANSACTION_TYPE.TRANSFER_REFUNDED;
      }

      return '-';

    case STATUS_TYPE.COMPLETED:
      if (entry === ENTRY_TYPE.CREDIT) {
        return source === SOURCE_TYPE.PAYMENT
          ? TRANSACTION_TYPE.PAYMENT_CREDIT
          : TRANSACTION_TYPE.TRANSFER_CREDIT;
      }

      if (entry === ENTRY_TYPE.DEBIT) {
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
export const filterByType = ({ type, nameSearch, results }) => {
  switch (type) {
    case 'ALL':
      // eslint-disable-next-line no-case-declarations
      const updatedAllResults = [];

      results.forEach((result) => {
        const filteredByName = filterByName({ values: result.items, nameSearch });

        if (filteredByName.length > 0) {
          const updatedItems = sortDates({ values: filteredByName });

          updatedAllResults.push({
            date: result.date,
            amountTotal: result.amountTotal,
            items: updatedItems
          });
        }
      });

      return updatedAllResults;

    case 'CREDIT':
      // eslint-disable-next-line no-case-declarations
      const updatedCreditResults = [];

      results.forEach((result) => {
        const filteredByEntry = result.items.filter((item) => item.entry === ENTRY_TYPE.CREDIT);
        const filteredByName = filterByName({ values: filteredByEntry, nameSearch });

        if (filteredByName.length > 0) {
          const updatedItems = sortDates({ values: filteredByName });
          updatedCreditResults.push({
            date: result.date,
            amountTotal: result.amountTotal,
            items: updatedItems
          });
        }
      });

      return updatedCreditResults;

    case 'DEBIT':
      // eslint-disable-next-line no-case-declarations
      const updatedDebitResults = [];

      results.forEach((result) => {
        const filteredByEntry = result.items.filter((item) => item.entry === ENTRY_TYPE.DEBIT);
        const filteredByName = filterByName({ values: filteredByEntry, nameSearch });

        if (filteredByName.length > 0) {
          const updatedItems = sortDates({ values: filteredByName });

          updatedDebitResults.push({
            date: result.date,
            amountTotal: result.amountTotal,
            items: updatedItems
          });
        }
      });

      return updatedDebitResults;

    case 'SCHEDULED':
      // eslint-disable-next-line no-case-declarations
      const updatedScheduledResults = [];

      results.forEach((result) => {
        const resultDate = new Date(result.date);
        const filteredByEntry = result.items.filter(
          (item) => item.scheduled && resultDate > CURRENT_DATE
        );
        const filteredByName = filterByName({ values: filteredByEntry, nameSearch });

        if (filteredByName.length > 0) {
          const updatedItems = sortDates({ values: filteredByName });

          updatedScheduledResults.push({
            date: result.date,
            amountTotal: result.amountTotal,
            items: updatedItems
          });
        }
      });

      return updatedScheduledResults;

    default:
      return [];
  }
};