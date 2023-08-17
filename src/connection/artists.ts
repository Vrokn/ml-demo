import { apiCall } from './api';

export const searchArtists = (query: string, limit?: number) => {
  return apiCall({
    method: 'GET',
    url: '/api/v1/music/artists',
    params: { q: query, limit },
  });
};

export const getArtistDetails = (id: number) => {
  return apiCall({
    method: 'GET',
    url: `/api/v1/music/artists/${id}`,
  });
};

export const getSimilarArtists = (id: number) => {
  return apiCall({
    method: 'GET',
    url: `/api/v1/music/artists/${id}/similar`,
  });
};
// Other artist-related functions
