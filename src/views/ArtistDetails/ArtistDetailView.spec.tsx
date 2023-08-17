import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import ArtistDetailView from './ArtistDetailView';
import { render } from '../../../tests/testUtils';

const artistData = { id: 1, name: 'Artist Name', image: 'image-url', popularity: 50, genres: [] };
const similarArtistsData = [{ id: 2, name: 'Similar Artist', image: 'image-url', genres: [] }];

jest.mock('../../connection', () => ({
  getArtistDetails: jest.fn(() => Promise.resolve({ data: { data: [artistData] } })),
  getSimilarArtists: jest.fn(() => Promise.resolve({ data: { data: similarArtistsData } })),
}));

describe('ArtistDetailView', () => {

  it('renders artist details and matches snapshot', () => {
    const { asFragment } = render(<ArtistDetailView />);
    expect(asFragment()).toMatchSnapshot();
  });
});
