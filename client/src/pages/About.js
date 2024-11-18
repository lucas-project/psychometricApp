import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const About = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom>
                About PsychPrep
            </Typography>
            <Paper sx={{ p: 4, mt: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Our Mission
                </Typography>
                <Typography variant="body1" paragraph>
                    PsychPrep is dedicated to helping job seekers excel in psychometric tests through comprehensive practice materials and innovative learning tools.
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                    What We Offer
                </Typography>
                <Typography variant="body1" paragraph>
                    • Comprehensive practice tests covering all major psychometric assessment types<br />
                    • Expert-curated learning resources and study guides<br />
                    • Interactive community platform for peer support<br />
                    • Personalized progress tracking and analytics
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                    Our Team
                </Typography>
                <Typography variant="body1" paragraph>
                    Our team consists of experienced psychologists, HR professionals, and education specialists dedicated to providing the best preparation resources for psychometric testing.
                </Typography>
            </Paper>
        </Container>
    );
};

export default About; 