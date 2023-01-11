import React from 'react';
import {Box, IconButton, Toolbar, Menu} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {APP_BAR_DESKTOP, APP_BAR_MOBILE} from '@/shared/constants'
import useOffSetTop from "@/shared/hooks/useOffsetTop";
import Logo from '@/assets/icons/vision-icon.png';
import {Link, useLocation} from "react-router-dom";

interface AppBarProps {
  theme?: any,
  open?: boolean
}

const AppBar = styled(MuiAppBar)(({theme}: AppBarProps) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const ToolbarShadowStyle = styled("div")(({theme}: AppBarProps) => ({
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
    color: '#610321',
    borderBottomColor: '#610321'
  }
}))

const ChildElement = styled(Link)(({theme}) => ({
  color: 'black',
  height: '100%',
  padding: '.5rem 1rem',
  transition: 'background 200ms ease, color 200ms ease',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'block',
  "&:hover": {
    backgroundColor: '#f6f6f6',
    color: '#610321',
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
  const [servicesEl, setServicesEL] = React.useState(null);
  const [aboutUsEl, setAboutUsEl] = React.useState(null);
  const [contactEl, setContactEl] = React.useState(null);
  const [rentEl, setRentEl] = React.useState(null);

  function handleClickServices(event: any) {
    if (servicesEl !== event.currentTarget) {
      setServicesEL(event.currentTarget);
    }
  }

  function handleClickAboutUs(event: any) {
    if (aboutUsEl !== event.currentTarget) {
      setAboutUsEl(event.currentTarget);
    }
  }

  function handleClickContact(event: any) {
    if (contactEl !== event.currentTarget) {
      setContactEl(event.currentTarget);
    }
  }

  function handleClickRent(event: any) {
    if (rentEl !== event.currentTarget) {
      setRentEl(event.currentTarget);
    }
  }

  function handleCloseServices() {
    setServicesEL(null);
  }

  function handleCloseAboutUs() {
    setAboutUsEl(null);
  }

  function handleCloseRent() {
    setRentEl(null);
  }

  function handleCloseContact() {
    setContactEl(null)
  }

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
              <Box component='img' sx={{cursor: 'pointer'}} src={Logo} width={60} alt=""/>
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
                <MenuElement
                  sx={{
                    ...(location.pathname === '/' && {
                      color: '#610321',
                      borderBottomColor: '#610321',
                      fontWeight: 'bold'
                    })
                  }}
                  to='/'>
                  <p>Inicio</p>
                </MenuElement>
                <MenuElement
                  sx={{
                    ...(location.pathname === '/venta' && {
                      color: '#610321',
                      borderBottomColor: '#610321',
                      fontWeight: 'bold'

                    })
                  }}
                  to='/venta'>
                  <p>Venta</p>
                </MenuElement>

                <MenuElement
                  id='rent-actioner'
                  sx={{
                    ...(location.pathname === '/alquiler' && {
                      color: '#610321',
                      borderBottomColor: '#610321',
                      fontWeight: 'bold'

                    })
                  }}
                  aria-owns={rentEl ? 'rent-id' : undefined}
                  aria-haspopup="true"
                  onMouseOver={handleClickRent}
                  to={'#'}
                >
                  <p>Alquiler</p>
                </MenuElement>
                <Menu
                  id='rent-id'
                  anchorEl={rentEl}
                  open={Boolean(rentEl)}
                  onClose={handleCloseRent}
                  MenuListProps={{onMouseLeave: handleCloseRent}}
                >
                  <ChildElement onClick={handleCloseRent} to='/alquiler#estadias-vacacionales'>Estadias
                    vacacionales</ChildElement>
                  <ChildElement onClick={handleCloseRent} to='/alquiler#temporadas-largas'>Temporadas
                    largas</ChildElement>
                </Menu>
                <MenuElement
                  id='services-actioner'
                  sx={{
                    ...(location.pathname === '/servicios' && {
                      color: '#610321',
                      borderBottomColor: '#610321',
                      fontWeight: 'bold'

                    })
                  }}
                  aria-owns={servicesEl ? 'services-id' : undefined}
                  aria-haspopup="true"
                  onMouseOver={handleClickServices}
                  to={'#'}>
                  <p>Servicios</p>
                </MenuElement>
                <Menu
                  id='services-id'
                  anchorEl={servicesEl}
                  open={Boolean(servicesEl)}
                  onClose={handleCloseServices}
                  MenuListProps={{onMouseLeave: handleCloseServices}}
                >
                  <ChildElement onClick={handleCloseServices} to='/servicios#inmobiliario'>Inmobiliario</ChildElement>
                  <ChildElement onClick={handleCloseServices} to='/servicios#administracion-de-inmuebles-alquilados'>Administración
                    de inmuebles alquilados</ChildElement>
                  <ChildElement onClick={handleCloseServices} to='/servicios#tramites-legales'>Trámites
                    legales</ChildElement>
                  <ChildElement onClick={handleCloseServices} to='/servicios#gestion-contable'>Gestión
                    contable</ChildElement>
                  <ChildElement onClick={handleCloseServices} to='/servicios#ama-de-llaves'>Ama de llaves</ChildElement>
                  <ChildElement onClick={handleCloseServices} to='/servicios#remodelacion'>Remodelación</ChildElement>
                  <ChildElement onClick={handleCloseServices} to='/servicios#mantenimiento-de-inmuebles'>Mantenimiento
                    de inmuebles</ChildElement>
                </Menu>

                <MenuElement
                  id='aboutUs-actioner'
                  sx={{
                    ...(location.pathname === '/acerca-de-nosotros' && {
                      color: '#610321',
                      borderBottomColor: '#610321',
                      fontWeight: 'bold'

                    })
                  }}
                  aria-owns={aboutUsEl ? 'aboutUs-id' : undefined}
                  aria-haspopup="true"
                  onMouseOver={handleClickAboutUs}
                  to={'#'}>
                  <p>Acerca de Vision</p>
                </MenuElement>
                <Menu
                  id='aboutUs-id'
                  anchorEl={aboutUsEl}
                  open={Boolean(aboutUsEl)}
                  onClose={handleCloseAboutUs}
                  MenuListProps={{onMouseLeave: handleCloseAboutUs}}
                >
                  <ChildElement onClick={handleCloseAboutUs} to='/acerca-de-nosotros'>Acerca de nosotros</ChildElement>
                  <ChildElement onClick={handleCloseAboutUs} to='/acerca-de-nosotros#equipo-de-trabajo'>Equipo de
                    trabajo</ChildElement>
                </Menu>

                <MenuElement
                  id='contact-actioner'
                  sx={{
                    ...(location.pathname === '/contacto' && {
                      color: '#610321',
                      borderBottomColor: '#610321',
                      fontWeight: 'bold'

                    })
                  }}
                  aria-owns={contactEl ? 'contact-id' : undefined}
                  aria-haspopup="true"
                  onMouseOver={handleClickContact}
                  to={'#'}>
                  <p>Contacto</p>
                </MenuElement>
                <Menu
                  id='contact-id'
                  anchorEl={contactEl}
                  open={Boolean(contactEl)}
                  onClose={handleCloseContact}
                  MenuListProps={{onMouseLeave: handleCloseContact}}
                >
                  <ChildElement onClick={handleCloseContact} to='/contacto'>Contacto</ChildElement>
                  <ChildElement onClick={handleCloseContact} to='/contacto/trabaja-con-nosotros'>Envia tu
                    curriculum</ChildElement>
                </Menu>
              </Box>
            }
          </Box>

        </ToolbarStyle>
        {isOffset && <ToolbarShadowStyle/>}
      </AppBar>
    </Box>
  )
}
