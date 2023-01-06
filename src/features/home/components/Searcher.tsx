import React from 'react';
import {Box, Container, Grid, Autocomplete, TextField, Typography, Button} from "@mui/material";

const sampleOptions = [
  {title: 'option 1'},
  {title: 'option 2'},
  {title: 'option 3'},
  {title: 'option 4'},
  {title: 'option 5'},
]


function CustomField({options, title, value, onChange, disabled = false}: any) {
  return (
    <>
      <Typography variant='h6' sx={{mb: 2}}>{title}</Typography>
      <Autocomplete
        size='small'
        disablePortal
        value={value}
        onChange={onChange}
        options={options}
        disabled={disabled}
        getOptionLabel={(option) => option.label || ''}
        isOptionEqualToValue={(option, value) => option.label === value.label}
        renderOption={(props, option) => (
          <li key={option.id} {...props}>{option.label}</li>
        )}
        renderInput={(params) => <TextField {...params} label="Seleccionar"/>}
      />
    </>
  )
}

export default function Searcher() {
  const [filters, setFilters] = React.useState({
    operation: {label: ''},
    typeOfAsset: {label: ''},
    state: {label: ''},
    zone: {label: ''},
    priceFrom: '',
    priceTo: '',
    reference: '',
    moreOptions: []
  });

  function handleChange(key: any, value: any) {
    setFilters(prevState => ({
      ...prevState,
      [key]: value
    }))

    if (key === 'operation' && value.label && value.label === 'Traspaso de fondo') {
      setFilters(prevState => ({
        ...prevState,
        typeOfAsset: {label: 'Local'}
      }))
    }
    if (key === 'state' ) {
      setFilters(prevState => ({
        ...prevState,
        zone: {label: ''}
      }))
    }


  }

  function getZonesByState() {
    if (filters.state?.label === 'Carabobo') {
      return [
        {label: 'Valencia'},
        {label: 'Naguangua'},
        {label: 'San Diego'},
        {label: 'Guacara'},
        {label: 'Los Guayos'},
        {label: 'El Libertador'},
      ]
    } else if (filters.state?.label === 'Cojedes') {
      return [
        {label: 'Ezequiel Zamora'},
      ]
    } else if (filters.state?.label === 'Falcón') {
      return [
        {label: 'José Laurencio Silva '},
      ]
    } else {
      return [{label: ''}]
    }


  }


  return (
    <Box my={5}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <CustomField
              options={ [
                {label: ''},
                {label: 'Compra'},
                {label: 'Venta'},
                {label: 'Alquiler'},
                {label: 'Traspaso de fondo'},
                {label: 'Estadias Vacacionales'},
              ]}
              title='Operacion'
              value={filters.operation}
              onChange={(_: any, newValue: any) => handleChange('operation', newValue)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CustomField
              options={ [
                {label: ''},
                {label: 'Casa'},
                {label: 'Townhouse'},
                {label: 'Apartamento'},
                {label: 'Local'},
                {label: 'Oficina'},
                {label: 'Galpón'},
                {label: 'Terreno'},
                {label: 'Finca'},
              ]}
              title='Inmueble'
              value={filters.typeOfAsset}
              disabled={filters.operation?.label === 'Traspaso de fondo'}
              onChange={(_: any, newValue: any) => handleChange('typeOfAsset', newValue)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CustomField
              options={ [
                {label: ''},
                {label: 'Carabobo'},
                {label: 'Cojedes'},
                {label: 'Falcón'},
              ]}
              title='Estado'
              value={filters.state}
              onChange={(_: any, newValue: any) => handleChange('state', newValue)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CustomField
              options={getZonesByState()}
              title='Municipio'
              value={filters.zone}
              onChange={(_: any, newValue: any) => handleChange('zone', newValue)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6' sx={{mb: 2}}>Precio</Typography>
            <Box display='flex' alignItems='center'>
              <TextField
                size='small'
                sx={{ mr: 2, ml: 1 }}
                fullWidth
                label="Desde"
                variant="outlined"
                value={filters.priceFrom}
                onChange={(event) => handleChange('priceFrom', event.target.value)}
              />
              <Box>-</Box>
              <TextField
                size='small'
                sx={{ ml: 2, mr: 1 }}
                fullWidth
                label="Hasta"
                variant="outlined"
                value={filters.priceTo}
                onChange={(event) => handleChange('priceTo', event.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6' sx={{mb: 2}}>Referencia</Typography>
              <TextField  value={filters.reference} onChange={(event) => handleChange('reference', event.target.value)} fullWidth size='small' label='Palabra clave / Codigo'  variant="outlined"/>
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
                  label='Seleccionar'
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