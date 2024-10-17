import styled from '@emotion/styled';
import { Box, ListItem } from '@mui/material';

const drawerWidth = 240;

export const SidebarContainer = styled(Box)`
  width: ${drawerWidth}px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
`;

export const LogoWrapper = styled(Box)`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
`;

export const SidebarItem = styled(ListItem)`
  padding-left: 16px;
  &:hover {
    background-color: #f0f0f0;
  }
`;
