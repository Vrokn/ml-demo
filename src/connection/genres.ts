import { apiCall } from './api';

export const getGenres = (query: string, limit?: number) => {
  return apiCall({
    method: 'GET',
    url: '/api/v1/music/genres',
    params: { q: query, limit },
  });
};

export const getArtistByGenre = (id: number) => {
  return apiCall({
    method: 'GET',
    url: `/api/v1/music/genres/${id}/artists`,
  });
};
