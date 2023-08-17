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
  width: '20vw',
}));

export const CardFront = styled.div<CardFrontProps>(props => ({
  width: '100%',
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
}));
