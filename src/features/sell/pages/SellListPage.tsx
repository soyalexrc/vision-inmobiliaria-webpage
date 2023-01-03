import React from 'react';
import Page from "@/shared/components/Page";
import sellBanner from "@/assets/images/banners/sell-banner.jpg";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  useMediaQuery,
  Autocomplete,
  Button,
  IconButton,
  Pagination, Divider
} from "@mui/material";
import {LATEST_ELEMENTS_DATA} from '@/shared/utils/mock/latestElements'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppsIcon from '@mui/icons-material/Apps';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LifestyleBanner from "@/shared/components/LifestyleBanner";
import ContactBanner from "@/shared/components/ContactBanner";
import map from '@/assets/images/map.png'

const mainData = [
  {
    url: '',
    alt: '',
    image: sellBanner
  }
]

const sampleOptions = [
  {title: 'option 1'},
  {title: 'option 2'},
  {title: 'option 3'},
  {title: 'option 4'},
  {title: 'option 5'},
]

const housingType = [
  {label: 'Aticos'},
  {label: 'Duplex'},
  {label: 'Pisos'},
  {label: 'Adosados'},
  {label: 'Casas'},
  {label: 'Chalets independientes'},
  {label: 'Pareados'},
  {label: 'Locales comerciales'},
  {label: 'Garajes'},
  {label: 'Naves industriales'},
  {label: 'Parcelas'},
]

const province = [
  {label: 'Guadalajara'},
  {label: 'Madrid'},
]

const poblation = [
  {label: ''}
]

const numberOfRooms = [
  {label: 'De 1 a 2'},
  {label: 'De 3 a 5'},
  {label: 'Mas de 5'}
]

const numberOfBaths = [
  {label: 'De 1 a 2'},
  {label: 'De 3 a 5'},
  {label: 'Mas de 5'}
]

const numberOfGarages = [
  {label: '1'},
  {label: '2 o mas'}
]


function CustomField({options, sx, title}: any) {
  return (
    <Box sx={sx}>
      {title && <Typography variant='h6' sx={{mb: 1}}>{title}</Typography>}
      <Autocomplete
        size='small'
        disablePortal
        id="custom-combo-box"
        options={options}
        renderInput={(params) => <TextField {...params} />}
      />
    </Box>
  )
}


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
          width: '100%',
          transform: 'translate(-50%, -50%)',

        }}
      >
        <Typography variant='h1' align='center' color='#fff' sx={{letterSpacing: '3px'}}>Compra con
          nosotros</Typography>
        <Typography variant='h6' align='center' color='#fff' sx={{letterSpacing: '3px', mt: 2}}>
          Consulta nuestra amplia oferta de inmuebles en venta y encuentra el que mejor se adapte a tus necesidades
        </Typography>
      </Box>
    </Box>

  )
}

function ProductComponent({product, view}: any) {
  if (view === 'grid') {
    return (
      <Box sx={{
        height: 'auto',
        "&:hover": {
          "& h6": {
            textDecoration: 'underline',
            cursor: 'pointer'
          }
        }
      }}>
        <Box
          component='img'
          src={product.img}
          width='100%'
          sx={{objectFit: 'cover', minHeight: '280px'}}
        />
        <Box
          sx={{
            backgroundColor: '#f6f6f6',
            p: 2,
            minHeight: '146px',
          }}
        >
          <Typography variant='h6' sx={{mb: 2}} align='center'>{product.title}</Typography>
          <Box >
            <Box display='flex' alignItems='center' justifyContent='center' mt={3}>
              <Typography>{product.meters} m2</Typography>
              <Divider  sx={{ mx: 2, borderWidth: '1px' }} orientation='vertical' flexItem />
              <Typography>{product.rooms} Habitaciones</Typography>
              <Divider sx={{ mx: 2, borderWidth: '1px' }}  orientation='vertical' flexItem />
              <Typography>{product.bathrooms} Banos</Typography>
            </Box>

            {/*<Typography color='primary' variant='h3' align='center'>{product.price} €</Typography>*/}
          </Box>
        </Box>
      </Box>
    )
  }

  if (view === 'list') {
    return (
      <Box display='flex'>
        <Box
          component='img'
          src={product.img}
          width='300px'
          sx={{objectFit: 'cover', minHeight: '214px'}}
        />
        <Box
          sx={{
            backgroundColor: '#f6f6f6',
            p: 2,
            width: '100%'
          }}
        >
          <Typography variant='h6' sx={{mb: 2}} align='center'>{product.title}</Typography>
          <Box >
            <Box display='flex' alignItems='center' justifyContent='center' mt={3}>
              <Typography>{product.meters} m2</Typography>
              <Divider  sx={{ mx: 2, borderWidth: '1px' }} orientation='vertical' flexItem />
              <Typography>{product.rooms} Habitaciones</Typography>
              <Divider sx={{ mx: 2, borderWidth: '1px' }}  orientation='vertical' flexItem />
              <Typography>{product.bathrooms} Banos</Typography>
            </Box>

            <Typography color='primary' variant='h3' align='center'>{product.price} €</Typography>
            <Typography sx={{ px: 3 }} fontSize='13px'>{product.fullDescription}</Typography>
          </Box>
        </Box>
      </Box>
    )
  }

}

