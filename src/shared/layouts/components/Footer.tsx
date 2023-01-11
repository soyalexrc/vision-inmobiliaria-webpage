import React from 'react';
import {Box, Container, Link, Grid, Typography} from "@mui/material";

import Logo from '@/assets/icons/vision-icon.png'
import {Link as RouterLink} from 'react-router-dom'
import {NAVBAR_ITEMS} from "@/shared/utils/mock/menuItems";
import {SOCIAL_MEDIA_DATA} from "@/shared/utils/mock/socialMedia";

interface TiktokIconProps  {
  color: string;
  sx?: object
}

const TikTokIcon = ({color = "#000000", sx}: TiktokIconProps) => {
  return (
    <Box sx={sx}>
      <svg
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="100%"
        height="100%"
      >
        <path
          d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"/>
      </svg>
    </Box>
  );
};

export default function Footer() {
  return (
    <footer>
      <Box sx={{backgroundColor: '#ef680045'}}>
        <Container>
          <Box display='flex' p={1} justifyContent='flex-end'>
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
            <Typography variant='h6'>Menu</Typography>
            {NAVBAR_ITEMS.map(element => (
              <Box key={element.path} my={2}>
                <RouterLink to='#'>
                  {element.label}
                </RouterLink>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant='h6' sx={{  mb: 2}}>Contáctanos</Typography>
            <Typography>
              Av. Feo La Cruz, CC Paseo La Granja, Local Mezz-6, Nivel Mezzanina, Sector La Granja, Municipio Naguanagua, Estado Carabobo
            </Typography>
            <Typography>Tel: <Link href="tel:949228463" target='_blank'>949 22 84 63</Link></Typography>
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
