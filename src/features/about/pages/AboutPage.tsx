import React from 'react';
import Page from "@/shared/components/Page";
import aboutBanner from "@/assets/images/about/aboutBanner.jpg";
import aboutImage from "@/assets/images/about/about-image.jpg";
import aboutImage2 from "@/assets/images/about/about-image-2.jpg";

import office1 from '@/assets/images/about/office-1.jpg';
import office2 from '@/assets/images/about/office-2.jpg';
import office3 from '@/assets/images/about/office-3.jpg';
import office4 from '@/assets/images/about/office-4.jpg';
import office5 from '@/assets/images/about/office-5.jpg';
import office6 from '@/assets/images/about/office-6.jpg';

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider
} from "@mui/material";
import {useLocation} from "react-router-dom";
import CommentsCarousel from "@/shared/components/carousel/CommentsCarousel";
import {LIFESTYLE_BANNER_DATA} from "@/shared/utils/mock/LifestyleBanner";

const mainData = [
  {
    url: '',
    alt: '',
    image: aboutBanner
  }
]

const offices = [office1, office2, office3, office4, office5, office6]

function BannerComponent({item}: any) {


  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Box
        // onClick={() => goTo(item.url)}
        component='img'
        alt={item.alt}
        width='100%'
        height='100%'
        sx={{
          width: '100%',
          height: '350px',
          objectFit: 'cover',
          marginBottom: '-6px',
          filter: 'blur(1.82px) brightness(0.61)',
        }}
        src={item.image}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <Typography variant='h1' color='#fff' sx={{letterSpacing: '3px'}}>Comienza una nueva ilusion</Typography>
      </Box>
    </Box>

  )
}

export default function AboutPage() {
  const location = useLocation();

  React.useEffect(() => {

    if (location.hash) {

      const el: any = document.getElementById('equipo-de-trabajo');
      el.scrollIntoView({behavior: 'smooth'})
    } else {
      window.scrollTo(0, 0);
    }

    console.log(location)
  }, [location])

  return (
    <Page title='Acerca de nosotros | Vision Inmobiliaria' description='Seccion de contacto'>
      <>
        <BannerComponent item={mainData[0]}/>
        <Typography variant='h5' align='center' sx={{my: 3, letterSpacing: "4px"}}>VISION INMMOBILIARIA</Typography>
        <Typography variant='h2' align='center' sx={{my: 3}}>
          Profesionales con m??s de veinte a??os de <br/>experiencia
        </Typography>

        <Container>
          <Divider/>
          <Grid container spacing={2} sx={{my: 7}}>
            <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center'}}>
              <Box component='img' src={aboutImage}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography px={2} fontSize='17px'>
                Grupo Induo, es una empresa de intermediaci??n inmobiliaria y gesti??n de activos, compuesta por
                profesionales con m??s de veinte a??os de experiencia en el sector. Actualmente gestionamos el patrimonio
                inmobiliario de particulares, entidades financieras y fondos de inversi??n, ya sea residencial, comercial
                y terciario. Tambi??n realizamos operaciones de Sale & Lease back. Disponemos de profesionales altamente
                cualificados para ofrecer a nuestros clientes seguridad y profesionalidad ante cualquier proyecto
                inmobiliario. Nuestro trabajo consiste en proporcionar a nuestros clientes el tipo de activo que m??s se
                ajuste a sus intereses. Ofrecemos nuestros servicios tanto a particulares, empresas y fondos de
                inversi??n, adecuando cada tipo de operaci??n a las preferencias y capacidad de cada uno.
              </Typography>
            </Grid>
          </Grid>

        </Container>
        <Box
          sx={{
            position: 'relative'
          }}
        >
          <Box
            component='img'
            src={aboutImage2}
            width='100%'
            height='500px'
            sx={{
              filter: ' brightness(0.9)',
              objectFit: 'cover'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Typography align='center' sx={{mb: 3, letterSpacing: '3px'}} variant='h2'>Tu hogar te espera
              aqui</Typography>
            <Typography>
              ??nicamente al lugar donde vivimos, en el que sentimos seguridad y calma, podemos llamar hogar. En Induo
              sabemos que no siempre es f??cil encontrar ese sue??o en forma de casa, que tan importante es para cualquier
              persona. Por ello dedicamos todos nuestros esfuerzos en hacer realidad esta ilusi??n, un hogar hecho a tu
              medida.
            </Typography>
            <Box display='flex' justifyContent='center' mt={5}>
              <Button variant='contained'>Cont??ctanos</Button>
            </Box>
          </Box>
        </Box>
        <Container sx={{my: 2}} id='equipo-de-trabajo'>
          <Grid container spacing={2}>
            {offices.map(office => (
              <Grid item xs={12} sm={6} md={4}>
                <Box component='img' src={office}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    </Page>
  )
}
