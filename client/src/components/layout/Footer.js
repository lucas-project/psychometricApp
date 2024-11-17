import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    Divider,
    IconButton,
    Stack
} from '@mui/material';
import {
    Facebook,
    Twitter,
    Instagram,
    LinkedIn
} from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'white',
                color: 'black',
                py: 6,
                mt: 'auto'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Practice
                        </Typography>
                        <Link href="/practice/numerical" color="inherit" display="block" sx={{ mb: 1 }}>
                            Numerical Reasoning
                        </Link>
                        <Link href="/practice/verbal" color="inherit" display="block" sx={{ mb: 1 }}>
                            Verbal Reasoning
                        </Link>
                        <Link href="/practice/logical" color="inherit" display="block" sx={{ mb: 1 }}>
                            Logical Reasoning
                        </Link>
                        <Link href="/practice/personality" color="inherit" display="block" sx={{ mb: 1 }}>
                            Personality Assessment
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Learning
                        </Typography>
                        <Link href="/learning/tips" color="inherit" display="block" sx={{ mb: 1 }}>
                            Test Tips
                        </Link>
                        <Link href="/learning/guides" color="inherit" display="block" sx={{ mb: 1 }}>
                            Study Guides
                        </Link>
                        <Link href="/learning/resources" color="inherit" display="block" sx={{ mb: 1 }}>
                            Resources
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Support
                        </Typography>
                        <Link href="/contact" color="inherit" display="block" sx={{ mb: 1 }}>
                            Contact Us
                        </Link>
                        <Link href="/faq" color="inherit" display="block" sx={{ mb: 1 }}>
                            FAQ
                        </Link>
                        <Link href="/privacy" color="inherit" display="block" sx={{ mb: 1 }}>
                            Privacy Policy
                        </Link>
                        <Link href="/terms" color="inherit" display="block" sx={{ mb: 1 }}>
                            Terms of Service
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Connect With Us
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <IconButton color="inherit">
                                <Facebook />
                            </IconButton>
                            <IconButton color="inherit">
                                <Twitter />
                            </IconButton>
                            <IconButton color="inherit">
                                <Instagram />
                            </IconButton>
                            <IconButton color="inherit">
                                <LinkedIn />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} PsychPrep. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer; 