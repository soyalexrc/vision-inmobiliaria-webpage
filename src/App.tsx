import React from 'react';
import ThemeConfig from "@/styles/theme";
import GlobalStyles from "@/styles/theme/globalStyles";
import ScrollToTop from "@/shared/components/ScrollToTop";
import Router from "@/routes";
import {SnackbarProvider} from 'notistack'
// @ts-ignore
import TawkTo from 'tawkto-react'

const propertyId = '63bdab1947425128790cb8cf';
const tawkId = '1gmee8ng9';


function App() {
  React.useEffect(() => {
    const tawk = new TawkTo(propertyId, tawkId)

    tawk.onStatusChange((status: any) =>
    {
      console.log('status', status)
    })
  }, [])


  return (
    <ThemeConfig>
      <GlobalStyles />
      <ScrollToTop />
      <SnackbarProvider preventDuplicate maxSnack={4}  autoHideDuration={2000} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
        <Router />
      </SnackbarProvider>
    </ThemeConfig>
  );
}

export default App;

