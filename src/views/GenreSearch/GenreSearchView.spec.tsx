import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import GenreSearchView from './GenreSearchView'; // Update the import path accordingly
import { getGenres, getArtistByGenre } from '../../connection';

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
  
  /*  it('fetches genres on input change', async () => {
    const mockGenres = [{ id: 1, name: 'Rock' }];
    (getGenres as jest.Mock).mockResolvedValueOnce({ data: { data: mockGenres } });
  
    render(<GenreSearchView />);
    fireEvent.change(screen.getByLabelText('Search for a genre'), { target: { value: 'Rock' } });
  
    await waitFor(() => expect(getGenres).toHaveBeenCalledWith('Rock'), { timeout: 600 });
  });
  
  it('fetches artists by genre on selection', async () => {
    const mockGenres = [{ id: 1, name: 'Rock' }];
    const mockArtists = [{ id: 1, name: 'The Beatles' }];
    (getGenres as jest.Mock).mockResolvedValueOnce({ data: { data: mockGenres } });
    (getArtistByGenre as jest.Mock).mockResolvedValueOnce({ data: { data: mockArtists } });

    render(<GenreSearchView />);
    fireEvent.change(screen.getByLabelText('Search for a genre'), { target: { value: 'Rock' } });

    fireEvent.click(screen.getByText('Rock'));

    await waitFor(() => expect(getArtistByGenre).toHaveBeenCalledWith(1));
  }); */
});
