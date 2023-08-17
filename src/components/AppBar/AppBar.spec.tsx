import React from 'react';
import { render } from '@testing-library/react';
import DrawerAppBar from './AppBar';
import { BrowserRouter } from 'react-router-dom';

describe('DrawerAppBar', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <DrawerAppBar />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
