import React from 'react';
import { 
    Container, 
    Typography, 
    Paper, 
    Box,
    Switch,
    FormControlLabel,
    Divider,
    Button
} from '@mui/material';

const Settings = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Settings
            </Typography>
            <Paper sx={{ p: 3 }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Notifications
                    </Typography>
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Email notifications"
                    />
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Practice reminders"
                    />
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Privacy
                    </Typography>
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Show profile to other users"
                    />
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Share progress statistics"
                    />
                </Box>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                        Account
                    </Typography>
                    <Button variant="outlined" color="primary" sx={{ mr: 2 }}>
                        Change Password
                    </Button>
                    <Button variant="outlined" color="error">
                        Delete Account
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Settings; 