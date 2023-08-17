import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import DrawerAppBar from './components/AppBar/AppBar';
import { LinearProgress } from '@mui/material';

const GenreSearchView = lazy(() => import('./views/GenreSearch/GenreSearchView'));
const ArtistDetailView = lazy(() => import('./views/ArtistDetails/ArtistDetailView'));
const FavoritesListView = lazy(() => import('./views/FavoritesList/FavoritesListView'));

export function App() {

  return (
    <>
      <DrawerAppBar />
      <Suspense fallback={<LinearProgress color="secondary" />}>
        <Routes>
          <Route path="/" Component={GenreSearchView} />
          <Route path="/artist/:artistId" Component={ArtistDetailView} />
          <Route path="/favorites" Component={FavoritesListView} />
        </Routes>
      </Suspense>
    </>
  );
}
