import React from 'react';
import Page from "@/shared/components/Page";
import registerBanner from "@/assets/images/register-banner.jpg";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  Checkbox,
  TextField,
  Autocomplete, Button
} from "@mui/material";
import office from '@/assets/images/about/office-1.jpg';

const mainData = [
  {
    url: '',
    alt: '',
    image: registerBanner
  }
]

const options = [
  {label: 'option 1'}
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
        <Typography variant='h1' align='center' color='#fff' sx={{ letterSpacing: '3px' }}>¿Quieres que vendamos o alquilemos tu inmueble?</Typography>
      </Box>
    </Box>

  )
}

export default function RegisterHousingPage() {
  const largeScreen = useMediaQuery((theme: any) => theme.breakpoints.up('md'))

  return (
    <Page title='Contacto | Vision Inmobiliaria' description='Seccion de contacto'>
      <>
        <BannerComponent item={mainData[0]}/>
        <Typography variant='h2' align='center' sx={{my: 3}}>Registra tu vivienda</Typography>

        <Container>
          <Grid container columnSpacing={3} sx={{my: 4}}>
            <Grid item xs={12} md={6} sx={{borderRight: largeScreen ? '1px solid lightgray' : 'transparent', px: 3}}>

              <Typography fontSize='17px'>
                <b>Induo Inmobiliaria,</b> ofrece la posibilidad de poner tu inmueble en venta a través de nosotros de una forma fácil, sencilla y de forma gratuita.
                Introduce los datos en el apartado que ves abajo y nos pondremos en contacto contigo lo antes posible...
              </Typography>


              <Box component='img' sx={{ mb: 2, mt: 4 }} src={office}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='h4' sx={{mb: 2}}>Datos personales</Typography>
              <Box>
                <Typography sx={{mb: 1}}>Nombre *</Typography>
                <TextField size='small' fullWidth placeholder='Nombre'/>
              </Box>
              <Grid container spacing={2} sx={{mt: 1}}>
                <Grid item xs={6}>
                  <Box>
                    <Typography sx={{mb: 1}}>e-mail *</Typography>
                    <TextField size='small' fullWidth placeholder='e-mail'/>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <Typography sx={{mb: 1}}>Teléfono *</Typography>
                    <TextField size='small' fullWidth placeholder='Teléfono'/>
                  </Box>
                </Grid>
              </Grid>
              <Typography variant='h4' sx={{my: 2}}>Datos inmueble</Typography>
              <Grid container spacing={2} >
                <Grid item xs={6}>
                  <Box>
                    <Typography sx={{mb: 1}}>Tipo de inmueble</Typography>
                    <Autocomplete
                      size='small'
                      disablePortal
                      id="custom-combo-box"
                      options={options}
                      renderInput={(params) => <TextField {...params} placeholder="Elija un tipo"/>}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <Typography sx={{mb: 1}}>Tipo de operacion</Typography>
                    <Autocomplete
                      size='small'
                      disablePortal
                      id="custom-combo-box"
                      options={options}
                      renderInput={(params) => <TextField {...params} placeholder="Elija operacion"/>}
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{mt: 1}}>
                <Grid item xs={4}>
                  <Box>
                  <Typography sx={{mb: 1}}>Precio</Typography>
                  <TextField size='small' fullWidth placeholder='Precio'/>
                </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <Typography sx={{mb: 1}}>Poblacion</Typography>
                    <TextField size='small' fullWidth placeholder='Poblacion'/>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box>
                    <Typography sx={{mb: 1}}>Zona</Typography>
                    <TextField size='small' fullWidth placeholder='Zona'/>
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{my: 2}}>
                <Typography sx={{mb: 1}}>Descripcion del inmueble *</Typography>
                <TextField
                  fullWidth
                  multiline
                  minRows={5}
                />
              </Box>
              <Box display='flex' alignItems='center'>
                <Checkbox size='small'/>
                <Typography>
                  He leido y acepto las
                  <Typography
                    variant='span'
                    sx={{
                      "&:hover" : {
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        color: 'primary.main'
                      }
                    }}
                  > condiciones legales y de politica de privacidad</Typography>
                </Typography>
              </Box>
              <Button variant='contained' size='small' fullWidth>Enviar</Button>
            </Grid>
          </Grid>
        </Container>
      </>
    </Page>
  )
}
