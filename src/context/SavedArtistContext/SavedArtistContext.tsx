import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Artist } from '../../interfaces/artist';
import { useSnackbar } from '../SnackbarContext/SnackbarContext';

interface ArtistProviderProps {
  children: ReactNode;
}

interface ArtistContextValue {
  artists: Artist[];
  toggleArtist: (artist: Artist) => void;
}

export const ArtistContext = createContext<ArtistContextValue | undefined>(undefined);

export const ArtistProvider: React.FC<ArtistProviderProps> = (props) => {
  const artistData = localStorage.getItem('artists');
  const initialArtists: Artist[] = artistData ? JSON.parse(artistData) : [];
  const [artists, setArtists] = useState<Artist[]>(initialArtists);

  useEffect(() => {
    localStorage.setItem('artists', JSON.stringify(artists));
  }, [artists]);
  const { showSnackbar } = useSnackbar();

  const toggleArtist = (artist: Artist) => {
    setArtists((prevArtists) => {
      if (prevArtists.some((a) => a.id === artist.id)) {
        showSnackbar('Removed artist', 'warning');
        return prevArtists.filter((a) => a.id !== artist.id);
      } else {
        showSnackbar('Added artist', 'success');
        return [...prevArtists, artist];
      }
    });
  };

  return (
    <ArtistContext.Provider value={{ artists, toggleArtist }}>
      {props.children}
    </ArtistContext.Provider>
  );
};

export const useArtistContext = () => {
  const context = React.useContext(ArtistContext);
  if (context === undefined) {
    throw new Error('useArtistContext must be used within an ArtistContext.Provider');
  }
  return context;
};
