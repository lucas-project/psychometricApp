import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActionArea } from '@mui/material';

const Practice = () => {
  const questionTypes = [
    {
      title: 'Numerical Reasoning',
      description: 'Practice mathematical and statistical problems',
      path: '/practice/numerical'
    },
    {
      title: 'Verbal Reasoning',
      description: 'Enhance your comprehension and analytical skills',
      path: '/practice/verbal'
    },
    {
      title: 'Logical Reasoning',
      description: 'Test your problem-solving abilities',
      path: '/practice/logical'
    },
    {
      title: 'Personality Assessment',
      description: 'Understand your workplace behavior',
      path: '/practice/personality'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Practice Tests
      </Typography>
      <Grid container spacing={3}>
        {questionTypes.map((type) => (
          <Grid item xs={12} sm={6} md={4} key={type.title}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {type.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {type.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Practice; 