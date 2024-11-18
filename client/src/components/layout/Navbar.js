import React, { useState } from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Button, 
    IconButton, 
    Box, 
    Menu, 
    MenuItem,
    Container,
    InputBase,
    Badge,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    styled
} from '@mui/material';
import {
    Menu as MenuIcon,
    Search as SearchIcon,
    Person as PersonIcon,
    Psychology as PsychologyIcon,
    LibraryBooks as LibraryIcon,
    People as CommunityIcon,
    Stars as SubscriptionIcon,
    Info as AboutIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchWrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
    borderRadius: theme.shape.borderRadius,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },
}));

const Navbar = () => {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const navItems = [
        { title: 'Practice', icon: <PsychologyIcon />, path: '/practice' },
        { title: 'Learning', icon: <LibraryIcon />, path: '/learning' },
        { title: 'Community', icon: <CommunityIcon />, path: '/community' },
        { title: 'Subscription', icon: <SubscriptionIcon />, path: '/subscription' },
        { title: 'About', icon: <AboutIcon />, path: '/about' }
    ];

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: 'white', color: 'black' }}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMobileMenuToggle}
                            sx={{ display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ 
                                flexGrow: { xs: 1, md: 0 }, 
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                mr: 4
                            }}
                            onClick={() => navigate('/')}
                        >
                            PsychPrep
                        </Typography>

                        {/* Desktop Navigation */}
                        <Box sx={{ 
                            display: { xs: 'none', md: 'flex' }, 
                            flexGrow: 1,
                            gap: 2 
                        }}>
                            {navItems.map((item) => (
                                <Button 
                                    key={item.title}
                                    color="inherit" 
                                    onClick={() => navigate(item.path)}
                                    startIcon={item.icon}
                                    sx={{ 
                                        textTransform: 'none',
                                        fontWeight: 500,
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.04)'
                                        }
                                    }}
                                >
                                    {item.title}
                                </Button>
                            ))}
                        </Box>

                        <SearchWrapper>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search questions, resources..."
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </SearchWrapper>

                        <Box sx={{ display: 'flex' }}>
                            <IconButton 
                                color="inherit"
                                onClick={handleProfileMenuOpen}
                            >
                                <PersonIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Menu Drawer */}
            <Drawer
                anchor="left"
                open={mobileMenuOpen}
                onClose={handleMobileMenuToggle}
            >
                <Box sx={{ width: 250, pt: 2 }}>
                    <List>
                        {navItems.map((item) => (
                            <ListItem 
                                key={item.title}
                                button 
                                onClick={() => { 
                                    navigate(item.path); 
                                    handleMobileMenuToggle(); 
                                }}
                            >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            {/* Profile Menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                    elevation: 3,
                    sx: { mt: 1 }
                }}
            >
                <MenuItem onClick={() => { navigate('/profile'); handleMenuClose(); }}>
                    My Profile
                </MenuItem>
                <MenuItem onClick={() => { navigate('/settings'); handleMenuClose(); }}>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default Navbar; 