import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
// material
import {styled} from "@mui/material/styles";
import {
  Box,
  Button, Paper,
  Typography,
} from "@mui/material";
// utils
import {CarouselControlsPagingBelow} from "./controls";
import {useNavigate} from "react-router-dom";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({theme}) => ({
  overflow: "hidden",
  position: "relative",
  "&:before, &:after": {
    top: 0,
    left: 0,
    zIndex: 8,
    width: 48,
    content: "''",
    height: "100%",
    display: "none",
    position: "absolute",
    [theme.breakpoints.up(480)]: {
      display: "block",
    },
  },
  "&:after": {
    right: 0,
    left: "auto",
    transform: "scaleX(-1)",
  },
  "& .slick-track": {
    display: "inline-flex",
  },
  "& .slick-arrow": {
    display: "none !important",
  },
}));

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object,
};


function CarouselItem({item}: any) {
  const navigate = useNavigate();

  return (
    <Paper elevation={2} sx={{m: 1, p: 2}}>
      <Box display='flex' justifyContent='center' my={2}>
        <Box component='img' width="45px" height="45px" sx={{objectFit: 'cover', borderRadius: '100%'}} src={item.img}/>
      </Box>
      <Typography align='center' variant='h6' fontWeight='bold'>Nombre de usuario</Typography>
      <Typography align='center' fontSize={12} color='#808080' letterSpacing={3} fontWeight={500}>Cargo de
        usuario - empresa</Typography>
      <Typography sx={{ p: 2 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s.
      </Typography>
    </Paper>
  );
}


export default function CommentsCarousel({data}: any) {
  const settings = {
    dots: true,
    slidesToShow: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    // nextArrow: <CustomArrow onClick={() => handlePrevious()} side='left'/>,
    // prevArrow: <CustomArrow onClick={() => handleNext()} side='right'/>,
    responsive: [
      {
        breakpoint: 480,
        settings: {slidesToShow: 1, centerPadding: "0"},
      },
    ],
    ...CarouselControlsPagingBelow({sx: {mt: 3}}),
  };

  return (
    <RootStyle>
      <Slider {...settings} >
        {data.map((item: any, index: number) => (
          <CarouselItem item={item} key={index + 1}/>
        ))}
      </Slider>
    </RootStyle>
  );

}
