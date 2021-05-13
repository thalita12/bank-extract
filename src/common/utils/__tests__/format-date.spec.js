import { formatDateDMY, formatDateDMH, sortDates } from '../format-date';

describe('format-date.js', () => {
  const DATE_COMPLETE = '2014-10-31T21:00:00Z';

  it('Deve formatar a data em dia, mês e ano', () => {
    const formattedDate = formatDateDMY(DATE_COMPLETE);
    expect(formattedDate).toContain('31 de outubro de 2014');
  });

  it('Deve retornar null senão tiver valor formatDateDMY', () => {
    const formattedDate = formatDateDMY();
    expect(formattedDate).toBeNull();
  });

  it('Deve formatar a data em dia, mês e hora', () => {
    const formattedDate = formatDateDMH(DATE_COMPLETE);
    expect(formattedDate).toContain('31 out - 18:00');
  });

  it('Deve retornar null senão tiver valor formatDateDMH', () => {
    const formattedDate = formatDateDMH();
    expect(formattedDate).toBeNull();
  });

  it('Deve ordenar as datas decrescentemente', () => {
    const values = [
      {
        date: DATE_COMPLETE
      },
      {
        date: '2021-05-12T21:00:00Z'
      }
    ];

    const sortedDate = sortDates({ values });
    expect(sortedDate).toMatchObject([
      {
        date: '2021-05-12T21:00:00Z'
      },
      {
        date: '2014-10-31T21:00:00Z'
      }
    ]);
  });
});