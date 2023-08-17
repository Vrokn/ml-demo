import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { NAVIGATION_LINKS } from './AppBar.const';
import { Link } from 'react-router-dom';

export default function DrawerAppBar() {

  return (
    <AppBar position="static" color='inherit' >
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/">
          <img
            src="https://www.max.live/hs-fs/hubfs/black-lockup-72ppi-1.png?width=250&height=93&name=black-lockup-72ppi-1.png"
            height="50px"
            alt='logo'
          />
        </Link>
        <Box sx={{ display: 'flex', gap: '1em' }}>
          {NAVIGATION_LINKS.map((item) => (
            <Button key={item.to} href={item.to} variant='outlined'>
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}