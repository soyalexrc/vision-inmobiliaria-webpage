import React from 'react';
import {Box, Container, Link, Grid, Typography} from "@mui/material";

import Logo from '@/assets/icons/induo-logo.png'
import {Link as RouterLink} from 'react-router-dom'
import {NAVBAR_ITEMS} from "@/shared/utils/mock/menuItems";
import {SOCIAL_MEDIA_DATA} from "@/shared/utils/mock/socialMedia";

export default function Footer() {
  return (
    <footer>
      <Box sx={{backgroundColor: '#ef680045'}}>
        <Container>
          <Box display='flex' p={1} justifyContent='flex-end'>
            {
              SOCIAL_MEDIA_DATA.map(element => (
                <Link style={{margin: '0 1rem'}} href={element.path} target="_blank" key={element.path}>
                  {element.icon}
                </Link>
              ))
            }
          </Box>
        </Container>
      </Box>
      <Container sx={{p: 2}}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <Box component='img' src={Logo} width={150}/>
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
            <Typography variant='h6'>Menu</Typography>
            {NAVBAR_ITEMS.map(element => (
              <Box>
                <RouterLink  to={element.path}>
                  {element.label}
                </RouterLink>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h6'>Contactanos</Typography>
            <Typography>
              Calle Virgen del Amparo 22 19003 - Guadalajara.
            </Typography>
            <Typography>Tel: 949 22 84 63</Typography>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{backgroundColor: '#ef680045'}}>
        <Container>
          legalidad
        </Container>
      </Box>
    </footer>
  )
}
