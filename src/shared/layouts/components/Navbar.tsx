import React from 'react';
import {Box, IconButton, Toolbar, Menu, Container, Link, Button} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {APP_BAR_DESKTOP, APP_BAR_MOBILE} from '@/shared/constants'
import useOffSetTop from "@/shared/hooks/useOffsetTop";
import Logo from '@/assets/icons/vision-icon.png';
import {Link as RouterLink, useLocation} from "react-router-dom";
import {SOCIAL_MEDIA_DATA} from "@/shared/utils/mock/socialMedia";
import TikTokIcon from "@/shared/components/TikTokIcon";


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

const MenuElement = styled(RouterLink)(({theme}) => ({
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

const ChildElement = styled(RouterLink)(({theme}) => ({
  color: 'black',
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
  const rentRef = React.useRef(null);
  const servicesRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const [openRent, setOpenRent] = React.useState(false);
  const [openServices, setOpenServices] = React.useState(false);
  const [openAbout, setOpenAbout] = React.useState(false);
  const [openContact, setOpenContact] = React.useState(false);
  const [currentMenu, setCurrentMenu] = React.useState('')



  function getCoordinates(ref: any) {
    const data: any = {};
    if (ref.current) {
      for (let key in ref.current.getBoundingClientRect()) {
        if (key !== 'toJSON') {
          data[key] = Math.round(ref.current.getBoundingClientRect()[key])
        }
      }
    }
    return data ;
  }

  function handleCloseAll() {
    setOpenServices(false)
    setOpenRent(false)
    setOpenContact(false)
    setOpenAbout(false)
  }

  function validateCurrentMenu(current?: string) {
    if (!current) handleCloseAll();
    if (current === currentMenu) return

    handleCloseAll()
  }

  function handleSetMenu(current: string, cb: Function) {
    setCurrentMenu(current);
    cb()
  }

  return (
    <Box component='nav' sx={{position: 'relative'}}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#fff',
          boxShadow: 0
      }}>
        <Box sx={{backgroundColor: 'primary.lighter'}}>
          <Container>
            <Box display='flex' sx={{ padding: '2px' }} justifyContent='flex-end'>
              <Link href="https://www.tiktok.com/@somosvisioninmobiliaria" target="_blank" style={{margin: '0 1rem'}}>
                <TikTokIcon color='#610321' sx={{ width: 25, height: 25}}/>
              </Link>
              {
                SOCIAL_MEDIA_DATA.map((element, index) => (
                  <Link href={element.path} target="_blank" key={element.path + index} style={{margin: '0 1rem'}}>
                    {element.icon}
                  </Link>
                ))
              }
            </Box>
          </Container>
        </Box>

        <ToolbarStyle
          disableGutters
          sx={{
            ...(isOffset && {
              backgroundColor: "background.default",
              height: {md: APP_BAR_DESKTOP - 20 },
            }),
          }}
        >
          <Box display='flex' height='100%' alignItems='center' justifyContent='space-between' px={largeScreen ? 5 : 2}>
            <RouterLink to='/'>
              <Box component='img' sx={{cursor: 'pointer'}} src={Logo} width={60} alt=""/>
            </RouterLink>
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
              <Box
                display='flex'
                height='100%'
                position='relative'
                onMouseLeave={handleCloseAll}
              >
                <MenuElement
                  onMouseEnter={() => validateCurrentMenu()}
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
                  onMouseEnter={() => validateCurrentMenu()}
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

                {/*Alquiler*/}
                <MenuElement
                  onMouseEnter={() => validateCurrentMenu('rent')}
                  ref={rentRef}
                  onClick={ () =>  handleSetMenu('rent', () => setOpenRent(true)) }
                  id='rent-id'
                  sx={{
                    ...(location.pathname === '/alquiler' && {
                      color: '#610321',
                      borderBottomColor: '#610321',
                      fontWeight: 'bold'
                    })
                  }}
                  to='#'>
                  <p>Alquiler</p>
                </MenuElement>
                <Box
                  sx={{
                    position: 'fixed',
                    top: getCoordinates(rentRef)?.y + 61,
                    left: getCoordinates(rentRef)?.x,
                    zIndex: 999,
                    backgroundColor: '#fff',
                    width: 250,
                    height: 'fit-content',
                    display: openRent ? 'block' : 'none',
                  }}
                >
                  <ChildElement onClick={() => setOpenRent(false)} to='/alquiler#estadias-vacacionales'>Estadias
                    vacacionales</ChildElement>
                  <ChildElement onClick={() => setOpenRent(false)} to='/alquiler#temporadas-largas'>Temporadas
                    largas</ChildElement>
                </Box>

                {/*<MenuElement*/}
                {/*  id='rent-actioner'*/}
                {/*  sx={{*/}
                {/*    ...(location.pathname === '/alquiler' && {*/}
                {/*      color: '#610321',*/}
                {/*      borderBottomColor: '#610321',*/}
                {/*      fontWeight: 'bold'*/}
                {/*    })*/}
                {/*  }}*/}
                {/*  aria-owns={rentEl ? 'rent-id' : undefined}*/}
                {/*  aria-haspopup="true"*/}
                {/*  onClick={handleClickRent}*/}
                {/*  onMouseLeave={handleMouseLeave}*/}
                {/*  to={'#'}*/}
                {/*>*/}
                {/*  <p>Alquiler</p>*/}
                {/*</MenuElement>*/}
                {/*<Menu*/}
                {/*  id='rent-id'*/}
                {/*  anchorEl={rentEl}*/}
                {/*  open={Boolean(rentEl)}*/}
                {/*  onClose={handleCloseRent}*/}
                {/*  MenuListProps={{onMouseLeave: handleCloseRent}}*/}
                {/*>*/}
                {/*  <ChildElement onClick={handleCloseRent} to='/alquiler#estadias-vacacionales'>Estadias*/}
                {/*    vacacionales</ChildElement>*/}
                {/*  <ChildElement onClick={handleCloseRent} to='/alquiler#temporadas-largas'>Temporadas*/}
                {/*    largas</ChildElement>*/}
                {/*</Menu>*/}

                {/*Servicios*/}

                <MenuElement
                  ref={servicesRef}
                  onMouseEnter={() => validateCurrentMenu('services')}
                  onClick={() => handleSetMenu('services', () => setOpenServices(true)) }
                  id='services-id'
                  sx={{
                    ...(location.pathname === '/servicios' && {
                      color: '#610321',
                      borderBottomColor: '#610321',
                      fontWeight: 'bold'
                    })
                  }}
                  to='#'>
                  <p>Servicios</p>
                </MenuElement>
                <Box
                  sx={{
                    position: 'fixed',
                    top: getCoordinates(servicesRef)?.y + 61,
                    left: getCoordinates(servicesRef)?.x,
                    zIndex: 999,
                    backgroundColor: '#fff',
                    width: 250,
                    height: 'fit-content',
                    display: openServices ? 'block' : 'none',
                  }}
                >
                  <ChildElement onClick={() => setOpenServices(false)} to='/servicios#inmobiliario'>Inmobiliario</ChildElement>
                  <ChildElement onClick={() => setOpenServices(false)} to='/servicios#administracion-de-inmuebles-alquilados'>Administración
                    de inmuebles alquilados</ChildElement>
                  <ChildElement onClick={() => setOpenServices(false)} to='/servicios#tramites-legales'>Trámites
                    legales</ChildElement>
                  <ChildElement onClick={() => setOpenServices(false)} to='/servicios#gestion-contable'>Gestión
                    contable</ChildElement>
                  <ChildElement onClick={() => setOpenServices(false)} to='/servicios#ama-de-llaves'>Ama de llaves</ChildElement>
                  <ChildElement onClick={() => setOpenServices(false)} to='/servicios#remodelacion'>Remodelación</ChildElement>
                  <ChildElement onClick={() => setOpenServices(false)} to='/servicios#mantenimiento-de-inmuebles'>Mantenimiento
                    de inmuebles</ChildElement>
                </Box>
                {/*<MenuElement*/}
                {/*  id='services-actioner'*/}
                {/*  sx={{*/}
                {/*    ...(location.pathname === '/servicios' && {*/}
                {/*      color: '#610321',*/}
                {/*      borderBottomColor: '#610321',*/}
                {/*      fontWeight: 'bold'*/}

                {/*    })*/}
                {/*  }}*/}
                {/*  aria-owns={servicesEl ? 'services-id' : undefined}*/}
                {/*  aria-haspopup="true"*/}
                {/*  onMouseOver={handleClickServices}*/}
                {/*  to={'#'}>*/}
                {/*  <p>Servicios</p>*/}
                {/*</MenuElement>*/}
                {/*<Menu*/}
                {/*  id='services-id'*/}
                {/*  anchorEl={servicesEl}*/}
                {/*  open={Boolean(servicesEl)}*/}
                {/*  onClose={handleCloseServices}*/}
                {/*  MenuListProps={{onMouseLeave: handleCloseServices}}*/}
                {/*>*/}
                {/*  <ChildElement onClick={handleCloseServices} to='/servicios#inmobiliario'>Inmobiliario</ChildElement>*/}
                {/*  <ChildElement onClick={handleCloseServices} to='/servicios#administracion-de-inmuebles-alquilados'>Administración*/}
                {/*    de inmuebles alquilados</ChildElement>*/}
                {/*  <ChildElement onClick={handleCloseServices} to='/servicios#tramites-legales'>Trámites*/}
                {/*    legales</ChildElement>*/}
                {/*  <ChildElement onClick={handleCloseServices} to='/servicios#gestion-contable'>Gestión*/}
                {/*    contable</ChildElement>*/}
                {/*  <ChildElement onClick={handleCloseServices} to='/servicios#ama-de-llaves'>Ama de llaves</ChildElement>*/}
                {/*  <ChildElement onClick={handleCloseServices} to='/servicios#remodelacion'>Remodelación</ChildElement>*/}
                {/*  <ChildElement onClick={handleCloseServices} to='/servicios#mantenimiento-de-inmuebles'>Mantenimiento*/}
                {/*    de inmuebles</ChildElement>*/}
                {/*</Menu>*/}

                {/*Acerca de nosotros*/}

                <MenuElement
                  ref={aboutRef}
                  onMouseEnter={() => validateCurrentMenu('about')}
                  onClick={() => handleSetMenu('about', () => setOpenAbout(true)) }
                  id='services-id'
                  sx={{
                    ...(location.pathname.includes('/acerca-de-nosotros') && {
                      color: '#610321',
                      borderBottomColor: '#610321',
                      fontWeight: 'bold'
                    })
                  }}
                  to='#'>
                  <p>Acerca de Vision</p>
                </MenuElement>
                <Box
                  sx={{
                    position: 'fixed',
                    top: getCoordinates(aboutRef)?.y + 61,
                    left: getCoordinates(aboutRef)?.x,
                    zIndex: 999,
                    backgroundColor: '#fff',
                    width: 250,
                    height: 'fit-content',
                    display: openAbout ? 'block' : 'none',
                  }}
                >
                  <ChildElement onClick={() => setOpenAbout(false)} to='/acerca-de-nosotros'>Acerca de nosotros</ChildElement>
                  <ChildElement onClick={() => setOpenAbout(false)} to='/acerca-de-nosotros#equipo-de-trabajo'>Equipo de
                    trabajo</ChildElement>
                  <ChildElement onClick={() => setOpenAbout(false)} to='/acerca-de-nosotros/comentarios'>Comentarios de nuestros clientes</ChildElement>
                </Box>

                {/*<MenuElement*/}
                {/*  id='aboutUs-actioner'*/}
                {/*  sx={{*/}
                {/*    ...(location.pathname.includes('/acerca-de-nosotros') && {*/}
                {/*      color: '#610321',*/}
                {/*      borderBottomColor: '#610321',*/}
                {/*      fontWeight: 'bold'*/}

                {/*    })*/}
                {/*  }}*/}
                {/*  aria-owns={aboutUsEl ? 'aboutUs-id' : undefined}*/}
                {/*  aria-haspopup="true"*/}
                {/*  onMouseOver={handleClickAboutUs}*/}
                {/*  to={'#'}>*/}
                {/*  <p>Acerca de Vision</p>*/}
                {/*</MenuElement>*/}
                {/*<Menu*/}
                {/*  id='aboutUs-id'*/}
                {/*  anchorEl={aboutUsEl}*/}
                {/*  open={Boolean(aboutUsEl)}*/}
                {/*  onClose={handleCloseAboutUs}*/}
                {/*  MenuListProps={{onMouseLeave: handleCloseAboutUs}}*/}
                {/*>*/}
                {/*  <ChildElement onClick={handleCloseAboutUs} to='/acerca-de-nosotros'>Acerca de nosotros</ChildElement>*/}
                {/*  <ChildElement onClick={handleCloseAboutUs} to='/acerca-de-nosotros#equipo-de-trabajo'>Equipo de*/}
                {/*    trabajo</ChildElement>*/}
                {/*  <ChildElement onClick={handleCloseAboutUs} to='/acerca-de-nosotros/comentarios'>Comentarios de nuestros clientes</ChildElement>*/}
                {/*</Menu>*/}

                <MenuElement
                  ref={contactRef}
                  onMouseEnter={() => validateCurrentMenu('contact')}
                  onClick={() => handleSetMenu('contact', () => setOpenAbout(true)) }
                  id='services-id'
                  sx={{
                    ...(location.pathname.includes('/contacto') && {
                      color: '#610321',
                      borderBottomColor: '#610321',
                      fontWeight: 'bold'
                    })
                  }}
                  to='#'>
                  <p>Acerca de Vision</p>
                </MenuElement>
                <Box
                  sx={{
                    position: 'fixed',
                    top: getCoordinates(contactRef)?.y + 61,
                    left: getCoordinates(contactRef)?.x,
                    zIndex: 999,
                    backgroundColor: '#fff',
                    width: 250,
                    height: 'fit-content',
                    display: openContact ? 'block' : 'none',
                  }}
                >
                  <ChildElement onClick={() => setOpenContact(false)} to='/contacto'>Contacto</ChildElement>
                  <ChildElement onClick={() => setOpenContact(false)} to='/contacto/trabaja-con-nosotros'>Envia tu
                    curriculum</ChildElement>
                </Box>


                {/*<MenuElement*/}
                {/*  id='contact-actioner'*/}
                {/*  sx={{*/}
                {/*    ...(location.pathname.includes('/contacto') && {*/}
                {/*      color: '#610321',*/}
                {/*      borderBottomColor: '#610321',*/}
                {/*      fontWeight: 'bold'*/}

                {/*    })*/}
                {/*  }}*/}
                {/*  aria-owns={contactEl ? 'contact-id' : undefined}*/}
                {/*  aria-haspopup="true"*/}
                {/*  onMouseOver={handleClickContact}*/}
                {/*  to={'#'}>*/}
                {/*  <p>Contacto</p>*/}
                {/*</MenuElement>*/}
                {/*<Menu*/}
                {/*  id='contact-id'*/}
                {/*  anchorEl={contactEl}*/}
                {/*  open={Boolean(contactEl)}*/}
                {/*  onClose={handleCloseContact}*/}
                {/*  MenuListProps={{onMouseLeave: handleCloseContact}}*/}
                {/*>*/}
                {/*  <ChildElement onClick={handleCloseContact} to='/contacto'>Contacto</ChildElement>*/}
                {/*  <ChildElement onClick={handleCloseContact} to='/contacto/trabaja-con-nosotros'>Envia tu*/}
                {/*    curriculum</ChildElement>*/}
                {/*</Menu>*/}
              </Box>
            }
          </Box>

        </ToolbarStyle>
        {isOffset && <ToolbarShadowStyle/>}
      </AppBar>
    </Box>
  )
}
