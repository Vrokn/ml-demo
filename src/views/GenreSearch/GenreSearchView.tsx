import React, { useState, useCallback } from 'react';
import { Autocomplete, Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { getGenres, getArtistByGenre } from '../../connection';
import debounce from '../../utils/debounce';
import { BackgroundContainer, SearchContainer } from './GenreSearch.styles';
import Blobs from '../../components/Blobs/Blobs';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import { Genre } from '../../interfaces/genre';
import { Artist } from '../../interfaces/artist';

const GenreSearchView: React.FC = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [query, setQuery] = useState('');
  const [artists, setArtists] = useState([]);

  const search = useCallback(
    debounce((searchString: string) => {
      getGenres(searchString ?? query).then((response) => setGenres(response?.data.data));
    }, 500),
    []
  );

  const handleInputChange = (event: React.SyntheticEvent, value: string) => {
    setQuery(value);
    search(value);
  };

  const handleSelection = (event: React.SyntheticEvent, value: Genre | null) => {
    if (value) {
      getArtistByGenre(value.id).then((response) => {
        setArtists(response?.data.data);
      });
    }
  };

  return (
    <BackgroundContainer>
      <Blobs />
      <SearchContainer>
        <Autocomplete
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.id}>
                {option.name}
              </li>
            );
          }}
          id="genre-search"
          options={genres}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          getOptionLabel={(option) => option.name}
          onInputChange={handleInputChange}
          onChange={handleSelection}
          renderInput={(params) => (
            <TextField {...params} label="Search for a genre" variant="outlined" />
          )}
        />
      </SearchContainer>
      <Grid container sx={{ width: '80%', overflow: 'hidden' }} spacing={4}>
        {artists.map((item: Artist) => (
          <Grid item lg={4} md={6} xs={12} key={item.id}>
            <ArtistCard artist={item} />
          </Grid>
        ))}
      </Grid>
    </BackgroundContainer>
  );
};

export default GenreSearchView;