export default function SellListPage() {
  const largeScreen = useMediaQuery((theme: any) => theme.breakpoints.up('md'))
  // TODO usar redux.
  const [viewType, setViewType] = React.useState('grid');

  return (
    <Page title='Contacto | Vision Inmobiliaria' description='Seccion de contacto'>
      <>
        <BannerComponent item={mainData[0]}/>
        <Container>
          <Grid container columnSpacing={5} rowSpacing={2} sx={{my: 3}}
                direction={largeScreen ? 'row' : 'column-reverse'}>
            <Grid item xs={12} md={4}>
              <Button size='small'><ArrowLeftIcon/>Volver</Button>
              <CustomField
                title='Provincia'
                options={province}
                sx={{mb: 3}}
              />
              <CustomField
                title='Poblacion'
                options={poblation}
                sx={{mb: 3}}
              />
              <CustomField
                title='Zona'
                options={poblation}
                sx={{mb: 3}}
              />
              <Box mb={3}>
                <Typography variant='h6' sx={{mb: 1}}>Precio</Typography>
                <Box display='flex' alignItems='center'>
                  <TextField fullWidth size='small' placeholder='Desde'/>
                  <Box mx={2}>-</Box>
                  <TextField fullWidth size='small' placeholder='Hasta'/>
                </Box>
              </Box>

              <CustomField
                title='Tipo'
                options={housingType}
                sx={{mb: 3}}
              />
              <CustomField
                title='Numero de dormitorios'
                options={numberOfRooms}
                sx={{mb: 3}}
              />
              <CustomField
                title='Numero de banos'
                options={numberOfBaths}
                sx={{mb: 3}}
              />
              <CustomField
                title='Numero de garajes'
                options={numberOfGarages}
                sx={{mb: 3}}
              />

              <Box mb={3}>
                <Typography variant='h6' sx={{mb: 1}}>Mas opciones</Typography>
                <Autocomplete
                  size='small'
                  multiple
                  options={sampleOptions}
                  getOptionLabel={(option: any) => option.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="Seleccionar"
                    />
                  )}
                />
              </Box>

              <Box mb={3}>
                <Typography variant='h6' sx={{mb: 1}}>Buscar por referencia</Typography>
                <TextField fullWidth size='small' placeholder='Ref.'/>
              </Box>

              <Button size='small' fullWidth variant='contained'>Buscar</Button>

            </Grid>
            <Grid item container spacing={2} xs={12} md={8}>
              <Grid item xs={12}>
                <Typography align={'center'} variant='h3'>14 Inmuebles en venta</Typography>
              </Grid>
              <Grid item xs={6} sx={{display: 'flex', alignItems: 'center'}}>
                <Box mr={2}>Ordenar por</Box>
                <CustomField
                  options={housingType}
                  sx={{width: '200px'}}
                />

              </Grid>
              <Grid item xs={6} sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Box display='flex'>
                  <IconButton onClick={() => setViewType('grid')}>
                    <AppsIcon color={viewType === 'grid' ? 'primary' : ''}/>
                  </IconButton>
                  <IconButton onClick={() => setViewType('list')}>
                    <FormatListBulletedIcon color={viewType === 'list' ? 'primary' : ''}/>
                  </IconButton>
                  <IconButton onClick={() => setViewType('map')}>
                    <LocationOnIcon color={viewType === 'map' ? 'primary' : ''}/>
                  </IconButton>
                </Box>
              </Grid>
              {
                viewType !== 'map' &&
                LATEST_ELEMENTS_DATA.map(element => (
                  <Grid item xs={12} sm={viewType === 'grid' ? 6 : 12}>
                    <ProductComponent
                      product={element}
                      view={viewType}
                    />
                  </Grid>
                ))
              }
              {
                viewType === 'map' &&
                <Box mt={6} component='img' src={map} height='750px' sx={{ objectFit: 'cover' }} />
              }
              <Grid item xs={12} sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Pagination sx={{my: 5}} count={10} variant="outlined" shape="rounded"/>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <LifestyleBanner/>
        <ContactBanner/>
      </>
    </Page>
  )
}
