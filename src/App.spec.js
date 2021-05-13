import { render, screen } from '@testing-library/react';
import App from './App';

describe('App.js', () => {
  it('Deve renderizar a aplicação com sucesso', () => {
    render(<App />);

    const pageTitle = screen.getByText(/Extrato/i);
    expect(pageTitle).toBeInTheDocument();
  });
});