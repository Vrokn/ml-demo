import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import { Box } from "@mui/material";
import { useArtistContext } from "../../context/SavedArtistContext/SavedArtistContext";
import { Artist } from "../../interfaces/artist";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = (props: ArtistCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  const { artist } = props;
  const { artists, toggleArtist } = useArtistContext();

  const handleClick = () => {
    toggleArtist(artist);
  };

  const isPresent = artists.some(a => a.id === artist.id);

  const primaryGenres = artist.genres.filter(item => item.is_primary);
  const secondaryGenres = artist.genres.filter(item => item.is_primary !== 1);

  return (
    <Box
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      display="flex"
    >
      <a.div
        style={{
          willChange: 'transform, opacity',
          position: "relative",
          opacity: opacity.to((o) => 1 - o),
          transform,
          flex: 1,
        }}
      >
        <FrontCard name={artist.name} image={artist.image} />
      </a.div>
      <a.div
        style={{
          willChange: 'transform, opacity',
          position: "absolute",
          opacity,
          transform,
          rotateX: "180deg",
          flex: 1,
        }}
      >
        <BackCard
          artist={artist}
          primaryGenres={primaryGenres}
          secondaryGenres={secondaryGenres}
          isPresent={isPresent}
          handleClick={handleClick}
        />
      </a.div >
    </Box >
  );
};

export default ArtistCard;
