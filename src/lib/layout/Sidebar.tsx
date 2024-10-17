'use client';

import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItemText,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
import { SidebarContainer, LogoWrapper, SidebarItem } from './style';

import AccountTreeIcon from '@mui/icons-material/AccountTree';

const drawerWidth = 240;

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();

  const menuItems = [
    { text: 'Analytics', route: '/', icon: <AccountTreeIcon /> },
    { text: 'Project', route: '/' },
  ];

  const handleNavigation = (route: string) => {
    router.push(route);
    setIsOpen(false);
  };

  return (
    <Box data-testid='sidebar-box'>
      {!isMobile && (
        <Drawer
          variant='permanent'
          anchor='left'
          open
          sx={{ width: drawerWidth, flexShrink: 0 }}
          PaperProps={{ sx: { width: drawerWidth } }}
          data-testid='desktop-drawer'
        >
          <SidebarContainer data-testid='sidebar-container'>
            <LogoWrapper data-testid='logo-wrapper'>
              <Typography variant='h6' data-testid='logo-text'>
                LOGO
              </Typography>
            </LogoWrapper>
            <List data-testid='menu-list'>
              {menuItems.map((item) => (
                <SidebarItem
                  key={item.text}
                  onClick={() => handleNavigation(item.route)}
                  data-testid={`menu-item-${item.text.toLowerCase()}`}
                >
                  <ListItemText primary={item.text} />
                </SidebarItem>
              ))}
            </List>
          </SidebarContainer>
        </Drawer>
      )}

      {isMobile && (
        <>
          <IconButton
            onClick={() => setIsOpen(true)}
            sx={{
              position: 'absolute',
              top: 16,
              left: 16,
            }}
            data-testid='menu-icon-button'
          >
            <MenuIcon data-testid='menu-icon' />
          </IconButton>
          <Drawer
            anchor='left'
            open={isOpen}
            onClose={() => setIsOpen(false)}
            PaperProps={{ sx: { width: drawerWidth } }}
            data-testid='mobile-drawer'
          >
            <SidebarContainer data-testid='sidebar-container'>
              <LogoWrapper data-testid='logo-wrapper'>
                <Typography variant='h6' data-testid='logo-text'>
                  LOGO
                </Typography>
              </LogoWrapper>
              <List data-testid='menu-list'>
                {menuItems.map((item) => (
                  <SidebarItem
                    key={item.text}
                    onClick={() => handleNavigation(item.route)}
                    data-testid={`menu-item-${item.text.toLowerCase()}`}
                  >
                    <ListItemText primary={item.text} />
                  </SidebarItem>
                ))}
              </List>
            </SidebarContainer>
          </Drawer>
        </>
      )}
    </Box>
  );
}
