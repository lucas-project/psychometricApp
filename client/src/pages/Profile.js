import React from 'react';
import { Container, Typography } from '@mui/material';

const Profile = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        My Profile
      </Typography>
      <Typography variant="body1">
        Coming soon: User profile and progress tracking.
      </Typography>
    </Container>
  );
};

export default Profile; 