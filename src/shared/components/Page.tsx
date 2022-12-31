import { Helmet } from 'react-helmet-async';
import {ForwardedRef, forwardRef} from 'react';
// material
import { Box } from '@mui/material';
import {styled} from "@mui/material/styles";
import {APP_BAR_DESKTOP, APP_BAR_MOBILE} from "@/shared/constants";
// utils

// ----------------------------------------------------------------------

interface props {
  children: JSX.Element,
  title: string,
  description: string,
  sx?: any
}




const RootStyle = styled(Box)(({theme}) => ({
  minHeight: "100vh",
  overflowX: 'hidden',
  width: "100%",
  position: 'relative',
  paddingTop: APP_BAR_MOBILE / 1.8,
  [theme.breakpoints.up("md")]: {
    paddingTop: APP_BAR_DESKTOP / 2,
  },
}));

const Page = forwardRef(({ children, title, description, sx }: props, ref: ForwardedRef<unknown>) => {

  return (
    <RootStyle ref={ref} sx={sx}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </RootStyle>
  );
});

export default Page;
