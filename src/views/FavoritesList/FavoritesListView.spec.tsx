import React from 'react';
import { screen } from '@testing-library/react';
import FavoritesListView from './FavoritesListView'; // Update the import path accordingly
import { ArtistContext } from '../../context/SavedArtistContext/SavedArtistContext';
import { render } from '../../../tests/testUtils';
import { Artist } from '../../interfaces/artist';

const ARTISTS_MOCK = [
  { id: 1, name: 'Artist 1', genres: [], popularity: 2, image: '' },
  { id: 2, name: 'Artist 2', genres: [], popularity: 2, image: '' },
];

describe('FavoritesListView', () => {

  it('displays saved artists', () => {
    render(
      <ArtistContext.Provider value={{ artists: ARTISTS_MOCK, toggleArtist: jest.fn() }}>
        <FavoritesListView />
      </ArtistContext.Provider>
    );

    expect(screen.getByText('My saved artists:')).toBeInTheDocument();
    ARTISTS_MOCK.forEach((artist: Artist) => {
      expect(screen.getAllByText(artist.name.toLocaleUpperCase())).toHaveLength(2);
    });
  });

  it('displays message when no artists are saved', () => {
    render(
      <ArtistContext.Provider value={{ artists: [], toggleArtist: jest.fn() }}>
        <FavoritesListView />
      </ArtistContext.Provider>
    );

    const linkElement = screen.getByText('here');
    expect(linkElement).toBeInTheDocument();
  });
});