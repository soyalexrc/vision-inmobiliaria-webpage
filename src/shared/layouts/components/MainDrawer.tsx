import React from 'react';
import {DRAWER_WIDTH} from "@/shared/constants";
import {Box, Button, Divider, Drawer, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {styled} from "@mui/material/styles";

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface MainDrawerProps {
  handleDrawerChange: () => void,
  open: boolean
}

export default function MainDrawer({open, handleDrawerChange}: MainDrawerProps) {
  return (
    <Drawer
      variant="temporary"
      ModalProps={{keepMounted: true}}
      onClose={handleDrawerChange}
      open={open}
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}>
      <DrawerHeader
        sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 2rem'}}>
        <Box>
          logo here
        </Box>
        <IconButton onClick={handleDrawerChange}>
          <CloseIcon/>
        </IconButton>
      </DrawerHeader>
      <Divider/>
      <Box display='flex' flexDirection='column' justifyContent='space-between'>
        {/*<MenuItems fn={() => setOpen(false)}/>*/}
        <Box my={5} display='flex'>
          <Button variant='text' onClick={() => {
          }} color='secondary'>Cerrar sesión</Button>
        </Box>
      </Box>
    </Drawer>
  )
}
