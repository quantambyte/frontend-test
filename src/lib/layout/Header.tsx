'use client';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  Stack,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SensorsIcon from '@mui/icons-material/Sensors';

import LanguageIconButton from '@/assets/icons/LanguageIcon.svg';
import Image from 'next/image';
import Search from '../components/search';
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
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Stack direction='row' alignItems='center' gap={`${isMobile ? 1 : 20}`}>
          {isMobile && (
            <IconButton edge='start' color='inherit' sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant='h6'>LOGO</Typography>

          <Search />
        </Stack>
        <Box display='flex' gap={2} height={40}>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <IconButton color='inherit'>
              <SensorsIcon />
            </IconButton>

            <IconButton color='inherit'>
              <Image src={LanguageIconButton} alt='Language Icon' />
            </IconButton>

            <IconButton color='inherit'>
              <NotificationsNoneIcon />
            </IconButton>
            <IconButton color='inherit'>
              <LogoutIcon />
            </IconButton>
            <IconButton color='inherit'>
              <FullscreenIcon />
            </IconButton>
          </Box>

          <Box
            display='flex'
            alignItems='center'
            sx={{
              gap: 1,
              backgroundColor: 'lightgray',
              padding: 1,
              borderRadius: 99,
            }}
          >
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt='User Avatar'
              src='/static/images/avatar/1.jpg'
            />
            <IconButton color='inherit'>
              <SettingsIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
