import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';

const plans = [
    {
        title: 'Free',
        price: '$0',
        features: [
            'Basic practice questions',
            'Limited access to resources',
            'Community access'
        ]
    },
    {
        title: 'Premium',
        price: '$9.99/month',
        features: [
            'All practice questions',
            'Full access to resources',
            'Community access',
            'Progress tracking',
            'Personalized feedback'
        ]
    },
    {
        title: 'Pro',
        price: '$19.99/month',
        features: [
            'Everything in Premium',
            'One-on-one mentoring',
            'Mock interviews',
            'Career guidance',
            'Priority support'
        ]
    }
];

const Subscription = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Choose Your Plan
            </Typography>
            <Grid container spacing={4} sx={{ mt: 2 }}>
                {plans.map((plan) => (
                    <Grid item xs={12} md={4} key={plan.title}>
                        <Card 
                            sx={{ 
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                '&:hover': {
                                    boxShadow: 6
                                }
                            }}
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h4" component="h2" gutterBottom>
                                    {plan.title}
                                </Typography>
                                <Typography variant="h3" component="div" color="primary" gutterBottom>
                                    {plan.price}
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    {plan.features.map((feature, index) => (
                                        <Typography key={index} variant="body1" sx={{ mt: 1 }}>
                                            • {feature}
                                        </Typography>
                                    ))}
                                </Box>
                            </CardContent>
                            <Box sx={{ p: 2 }}>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    fullWidth
                                    size="large"
                                >
                                    Choose {plan.title}
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Subscription; 