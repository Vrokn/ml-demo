import React from 'react';
import { render } from '@testing-library/react';
import ArtistCard from './ArtistCard';
import { Artist } from '../../interfaces/artist';
import { Providers } from '../../providers/Providers';

const mockArtist: Artist = {
  id: 1,
  name: 'Artist',
  genres: [{ id: 1, name: 'Test Genre', parent_id: 1 }],
  popularity: 50,
  image: 'https://test.image.url',
};

describe('ArtistCard', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Providers>
        <ArtistCard artist={mockArtist} />
      </Providers>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
