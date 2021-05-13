import { render, screen } from '@testing-library/react';
import Loading from '../index';

describe('Loading.js', () => {
  it('Deve renderizar o componente com sucesso', () => {
    render(<Loading />);

    const text = screen.getByText(/carregando/i);
    expect(text).toBeInTheDocument();
  });
});