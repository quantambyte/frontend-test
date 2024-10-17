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
      position='fixed'
      sx={{
        backgroundColor: '#fff',
        color: '#000',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
        zIndex: 9999,
      }}
    >
      <Toolbar sx={{ display: 'flex' }}>
        <Stack direction='row' alignItems='center' width={'280px'}>
          {isMobile && (
            <IconButton edge='start' color='inherit' sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          )}

          <Typography variant='h6'>LOGO</Typography>
        </Stack>
        <Box
          display='flex'
          justifyContent='space-between'
          gap={2}
          height={40}
          width={1}
        >
          <Search />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}
