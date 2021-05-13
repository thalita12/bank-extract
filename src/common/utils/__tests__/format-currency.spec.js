import { formatCurrency } from '../format-currency';

describe('format-currency.js', () => {
  it('Deve formatar o valor monetário com sucesso', () => {
    const formattedValue = formatCurrency(20012);
    expect(formattedValue).toContain('R$200.12');
  });

  it('Deve retornar o valor "-" se for vazio', () => {
    const formattedValue = formatCurrency();
    expect(formattedValue).toContain('-');
  });
});