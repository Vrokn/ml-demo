
import React from 'react';
import { keyframes } from '@emotion/react';
import { Box } from '@mui/material';

const bounce1 = keyframes`
  0%, 100% { transform: scale(1) translate(0,0) skew(0deg, 0deg); }
  50% { transform: scale(1.3) translate(-100px, -100px) skew(2deg, 1deg); }
`;

const bounce2 = keyframes`
  0%, 100% { transform: scale(1) translate(0,0) skew(0deg, 0deg); }
  50% { transform: scale(0.9) translate(-100px, -80px) skew(-2deg, -1deg); }
`;

const bounce3 = keyframes`
  0%, 100% { transform: scale(1) translate(0,0) skew(0deg, 0deg); }
  50% { transform: scale(1.2) translate(50px, 50px) skew(1deg, 0deg); }
`;

const bounce4 = keyframes`
  0%, 100% { transform: scale(1) translate(0,0) skew(0deg, 0deg); }
  33% { transform: scale(0.8) translate(-50px, -250px) skew(-1deg, 0deg); }
  66% { transform: scale(1.3) translate(-40px, 100px) skew(0deg, -1deg); }
`;

const bounce5 = keyframes`
  0%, 100% { transform: scale(1) translate(0,0) skew(0deg, 0deg); }
  33% { transform: scale(0.9) translate(250px, -50px) skew(3deg, 2deg); }
  66% { transform: scale(1.4) translate(150px, 30px) skew(2deg, 3deg); }
`;

const Blobs: React.FC = () => {
  return (
    <>
      <Box
        borderRadius="50%"
        height="450px"
        width="450px"
        top="200px"
        right="10%"
        sx={{
          filter: 'blur(50px)',
          backgroundColor: "#B7AFD4",
          animation: `${bounce1} 7s ease infinite`,
          mixBlendMode: 'multiply',
          opacity: '0.5',
        }}
        position="fixed"
      />
      <Box
        borderRadius="50%"
        height="450px"
        width="450px"
        top="220px"
        left="10%"
        sx={{
          filter: 'blur(50px)',
          backgroundColor: "#F1798C",
          animation: `${bounce2} 8s ease infinite`,
          mixBlendMode: 'multiply',
          opacity: '0.5',
        }}
        position="fixed"
      />
      <Box
        borderRadius="50%"
        height="450px"
        width="450px"
        top="270px"
        right="20%"
        sx={{
          filter: 'blur(50px)',
          backgroundColor: "#E8183A",
          animation: `${bounce3} 9s ease infinite`,
          mixBlendMode: 'multiply',
          opacity: '0.5',
        }}
        position="fixed"
      />
      <Box
        borderRadius="50%"
        height="450px"
        width="450px"
        top="250px"
        left="20%"
        sx={{
          filter: 'blur(50px)',
          backgroundColor: "#140077",
          animation: `${bounce4} 10s ease infinite`,
          mixBlendMode: 'multiply',
          opacity: '0.5',
        }}
        position="fixed"
      />
      <Box
        borderRadius="50%"
        height="450px"
        width="450px"
        top="320px"
        left="30%"
        sx={{
          filter: 'blur(50px)',
          backgroundColor: "#7766AF",
          animation: `${bounce5} 11s ease infinite`,
          mixBlendMode: 'multiply',
          opacity: '0.5',
        }}
        position="fixed"
      />
    </>
  );
};

export default Blobs;