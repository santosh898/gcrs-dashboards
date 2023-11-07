import { MdMenu } from 'react-icons/md';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const navRoutes = [
  {
    name: 'Example 1',
    path: 'example-1',
  },
  {
    name: 'Example 2',
    path: 'example-2',
  },
];

const Root = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box>
      <Sheet invertedColors variant="solid" color="primary">
        <Stack direction="row" spacing={2} sx={{ p: 2 }}>
          <IconButton variant="soft" onClick={() => setIsDrawerOpen(true)}>
            <MdMenu />
          </IconButton>
          <Typography level="h2">Water Stewardship</Typography>
        </Stack>
      </Sheet>
      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box
          role="presentation"
          onClick={() => setIsDrawerOpen(false)}
          onKeyDown={() => setIsDrawerOpen(false)}
        >
          <List>
            {navRoutes.map((route) => (
              <ListItem key={route.path}>
                <ListItemButton component={Link} to={route.path}>
                  {route.name}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Outlet />
    </Box>
  );
};

export default Root;
