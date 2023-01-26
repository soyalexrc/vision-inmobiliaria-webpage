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
        <Typography variant='h1' align='center' color='#fff' sx={{letterSpacing: '3px'}}>Lo que nuestros clientes dicen de nosotros</Typography>
      </Box>
    </Box>

  )
}

export default function CommentsPage() {
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
    <Page title='Comentarios de nuestros clientes | Vision Inmobiliaria' description='Seccion de contacto'>
      <>
        <BannerComponent item={mainData[0]}/>


      </>
    </Page>
  )
}
