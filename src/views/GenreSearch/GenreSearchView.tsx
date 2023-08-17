import React, { useState, useCallback } from 'react';
import { Autocomplete, AutocompleteRenderOptionState, Box, ImageList } from '@mui/material';
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

  // Debounce the search function so it only triggers after the user stops typing for 500ms
  const search = useCallback(
    debounce((query: string) => {
      getGenres(query).then((response) => setGenres(response?.data.data));
    }, 500),
    []
  );

  const handleInputChange = (event: React.SyntheticEvent, value: string) => {
    setQuery(value);
    search(value); // Trigger the debounced search
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
      <ImageList sx={{ width: '80%', height: '100%', overflow: 'hidden' }} variant="woven" cols={3} gap={50}>
        {artists?.map((item: Artist) => (
          <ArtistCard key={item.id} artist={item} />
        ))}
      </ImageList>
    </BackgroundContainer>
  );
};

export default GenreSearchView;
