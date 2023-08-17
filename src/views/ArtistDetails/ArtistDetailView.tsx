import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Chip, Link, Grid, LinearProgress, Button } from '@mui/material';
import { getArtistDetails, getSimilarArtists } from '../../connection';
import { useSnackbar } from '../../context/SnackbarContext/SnackbarContext';
import { useArtistContext } from '../../context/SavedArtistContext/SavedArtistContext';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { Artist } from '../../interfaces/artist';
import GenreChips from '../../components/GenreChips/GenreChips';
import { Genre } from '../../interfaces/genre';
import { ChipsContainer } from '../../components/GenreChips/GenreChips.styles';

const ArtistDetailView = () => {
  const { artistId } = useParams();
  const [artist, setArtist] = useState<Artist | null>(null);
  const [similarArtists, setSimilarArtists] = useState([]);
  const { artists, toggleArtist } = useArtistContext();

  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (artistId) {
      getArtistDetails(parseInt(artistId))
        .then((response) => {
          setArtist(response?.data.data?.[0]);
        })
        .catch((error) => {
          showSnackbar(error?.message, 'error');
          console.error('An error occurred while fetching artist details:', error);
        });
      getSimilarArtists(parseInt(artistId))
        .then((response) => {
          setSimilarArtists(response?.data.data);
        })
        .catch((error) => {
          showSnackbar(error?.message, 'error');
          console.error('An error occurred while fetching related artist details:', error);
        });
    }
  }, [artistId]);

  const primaryGenres = useMemo(() => {
    return artist?.genres.filter(item => item.is_primary) || [];
  }, [artist]);

  const secondaryGenres = useMemo(() => {
    return artist?.genres.filter(item => item.is_primary !== 1) || [];
  }, [artist]);

  const isPresent = (id: number) => artists.some(a => a.id === id);

  const handleClick = (artist: Artist) => {
    toggleArtist(artist);
  };

  return (
    <Box display="flex" flex={1} justifyContent="space-between">
      {(!artist || !similarArtists) && (<LinearProgress />)}
      <Box sx={{ padding: '2em', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {artist && (
          <Box display="flex" flexDirection="column" gap="1em"  >
            <Typography
              fontSize="3vw"
              fontWeight="bold"
              maxWidth="40vw"
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {artist.name.toLocaleUpperCase()} :
            </Typography>
            <img src={artist.image} alt={artist.name} style={{
              height: "55vh",
              width: '40vw',
              objectFit: 'cover',
              borderRadius: '4px'
            }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/400?text=No+image';
              }}
            />
            <Button
              children={isPresent(artist.id) ? "Remove" : "Add"}
              onClick={() => handleClick(artist)}
              startIcon={isPresent(artist.id) ? <StarIcon /> : <StarBorderIcon />}
              variant={isPresent(artist.id) ? "contained" : "outlined"}
            />
            {primaryGenres?.length > 0 && (
              <GenreChips
                genres={primaryGenres}
                label={"Primary genres"}
                color={"primary"}
              />
            )}
            {secondaryGenres?.length > 0 && (
              <GenreChips
                genres={secondaryGenres}
                label={"Additional genres"}
                color={"secondary"}
              />
            )}
            <ChipsContainer>
              <Typography variant="caption">Popularity score:</Typography>
              <Typography variant="h6" fontWeight="bold">{artist.popularity}</Typography>
            </ChipsContainer>
          </Box>
        )}
      </Box>
      {
        similarArtists.length > 0 && (<Box sx={{ overflow: 'auto', padding: '2em', maxHeight: '85vh', width: '60%' }} my={0.5}>
          <Typography variant='h5' color="secondary">Similar artists:</Typography>
          <Grid container>
            {similarArtists.map((similarArtist: Artist) => (
              <Grid item xl={6} sm={12} key={similarArtist.id}>
                <Box display="flex" gap="2em" alignItems="center" width="100%" my={1}>
                  <Box display="flex" flexDirection="column">
                    <img src={similarArtist.image} alt={similarArtist.name} style={{
                      height: '140px',
                      width: '140px',
                      objectFit: 'cover',
                      borderRadius: '4px'
                    }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/400?text=No+image';
                      }}
                    />
                    <Button
                      fullWidth
                      children={isPresent(similarArtist.id) ? "Remove" : "Add"}
                      onClick={() => handleClick(similarArtist)}
                      startIcon={isPresent(similarArtist.id) ? <StarIcon /> : <StarBorderIcon />}
                      variant={isPresent(similarArtist.id) ? "contained" : "outlined"}
                      size='small'
                    />
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <Typography variant="h6"><Link href={`/artist/${similarArtist.id}`}>{similarArtist.name}</Link></Typography>
                    <Typography variant="body2" color="secondary" >
                      Genres: {similarArtist.genres.map((genre: Genre) =>
                        <Chip
                          key={genre.id}
                          label={genre.name}
                          color='primary'
                          size="small"
                          variant='outlined'
                        />)}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        )}
    </Box >
  );
};

export default ArtistDetailView;
