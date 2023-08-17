import React from "react";
import { Typography } from "@mui/material";
import { CardFront } from "./ArtistCard.styles";

const FrontCard = ({ name, image }: { name: string; image: string; }) => (
  <CardFront backgroundImage={image}>
    <Typography
      variant="h3"
      style={{
        textShadow: '0px 0px 20px black',
        WebkitTextStroke: '2px rgb(0,0,0,0.1)',
        color: 'white',
        fontWeight: "bold",
        padding: '0.7em 0',
        textAlign: 'center'
      }}
    >
      {name.toLocaleUpperCase()}
    </Typography>
  </CardFront>
);

export default FrontCard;