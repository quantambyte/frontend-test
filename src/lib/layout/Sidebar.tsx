'use client';

import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';

const drawerWidth = 240;

const SidebarContainer = styled(Box)`
  width: ${drawerWidth}px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
`;

const LogoWrapper = styled(Box)`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
`;

const SidebarItem = styled(ListItem)`
  padding-left: 16px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();

  const menuItems = [
    { text: 'Analytics', route: '/' },
    { text: 'Project', route: '/' },
  ];

  const handleNavigation = (route: string) => {
    router.push(route);
    setIsOpen(false);
  };

  return (
    <Box>
      {/* Sidebar for larger screens */}
      {!isMobile && (
        <Drawer
          variant='permanent'
          anchor='left'
          open
          sx={{ width: drawerWidth, flexShrink: 0 }}
          PaperProps={{ sx: { width: drawerWidth } }}
        >
          <SidebarContainer>
            <LogoWrapper>
              <Typography variant='h6'>LOGO</Typography>
            </LogoWrapper>
            <List>
              {menuItems.map((item) => (
                <SidebarItem
                  key={item.text}
                  onClick={() => handleNavigation(item.route)}
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
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor='left'
            open={isOpen}
            onClose={() => setIsOpen(false)}
            PaperProps={{ sx: { width: drawerWidth } }}
          >
            <SidebarContainer>
              <LogoWrapper>
                <Typography variant='h6'>LOGO</Typography>
              </LogoWrapper>
              <List>
                {menuItems.map((item) => (
                  <SidebarItem
                    key={item.text}
                    onClick={() => handleNavigation(item.route)}
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
