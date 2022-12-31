import React from 'react';
import {Box, Container, Typography, Grid} from "@mui/material";
import banner from '@/assets/images/services-banner.jpg';
import {SERVICES_DATA} from "@/shared/utils/mock/services";

export default function OurServices() {
  return (
    <Box sx={{
      backgroundImage: `url(${banner})`,
      height: 'auto',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      py: 5
    }}>
      {/*<Box component='img' src={banner} width='100%' height='auto'/>*/}
      <Box >
        <Typography sx={{ my: 5 }} variant='h2' align='center' color='#ffff'>Nuestros servicios</Typography>
        <Container >
          <Grid container spacing={2}  >
            {
              SERVICES_DATA.map(element => (
                <Grid item xs={12} md={3} key={element.title}>
                  <Box display='flex' justifyContent='center'>
                    <Box  component='img' src={element.img} />
                  </Box>
                  <Typography sx={{ mb: 4, mt: 2 }} align='center' variant='h4' color='#ffff'>{element.title}</Typography>
                  <Typography color='#ffff'>{element.content}</Typography>
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
