import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import bannerBackground from '@/assets/images/contact-banner.jpg'
import {useNavigate} from "react-router-dom";

export default function ContactBanner() {
  const navigate = useNavigate()
  return (
    <Box sx={{
      position: 'relative'
    }}>
      <Box component='img' height={367} width='100%' src={bannerBackground} />

      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>

        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography align='center' variant='h2' color='#ffffff'>
            Te asesoramos para conseguir el inmueble <br/>
            que mejor se adapte a ti
          </Typography>
          <Button variant='contained' onClick={() => navigate('/contacto')}  sx={{ mt: 3 }}>Contactanos</Button>
        </Box>
      </Box>
    </Box>
  )
}
