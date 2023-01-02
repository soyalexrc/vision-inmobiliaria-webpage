import React from 'react';
import {Box, Container, Grid, Autocomplete, TextField, Typography, Button} from "@mui/material";

const sampleOptions = [
  {title: 'option 1'},
  {title: 'option 2'},
  {title: 'option 3'},
  {title: 'option 4'},
  {title: 'option 5'},
]

const data = [
  {
    title: 'Operaciones',
    options: [
      {label: 'Compra'},
      {label: 'Venta'},
      {label: 'Alquiler'},
      {label: 'Traspaso'},
    ]
  },
  {
    title: 'Tipo de vivienda',
    options: [
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
  },
  {
    title: 'Provincia',
    options: [
      {label: 'Guadalajara'},
      {label: 'Madrid'},
    ]
  },
  {
    title: 'Poblacion',
    options: [
      {label: ''}
    ]
  },

]

function CustomField({options, title}: any) {
  return (
    <>
      <Typography variant='h6' sx={{mb: 2}}>{title}</Typography>
      <Autocomplete
        size='small'
        disablePortal
        id="custom-combo-box"
        options={options}
        renderInput={(params) => <TextField {...params} label="Buscar"/>}
      />
    </>
  )
}

export default function Searcher() {
  return (
    <Box my={5}>
      <Container>
        <Grid container spacing={2}>
          {
            data.map(element => (
              <Grid key={element.title} item xs={12} sm={6} md={3}>
                <CustomField
                  options={element.options}
                  title={element.title}
                />
              </Grid>
            ))
          }
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6' sx={{mb: 2}}>Precio</Typography>
            <Box display='flex' alignItems='center'>
              <TextField size='small' sx={{ mr: 2, ml: 1 }} fullWidth label="Desde" variant="outlined"/>
              <Box>-</Box>
              <TextField size='small' sx={{ ml: 2, mr: 1 }} fullWidth label="Hasta" variant="outlined"/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6' sx={{mb: 2}}>Referencia</Typography>
              <TextField  fullWidth size='small' label='Espefica' variant="outlined"/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6' sx={{ mb: 2 }}>Mas Opciones</Typography>
            <Autocomplete
              size='small'
              multiple
              options={sampleOptions}
              getOptionLabel={(option: any) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Seleccionar"
                  placeholder={sampleOptions[1].title}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box display='flex' alignItems='flex-end' height='97%'>
              <Button size='small' variant='contained' fullWidth>Buscar</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
