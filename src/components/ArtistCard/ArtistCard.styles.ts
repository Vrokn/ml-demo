import styled from "@emotion/styled";

interface CardFrontProps {
  backgroundImage: string;
}

export const CardDescription = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1em',
  minHeight: '40vh',
  padding: '0 2em',
  width: "70vw",
  "@media (min-width: 768px)": {
    width: "70vw",
  },
  "@media (min-width: 900px)": {
    width: "28vw",
  },
  "@media (min-width: 1200px)": {
    width: "20vw",
  },
}));

export const CardFront = styled.div<CardFrontProps>(props => ({
  minHeight: '40vh',
  overflow: 'hidden',
  display: 'flex',
  flexGrow: '1',
  backgroundImage: `url(${props.backgroundImage})`,
  alignItems: 'end',
  justifyContent: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  borderRadius: '4px',
  padding: '0 2em',
  width: "70vw",
  "@media (min-width: 768px)": {
    width: "70vw",
  },
  "@media (min-width: 900px)": {
    width: "28vw",
  },
  "@media (min-width: 1200px)": {
    width: "20vw",
  },
}));
