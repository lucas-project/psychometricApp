import React from 'react';
import { Box, Typography, Container, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome to Psychometric Practice
        </Typography>
        <Typography variant="h5" component="h2" sx={{ mb: 4 }}>
          Prepare for your dream job with our comprehensive psychometric tests
        </Typography>
        <Grid container spacing={3}>
          <Grid item>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              onClick={() => navigate('/practice')}
            >
              Start Practice
            </Button>
          </Grid>
          <Grid item>
            <Button 
              variant="outlined" 
              color="primary" 
              size="large"
              onClick={() => navigate('/learning')}
            >
              Learning Resources
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home; 