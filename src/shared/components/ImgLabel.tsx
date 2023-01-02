//imports

import {Box, Typography} from "@mui/material";

interface ImgLabelProps {
  label: string,
  secondLabel?: boolean
}

export default function ImgLabel({label, secondLabel}: ImgLabelProps) {
  return (
    <Box sx={{
      position: 'absolute',
      top: secondLabel ? 40 : 0,
      left: 0,
      borderTopRightRadius: '15px',
      borderBottomRightRadius: '15px',
      backgroundColor: '#2C3843',
      padding: '.2rem 1.2rem',
    }}>
      <Typography variant='caption' color='#ffffff'>
        {label}
      </Typography>
    </Box>
  )
}
