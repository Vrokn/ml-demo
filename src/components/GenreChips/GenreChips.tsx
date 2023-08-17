import React from "react";
import { ChipsContainer } from "./GenreChips.styles";
import { Chip, Typography } from "@mui/material";
import { Genre } from "../../interfaces/genre";

const GenreChips = ({ genres, label, color }: { genres: Genre[]; label: string; color: 'primary' | 'secondary'; }) => (
  <ChipsContainer>
    <Typography variant="caption">{label}:</Typography>
    {genres.map((genre: Genre) => (
      <Chip key={genre.id} label={genre.name} color={color} />
    ))}
  </ChipsContainer>
);

export default GenreChips;