import { render, screen } from '@testing-library/react';
import Header from '../index';

describe('Header.js', () => {
  const title = 'Esse é um título bem importante!';

  it('Deve renderizar o componente com sucesso', () => {
    render(<Header title={title} />);

    const pageTitle = screen.getByText(title);
    expect(pageTitle).toBeInTheDocument();
  });

  it('Não deve encontrar nenhum título', () => {
    render(<Header />);

    const pageTitle = screen.queryByTitle(title);
    expect(pageTitle).toBeNull();
  });
});