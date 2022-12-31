import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import {BLOG_PREVIEW_DATA, BlogPreview as Blog} from "@/shared/utils/mock/blogPreview";
import {Link} from "react-router-dom";

export default function BlogPreview() {
  return (
    <Box sx={{py: 5, backgroundColor: '#f4f4f4'}}>
      <Typography align='center' variant='h2'>Te mantenemos informado</Typography>
      <Typography align='center' variant='h5'>Las últimas noticias del mundo inmobiliario</Typography>

      <Container sx={{mt: 5}}>
        <Grid container spacing={2}>
          {
            BLOG_PREVIEW_DATA.map((element: Blog) => (
              <Grid
                sx={{
                  textDecoration: 'none'
                }}
                component={Link}
                to={`/blog/${element.path}`}
                key={element.title}
                item
                xs={12}
                md={4}>
                <Box sx={{
                  cursor: 'pointer',
                  "&:hover": {
                    "& > h6": {
                      textDecoration: 'underline'
                    }
                  }
                }}>
                  <Box component='img' height='250px' sx={{objectFit: 'cover'}} src={element.img}/>
                  <Typography variant='h6' sx={{mt: 3}}>{element.title}</Typography>
                </Box>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </Box>
  )
}
