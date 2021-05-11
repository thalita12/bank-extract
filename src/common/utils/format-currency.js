/**
 * Aplica formatação monetária brasileira.
 * @param {Number} value
 * @param {Boolean} ignoreZero
 * @example
 * formatFullCurrency(5)
 * // 'R$ 5.00'
 * formatFullCurrency(0)
 * // 'R$ 0.00'
 * formatFullCurrency(0, true)
 * // '-'
 */
export const formatCurrency = (value, ignoreZero = false) => {
  if ((!value && value !== 0) || (ignoreZero && !value)) return '-';

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);
};