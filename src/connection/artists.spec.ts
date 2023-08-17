import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { searchArtists, getArtistDetails, getSimilarArtists } from './artists';

describe('Artist Services', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('searches artists with correct parameters', async () => {
    const query = 'Test Artist';
    const limit = 5;

    mock.onGet('/api/v1/music/artists', { params: { q: query, limit } }).reply(200, {});

    const response = await searchArtists(query, limit);

    expect(response?.data).toEqual({});
  });

  it('gets artist details with correct id', async () => {
    const id = 123;

    mock.onGet(`/api/v1/music/artists/${id}`).reply(200, {});

    const response = await getArtistDetails(id);

    expect(response?.data).toEqual({});
  });

  it('gets similar artists with correct id', async () => {
    const id = 123;

    mock.onGet(`/api/v1/music/artists/${id}/similar`).reply(200, {});

    const response = await getSimilarArtists(id);

    expect(response?.data).toEqual({});
  });
});
