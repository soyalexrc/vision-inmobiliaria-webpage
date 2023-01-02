import React from 'react';
import {Box, Container, Divider, Grid, Typography} from "@mui/material";
import {LATEST_ELEMENTS_DATA} from "@/shared/utils/mock/latestElements";

export default function LatestElements() {
  return (
    <Box sx={{ py: 5 , backgroundColor: '#ffff' }}>
      <Typography align='center' sx={{ mb: 5 }} variant='h2'>Ultimas novedades</Typography>
      <Container>
        <Grid container spacing={5}>
          {
            LATEST_ELEMENTS_DATA.map(element => (
              <Grid
                key={element.title}
                item
                xs={12}
                md={4}
                sx={{
                  height: 'auto',
                  cursor: 'pointer',
                  "&:hover": {
                    "& h6": {
                      textDecoration: 'underline'
                    }
                  }
              }}>
                <Box component='img' width='100%' height='200px' src={element.img} />
                <Box sx={{ backgroundColor: '#f6f6f6', p: 2, minHeight: '181px' }}>
                  <Typography variant='h6' align='center'>{element.title}</Typography>

                  <Box display='flex' alignItems='center' justifyContent='center' mt={3}>
                  <Typography>{element.meters} m2</Typography>
                    <Divider  sx={{ mx: 2, borderWidth: '1px' }} orientation='vertical' flexItem />
                    <Typography>{element.rooms} Habitaciones</Typography>
                    <Divider sx={{ mx: 2, borderWidth: '1px' }}  orientation='vertical' flexItem />
                    <Typography>{element.bathrooms} Banos</Typography>
                  </Box>

                  <Typography color='primary' variant='h3' align='center'>{element.price} €</Typography>
                </Box>
              </Grid>
            ))
          }

        </Grid>
      </Container>
    </Box>
  )
}
