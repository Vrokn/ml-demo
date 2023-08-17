import React, { useMemo } from 'react';
import { ImageList, Link, Typography } from '@mui/material';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import { useArtistContext } from '../../context/SavedArtistContext/SavedArtistContext';
import { BackgroundContainer } from '../GenreSearch/GenreSearch.styles';
import { Artist } from '../../interfaces/artist';

const FavoritesListView: React.FC = () => {
  const { artists } = useArtistContext();

  const content = useMemo(() => {
    return artists.length > 0 ? (
      <>
        <Typography variant='h4' color="primary">My saved artists:</Typography>
        <ImageList sx={{ width: '80%', height: '100%', overflow: 'hidden' }} variant="woven" cols={3} gap={50}>
          {artists.map((item: Artist) => (
            <ArtistCard key={item.id} artist={item} />
          ))}
        </ImageList>
      </>
    ) : (
      <Typography variant='h4' color="secondary" textAlign="center">
        You don't have any saved artists :(
        <br />
        Click <Link href="/">here</Link> to start saving your favorite ones!
      </Typography>
    );
  }, [artists]);

  return (
    <BackgroundContainer>
      {content}
    </BackgroundContainer>
  );
};

export default FavoritesListView;
