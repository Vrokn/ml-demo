import React from "react";
import { CardDescription } from "./ArtistCard.styles";
import { Button, Link, Typography } from "@mui/material";
import GenreChips from "../GenreChips/GenreChips";
import { Artist } from "../../interfaces/artist";
import { Genre } from "../../interfaces/genre";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

interface BackCardProps {
  artist: Artist;
  primaryGenres: Genre[];
  secondaryGenres: Genre[];
  isPresent: boolean;
  handleClick: () => void;
}

const BackCard = ({ artist, primaryGenres, secondaryGenres, isPresent, handleClick }: BackCardProps) => (
  <CardDescription>
    <Link href={`/artist/${artist.id}`}>
      <Typography variant="h6" color='primary' fontWeight="bold">
        {artist.name.toLocaleUpperCase()}
      </Typography>
    </Link>
    {primaryGenres.length > 0 && (
      <GenreChips
        genres={primaryGenres}
        label={"Primary"}
        color={"primary"}
      />
    )}
    {secondaryGenres.length > 0 && (
      <GenreChips
        genres={secondaryGenres}
        label={"Secondary"}
        color={"secondary"}
      />
    )}
    <Button
      children={isPresent ? "Remove" : "Add"}
      onClick={handleClick}
      startIcon={isPresent ? <StarIcon /> : <StarBorderIcon />}
      variant={isPresent ? "contained" : "outlined"}
    />
  </CardDescription>
);

export default BackCard;