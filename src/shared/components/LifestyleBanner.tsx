import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {LIFESTYLE_BANNER_DATA} from "@/shared/utils/mock/LifestyleBanner";
import CarouselCenterMode from "./carousel/CarouselCenterMode";

export default function LifestyleBanner() {
  return (
    <Box sx={{backgroundColor: '#f4f4f4'}} py={5}>
      <Container maxWidth='xl'>
        <Typography variant='h2' align='center'>Encuentra tu inmueble ideal</Typography>
        <Box display='flex' justifyContent='center' alignItems='center' gap={2} m={4}>
          <CarouselCenterMode
            data={LIFESTYLE_BANNER_DATA}
          />

        </Box>
      </Container>
    </Box>
  )
}
