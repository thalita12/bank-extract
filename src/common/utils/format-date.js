import { format as _format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

/**
 * Formata uma data para 'dd/MM/yy'
 * Pode receber uma string '2020-09-23' ou uma data em milisegundos
 * @param {string, number} date - Data para realizar a formatação
 * @returns {string} '23 de agosto'
 */
export const formatDateDM = (date) => {
  if (!date) return null;

  const currentDate = new Date(date);
  const day = _format(currentDate, 'dd');
  const month = _format(currentDate, 'MMMM', { awareOfUnicodeTokens: true, locale: ptBR });

  return `${day} de ${month}`;
};

/**
 * Formata uma data para 'dd/MM/yy'
 * Pode receber uma string '2020-09-23' ou uma data em milisegundos
 * @param {string, number} date - Data para realizar a formatação
 * @returns {string} '23 ago - 11:48'
 */
export const formatDateDMY = (date) => {
  if (!date) return null;

  const currentDate = new Date(date);
  const day = _format(currentDate, 'dd');
  const month = _format(currentDate, 'MMM', { awareOfUnicodeTokens: true, locale: ptBR });
  const hour = _format(currentDate, 'HH:mm');

  return `${day} ${month} - ${hour}`;
};