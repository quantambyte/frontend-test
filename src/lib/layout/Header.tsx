'use client';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar
      position='sticky'
      sx={{
        backgroundColor: '#fff',
        color: '#000',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
        zIndex: 9999,
      }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton edge='start' color='inherit' sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          Products
        </Typography>
        <Box display='flex' gap={2}>
          <IconButton color='inherit'>
            <NotificationsIcon />
          </IconButton>
          <IconButton color='inherit'>
            <LanguageIcon />
          </IconButton>
          <IconButton color='inherit'>
            <SettingsIcon />
          </IconButton>
          <Avatar alt='User Avatar' src='/static/images/avatar/1.jpg' />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
