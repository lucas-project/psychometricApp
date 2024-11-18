import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';

const Community = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Community
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Discussion Forum
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Connect with other test-takers, share experiences, and discuss strategies.
                                (Coming Soon)
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Study Groups
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Join or create study groups to prepare together.
                                (Coming Soon)
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Community; 