import React from 'react';
import {Box, Container, Link, Grid, Typography, useMediaQuery, Divider} from "@mui/material";

import Logo from '@/assets/icons/vision-icon.png'
import {Link as RouterLink} from 'react-router-dom'
import {NAVBAR_ITEMS} from "@/shared/utils/mock/menuItems";
import {SOCIAL_MEDIA_DATA} from "@/shared/utils/mock/socialMedia";
import TikTokIcon from "@/shared/components/TikTokIcon";

export default function Footer() {
  const largeScreen = useMediaQuery((theme: any) => theme.breakpoints.up('md'))

  return (
    <footer>
      <Box sx={{backgroundColor: 'primary.lighter'}} p={1}>

      </Box>
      <Container sx={{p: 2}}>
        <Grid container columnSpacing={10}>
          <Grid item xs={12} md={6}>
            <Box component='img' src={Logo} width={100}/>
            <Typography variant='caption'>
              Grupo Induo, es una empresa de intermediación inmobiliaria y gestión de activos, compuesta por
              profesionales con más de veinte años de experiencia en el sector.
            </Typography>
            <br/>
            <Typography variant='caption'>
              Actualmente gestionamos el patrimonio inmobiliario de particulares, entidades financieras y fondos de
              inversión, ya sea residencial, comercial y terciario.
              También realizamos operaciones de Sale & Lease back.
            </Typography>
            <br/>

            <Typography variant='caption'>
              Disponemos de profesionales altamente cualificados para ofrecer a nuestros clientes seguridad y
              profesionalidad ante cualquier proyecto inmobiliario. Nuestro trabajo consiste en proporcionar a nuestros
              clientes el tipo de activo que más se ajuste a sus intereses.
            </Typography>
            <br/>
            <Typography variant='caption'>
              Ofrecemos nuestros servicios tanto a particulares, empresas y fondos de inversión, adecuando cada tipo de
              operación a las preferencias y capacidad de cada uno.
            </Typography>


          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h6' fontWeight='bold' sx={{...(!largeScreen && {mt: 3})}}>Menu</Typography>
            {NAVBAR_ITEMS.map(element => (
              <Box key={element.path} my={2}>
                <RouterLink to={element.path}>
                  {element.label}
                </RouterLink>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h6' fontWeight='bold'
                        sx={{mb: 2, ...(!largeScreen && {mt: 3})}}>Contáctanos</Typography>
            <Grid container rowSpacing={2}>
              <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="https://www.tiktok.com/@somosvisioninmobiliaria" target="_blank">
                  <TikTokIcon color='#610321' sx={{width: 25, height: 25}}/>
                </Link>
              </Grid>
              {
                SOCIAL_MEDIA_DATA.map((element, index) => (
                  <Grid item xs={4} key={element.path + index} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href={element.path} target="_blank">
                      {element.icon}
                    </Link>
                  </Grid>
                ))
              }
            </Grid>
            {/*<Typography>*/}
            {/*  Av. Feo La Cruz, CC Paseo La Granja, Local Mezz-6, Nivel Mezzanina, Sector La Granja, Municipio Naguanagua, Estado Carabobo*/}
            {/*</Typography>*/}
            {/*<Typography fontWeight='bold' sx={{ mt: 2 }}>Tel: <Link href="tel:949228463" target='_blank'>949 22 84 63</Link></Typography>*/}
            {/*<Typography fontWeight='bold' sx={{ mt: 2 }}> <Link href="mailto:ventas@visioninmobiliaria.com.ve" target='_blank'>ventas@visioninmobiliaria.com.ve</Link></Typography>*/}
          </Grid>
        </Grid>
      </Container>
      <Box sx={{backgroundColor: 'primary.lighter'}}>
        <Container>
          <Box display='flex' alignItems='center' p={1}>
            <Typography component={RouterLink} to='aviso-legal'> Aviso Legal</Typography>
            <Divider sx={{mx: 2, borderWidth: '1px'}} orientation='vertical' flexItem/>
            <Typography component={RouterLink} to='proteccion-de-datos'>Protección de datos</Typography>
            <Divider sx={{mx: 2, borderWidth: '1px'}} orientation='vertical' flexItem/>
            <Typography component={RouterLink} to='cookies'>Cookies</Typography>
            <Divider sx={{mx: 2, borderWidth: '1px'}} orientation='vertical' flexItem/>
            <Typography component={Link} href='https://google.com' target='_blank'>Creado por LSM Sinergy</Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}
