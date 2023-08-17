import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getArtistByGenre } from './genres';

const mock = new MockAdapter(axios);

it('fetches artists by genre ID', async () => {
  const genreId = 1;

  // Simulate a response
  const expectedResponse = [
    { id: 1, name: 'Artist 1' },
    { id: 2, name: 'Artist 2' },
  ];
  mock.onGet(`/api/v1/music/genres/${genreId}/artists`).reply(200, expectedResponse);

  const response = await getArtistByGenre(genreId);

  expect(response?.data).toEqual(expectedResponse);
});
