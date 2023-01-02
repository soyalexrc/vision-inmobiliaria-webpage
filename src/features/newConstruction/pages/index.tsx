import React from 'react';
import Page from "@/shared/components/Page";
import newConstructionBanner from "@/assets/images/new-construction-banner.jpg";
import {
  Box,
  Container,
  Grid,
  Typography,
  Checkbox,
  TextField,
} from "@mui/material";
import {LATEST_ELEMENTS_DATA} from '@/shared/utils/mock/latestElements'

const mainData = [
  {
    url: '',
    alt: '',
    image: newConstructionBanner
  }
]


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
          transform: 'translate(-50%, -50%)',

        }}
      >
        <Typography variant='h1' align='center' color='#fff' sx={{letterSpacing: '3px'}}>Nuevas promociones</Typography>
        <Typography variant='h6' align='center' color='#fff' sx={{letterSpacing: '3px', mt: 2}}>Es nuestro trabajo el
          proporcionarte el tipo de inmueble que más se ajuste a sus intereses</Typography>
      </Box>
    </Box>

  )
}

export default function NewConstructionPage() {

  return (
    <Page title='Contacto | Vision Inmobiliaria' description='Seccion de contacto'>
      <>
        <BannerComponent item={mainData[0]}/>
        <Container>
          <Grid container columnSpacing={5} rowSpacing={2} sx={{my: 3}}>
            <Grid item xs={12} md={3}>
              <Box sx={{mb: 3}}>
                <Typography align='center' variant='h3'>Contacto directo</Typography>
                <Typography align='center' variant='h6'> 949 994 994</Typography>
                <Typography align='center'>correo@correo.com</Typography>
              </Box>
              <Box>
                <Typography align='center' variant='h4'>Mas informacion</Typography>
                <Typography>
                  Si deseas más información sobre esta propiedad, por favor, rellena el
                  formulario.
                </Typography>
              </Box>
              <Box sx={{ my: 2 }}>
                <Typography sx={{ mb: 1 }}> Nombre y apellidos *</Typography>
                <TextField variant='outlined' size='small' fullWidth />
              </Box>
              <Box sx={{ my: 2 }}>
                <Typography sx={{ mb: 1 }}> Email *</Typography>
                <TextField variant='outlined' size='small' fullWidth />
              </Box>
              <Box sx={{ my: 2 }}>
                <Typography sx={{ mb: 1 }}> Telefono *</Typography>
                <TextField variant='outlined' size='small' fullWidth />
              </Box>
              <Box sx={{ my: 2 }}>
                <Typography sx={{ mb: 1 }}> Nombre y apellidos *</Typography>
                <TextField multiline minRows={10} variant='outlined' size='small' fullWidth />
              </Box>
              <Box display='flex' alignItems='center'>
                <Checkbox size='small'/>
                <Typography>
                  Si, he leido y acepto las
                  <Typography
                    variant='span'
                    sx={{
                      "&:hover" : {
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        color: 'primary.main'
                      }
                    }}
                  > condiciones de uso
                  </Typography>
                  <Typography variant='span'> y la</Typography>
                  <Typography
                    variant='span'
                    sx={{
                      "&:hover" : {
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        color: 'primary.main'
                      }
                    }}
                  > politica de privacidad
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid container spacing={2} item xs={12} md={9}>
              {
                LATEST_ELEMENTS_DATA.map(element => (
                  <Grid item xs={12} sm={6} md={4}>
                    <Box
                      component='img'
                      src={element.img}
                      width='100%'
                      sx={{ objectFit: 'cover', minHeight: '205px' }}
                    />
                    <Box
                      sx={{
                        backgroundColor: '#f6f6f6',
                        p: 2,
                        minHeight: '146px'
                      }}
                    >
                      <Typography variant='h6' sx={{ mb: 2 }} align='center'>{element.title}</Typography>
                      <Typography variant='caption' >{element.description}</Typography>
                    </Box>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
        </Container>
      </>
    </Page>
  )
}
