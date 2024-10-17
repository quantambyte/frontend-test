'use client';

import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
import { SidebarContainer, LogoWrapper } from './style';

import NestedList from '../components/nestedList';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BarChartIcon from '@mui/icons-material/BarChart';
import ReportIcon from '@mui/icons-material/Report';

const drawerWidth = 240;

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    {
      id: '1',
      text: 'Dashboard',
      icon: <DashboardIcon />,
      children: [
        {
          id: '1-1',
          text: 'Sales Overview',
          route: '/sales',
          icon: <BarChartIcon />,
        },
        {
          id: '1-2',
          text: 'Revenue Analytics',
          route: '/revenue',
          icon: <AssessmentIcon />,
        },
        {
          id: '1-3',
          text: 'Product Performance',
          route: '/products',
          icon: <ShoppingCartIcon />,
        },
      ],
    },
    {
      id: '2',
      text: 'Management',
      icon: <PeopleIcon />,
      children: [
        { id: '2-1', text: 'Users', route: '/users', icon: <PeopleIcon /> },
        { id: '2-2', text: 'Teams', route: '/teams', icon: <PeopleIcon /> },
        {
          id: '2-3',
          text: 'Settings',
          route: '/settings',
          icon: <SettingsIcon />,
        },
      ],
    },
    {
      id: '3',
      text: 'Reports',
      icon: <ReportIcon />,
      children: [
        {
          id: '3-1',
          text: 'Sales Reports',
          route: '/reports/sales',
          icon: <BarChartIcon />,
        },
        {
          id: '3-2',
          text: 'Performance Reports',
          route: '/reports/performance',
          icon: <AssessmentIcon />,
        },
        {
          id: '3-3',
          text: 'Revenue Reports',
          route: '/reports/revenue',
          icon: <AssessmentIcon />,
        },
      ],
    },
  ];

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
                <NestedList
                  key={item.id}
                  text={item.text}
                  icon={item.icon}
                  children={item.children}
                />
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
                  <NestedList
                    key={item.id}
                    text={item.text}
                    icon={item.icon}
                    children={item.children}
                  />
                ))}
              </List>
            </SidebarContainer>
          </Drawer>
        </>
      )}
    </Box>
  );
}
