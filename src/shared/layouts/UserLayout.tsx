import {useState} from 'react';
import {Outlet} from 'react-router-dom';
import {
  Box,
  useMediaQuery,
} from "@mui/material";
import Navbar from "@/shared/layouts/components/Navbar";
import MainDrawer from "@/shared/layouts/components/MainDrawer";
import Footer from "@/shared/layouts/components/Footer";


export default function UserLayout() {
  const [open, setOpen] = useState(true);
  const largeScreen = useMediaQuery((theme: any) => theme.breakpoints.up('md'))


  const handleDrawerChange = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{display: 'flex'}}>
      <Navbar open={open} largeScreen={largeScreen} handleDrawerChange={handleDrawerChange}/>
      <MainDrawer open={open} handleDrawerChange={handleDrawerChange}/>
      <Box
        component="main"
        sx={{
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          flexGrow: 1,
          backgroundColor: '#fff'
        }}
      >
        <Outlet/>
        <Footer/>
      </Box>
    </Box>
  )
}
