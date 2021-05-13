import { ENTRY_TYPE } from '../common/constants/transaction-type';

const FETCH_TIMEOUT = 2000;
const RESULTS_API = 'http://localhost:3002/results';

/**
 *
 * @param type
 * @param results
 * @returns {*[]|*}
 */
const filterByType = ({ type, results }) => {
  switch (type) {
    case 'ALL':
      return results;

    case 'ENTRY':
      // eslint-disable-next-line no-case-declarations
      const updatedEntryResults = [];

      results.forEach((result) => {
        const filteredItems = result.items.filter((item) => item.entry === ENTRY_TYPE.DEBIT);
        if (filteredItems.length > 0) {
          updatedEntryResults.push({
            date: result.date,
            amountTotal: result.amountTotal,
            items: filteredItems,
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
          updateExitdResults.push({
            date: result.date,
            amountTotal: result.amountTotal,
            items: filteredItems,
          });
        }
      });
      return updateExitdResults;

    default:
      return [];
  }
};

/**
 *
 * @returns {Promise<unknown>}
 */
export const fetchResults = async () =>
  new Promise((resolve, reject) => {
    fetch(RESULTS_API)
      .then((resultsResponse) => {
        setTimeout(() => {
          resolve(resultsResponse.json());
        }, FETCH_TIMEOUT);
      })
      .catch((error) => {
        reject(error);
      });
  });

/**
 *
 * @param value
 * @returns {Promise<unknown>}
 */
export const fetchActiveResults = async ({ type }) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const results = await fetchResults();
        const updatedResults = filterByType({ type, results });
        resolve(updatedResults);
      } catch (error) {
        reject(error);
      }
    })();
  });