import { format as _format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

/**
 * Formata uma data para 'dd/MM/yy'
 * Pode receber uma string '2021-06-12' ou uma data em milisegundos
 * @param {string, number} date - Data para realizar a formatação
 * @returns {string} '12 de junho de 2021'
 */
export const formatDateDMY = (date = null) => {
  if (!date) return null;

  const currentDate = new Date(date);
  const day = _format(currentDate, 'dd');
  const month = _format(currentDate, 'MMMM', { awareOfUnicodeTokens: true, locale: ptBR });
  const year = _format(currentDate, 'yyyy');

  return `${day} de ${month} de ${year}`;
};

/**
 * Formata uma data para 'dd/MM/yy'
 * Pode receber uma string '2021-06-12' ou uma data em milisegundos
 * @param {string, number} date - Data para realizar a formatação
 * @returns {string} '12 jun - 11:48'
 */
export const formatDateDMH = (date = null) => {
  if (!date) return null;

  const currentDate = new Date(date);
  const day = _format(currentDate, 'dd');
  const month = _format(currentDate, 'MMM', { awareOfUnicodeTokens: true, locale: ptBR });
  const hour = _format(currentDate, 'HH:mm');

  return `${day} ${month} - ${hour}`;
};

/**
 * Order uma lista de resultados pela data em ordem descrescente.
 * @param {Object} options valores para comparação
 * @param {Object} options.values lista de valores com as datas
 * @returns {Object}
 */
export const sortDates = ({ values = [] }) =>
  values.sort((currentResult, nextResult) => {
    const currentDate = new Date(currentResult.date);
    const nextDate = new Date(nextResult.date);
    return nextDate - currentDate;
  });