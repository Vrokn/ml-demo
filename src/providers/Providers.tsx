import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ArtistProvider } from "../context/SavedArtistContext/SavedArtistContext";
import { SnackbarProvider } from "../context/SnackbarContext/SnackbarContext";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material";

export const Providers = ({ children }: { children: ReactNode; }) => {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <ArtistProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </ArtistProvider>
      </SnackbarProvider>
    </BrowserRouter>
  );
};
