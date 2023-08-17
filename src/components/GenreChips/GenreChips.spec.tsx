import React from 'react';
import { render } from '@testing-library/react';
import GenreChips from './GenreChips';

const mockGenres = [
  { id: 1, name: 'Pop' },
  { id: 2, name: 'Rock' },
];

describe('<GenreChips />', () => {
  it('renders the chips with correct genre names', () => {
    const { getByText } = render(<GenreChips genres={mockGenres} label="Genres" color="primary" />);
    expect(getByText('Pop')).toBeInTheDocument();
    expect(getByText('Rock')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<GenreChips genres={mockGenres} label="Genres" color="primary" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
