import React from 'react';
import { Container, Typography } from '@mui/material';

const Learning = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Learning Resources
      </Typography>
      <Typography variant="body1">
        Coming soon: Tips and resources to help you ace your psychometric tests.
      </Typography>
    </Container>
  );
};

export default Learning; 