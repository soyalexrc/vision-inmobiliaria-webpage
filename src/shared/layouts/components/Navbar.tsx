import React from 'react';
import {Box, IconButton, Toolbar} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {APP_BAR_DESKTOP, APP_BAR_MOBILE} from '@/shared/constants'
import {NAVBAR_ITEMS} from '@/shared/utils/mock/menuItems'
import useOffSetTop from "@/shared/hooks/useOffsetTop";
import Logo from '@/assets/icons/induo-logo.png';
import {Link, useLocation} from "react-router-dom";

interface props {
  theme?: any,
  open?: boolean
}

const AppBar = styled(MuiAppBar)(({theme}: props) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const ToolbarShadowStyle = styled("div")(({theme}: props) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: "auto",
  borderRadius: "50%",
  position: "absolute",
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

const ToolbarStyle = styled(Toolbar)(({theme}) => ({
  display: 'block',
  height: APP_BAR_MOBILE / 2,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP / 2,
  },
}));

const MenuElement = styled(Link)(({theme}) => ({
  color: 'black',
  height: '100%',
  margin: '0 1rem',
  cursor: 'pointer',
  transition: 'color 200ms ease, border 200ms ease',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '3px solid transparent',
  "&:hover": {
    color: 'red',
    borderBottomColor: 'red'
  }
}))

interface NavparProps {
  open: boolean,
  largeScreen: boolean,
  handleDrawerChange: () => void
}

export default function Navbar({open, largeScreen, handleDrawerChange}: NavparProps) {
  const location = useLocation();
  const isOffset = useOffSetTop(1);

  return (
    <Box component='nav' sx={{position: 'relative'}}>
      <AppBar position="fixed" sx={{
        backgroundColor: '#fff',
        boxShadow: 0
      }}>
        <ToolbarStyle
          disableGutters
          sx={{
            ...(isOffset && {
              bgcolor: "background.default",
              height: {md: APP_BAR_DESKTOP - 20},
            }),
          }}
        >
          <Box display='flex' height='100%' alignItems='center' justifyContent='space-between' px={largeScreen ? 5 : 2}>
            <Link to='/'>
              <Box component='img' sx={{ cursor: 'pointer' }} src={Logo} width={100} alt=""/>
            </Link>
            {
              !largeScreen &&
              <IconButton
                onClick={handleDrawerChange}
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon color='secondary'/>
              </IconButton>
            }
            {
              largeScreen &&
              <Box display='flex' height='100%'>
                {
                  NAVBAR_ITEMS.map(element => (
                    <MenuElement
                      sx={{
                        ...(location.pathname === element.path && {
                          color: 'red',
                          borderBottomColor: 'red'
                        })

                      }}
                      to={element.path}
                      key={element.value}>
                      <p>{element.label}</p>
                    </MenuElement>
                  ))
                }
              </Box>
            }
          </Box>

        </ToolbarStyle>
        {isOffset && <ToolbarShadowStyle/>}
      </AppBar>
    </Box>
  )
}
