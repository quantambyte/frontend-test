import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Link from 'next/link';

interface INestedListProps {
  text: string;
  icon: React.ReactNode;
  children?: Array<{
    text: string;
    route: string;
    icon: React.ReactNode;
    id: string;
  }>;
}

export default function NestedList({ text, icon, children }: INestedListProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        {children ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItemButton>
      {children && (
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {children.map((child) => (
              <Link
                href={child.route}
                key={child.id}
                passHref
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>{child.icon}</ListItemIcon>
                  <ListItemText primary={child.text} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Collapse>
      )}
    </List>
  );
}
