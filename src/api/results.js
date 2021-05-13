import { sortDates } from '../common/utils/format-date';
import { filterByType } from '../common/utils/format-transaction-type';

const FETCH_TIMEOUT = 2000;
const RESULTS_API = 'http://localhost:3002/results';

/**
 * Busca os resultados no banco.
 * @returns {Promise<Object>}
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
 * Busca os resultados e os filtra pelo tipo e ordena em modo descrescente pela data.
 * @param {Object} options valores para comparação
 * @param {string} options.type tipo de filtro ativo
 * @returns {Promise<Object>}
 */
export const fetchActiveResults = async ({ type, nameSearch }) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const results = await fetchResults();
        const filteredResults = filterByType({ type, nameSearch, results });
        const updatedResults = sortDates({ results: filteredResults });
        resolve(updatedResults);
      } catch (error) {
        reject(error);
      }
    })();
  });