import React from 'react';
import { render, screen } from '@testing-library/react';
import GenreSearchView from './GenreSearchView';

jest.mock('../../connection', () => ({
  getGenres: jest.fn(),
  getArtistByGenre: jest.fn()
}));

describe('GenreSearchView', () => {

  it('renders search component and matches snapshot', () => {
    const { asFragment } = render(<GenreSearchView />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the search field', () => {
    render(<GenreSearchView />);
    expect(screen.getByLabelText('Search for a genre')).toBeInTheDocument();
  });

});
