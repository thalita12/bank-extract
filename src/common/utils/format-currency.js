const CENTS = 100;

/**
 * Aplica formatação monetária brasileira.
 * @param {Number} value
 * @example
 * formatFullCurrency(5)
 * // 'R$ 5.00'
 * formatFullCurrency(0)
 * // 'R$ 0.00'
 * formatFullCurrency(0, true)
 * // '-'
 */
export const formatCurrency = (value = null) => {
  if (!value && value !== 0) return '-';

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  }).format(value / CENTS);
};