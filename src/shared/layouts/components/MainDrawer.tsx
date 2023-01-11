import React from 'react';
import {DRAWER_WIDTH} from "@/shared/constants";
import {
  Box,
  ListItemButton,
  Divider,
  Drawer,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {styled} from "@mui/material/styles";
import Logo from '@/assets/icons/vision-icon.png'
import {NAVBAR_ITEMS} from "@/shared/utils/mock/menuItems";
import {useLocation, useNavigate} from "react-router-dom";

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
  const location = useLocation()
  const navigate = useNavigate();

  const goTo = (url: string) => {
    navigate(url)
    handleDrawerChange()
  }

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
        <Box component='img' onClick={() => goTo('/')} src={Logo} width={60}/>
        <Typography variant='h4'>Bienvenido/a</Typography>
        <IconButton onClick={handleDrawerChange}>
          <CloseIcon/>
        </IconButton>
      </DrawerHeader>
      <Divider/>
      <List>
        {NAVBAR_ITEMS.map(element => (
          <ListItem
            disablePadding
            key={element.value}
            sx={{
              ...(location.pathname === element.path && {
                backgroundColor: 'primary.lighter',
              })
            }}>
            <ListItemButton sx={{ p: 2 }} onClick={() => goTo(element.path)}>
              <ListItemText
                primary={element.label}
                sx={{
                  ...(location.pathname === element.path && {
                    color: 'primary.main',
                  })
                }}
                primaryTypographyProps={{fontWeight: location.pathname === element.path ? 'bold' : 'regular'}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
