import React, { useMemo } from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import { useArtistContext } from '../../context/SavedArtistContext/SavedArtistContext';
import { BackgroundContainer } from '../GenreSearch/GenreSearch.styles';
import { Artist } from '../../interfaces/artist';

const FavoritesListView: React.FC = () => {
  const { artists } = useArtistContext();

  const content = useMemo(() => {
    return artists.length > 0 ? (
      <>
        <Typography variant='h4' color="primary" sx={{ marginBottom: '1em' }}>My saved artists:</Typography>
        <Grid container sx={{ width: '80%', overflow: 'hidden' }} spacing={4}>
          {artists.map((item: Artist) => (
            <Grid item lg={4} md={6} xs={12} key={item.id}>
              <ArtistCard artist={item} />
            </Grid>
          ))}
        </Grid>
      </>
    ) : (
      <Box display="flex" height="92vh" alignItems="center">
        <Typography variant='h4' color="secondary" textAlign="center">
          You don&apos;t have any saved artists :(
          <br />
          Click <Link href="/">here</Link> to start saving your favorite ones!
        </Typography>
      </Box>
    );
  }, [artists]);

  return (
    <BackgroundContainer>
      {content}
    </BackgroundContainer>
  );
};

export default FavoritesListView;
