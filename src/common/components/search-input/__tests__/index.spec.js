import { fireEvent, render, screen } from '@testing-library/react';
import SearchInput from '../index';

describe('SearchInput.js', () => {
  const defaultProps = {
    onUpdateName: jest.fn(),
  };

  const renderComponent = (props) => render(<SearchInput {...props} />);

  beforeEach(() => {
    renderComponent(defaultProps);
  });

  it('Deve renderizar o componente com sucesso', () => {
    const component = screen.getByTestId('search-input');
    expect(component).toBeInTheDocument();
  });

  it('Deve disparar evento de onUpdateName ao digitar o nome', () => {
    const input = screen.getByTestId('field-name');
    fireEvent.change(input, { target: { value: 'Miguel' } });

    expect(defaultProps.onUpdateName).toHaveBeenCalledWith('Miguel');
  });
});