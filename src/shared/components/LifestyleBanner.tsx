import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {LIFESTYLE_BANNER_DATA} from "@/shared/utils/mock/LifestyleBanner";
import {useNavigate} from "react-router-dom";

export default function LifestyleBanner() {
  const navigate = useNavigate()
  return (
    <Box sx={{backgroundColor: '#f4f4f4'}} py={5}>
      <Container>
        <Typography variant='h2' align='center'>Define tu modo de vida</Typography>
        <Box display='flex' justifyContent='center' alignItems='center' gap={2} m={4}>
          {
            LIFESTYLE_BANNER_DATA.map(element => (
              <Box key={element.path} sx={{position: 'relative', cursor: 'pointer'}} onClick={() => navigate(element.path)}>
                <Box component='img' height='300px' sx={{objectFit: 'cover'}} src={element.img}/>
                <Box sx={{p: 1, position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#08222094'}}>
                  <Typography align='center' color='#ffff' variant='h5'>{element.label}</Typography>
                </Box>
              </Box>
            ))
          }
        </Box>
      </Container>
    </Box>
  )
}
