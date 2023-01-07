import {Suspense, lazy} from "react";
import {Navigate, useRoutes} from "react-router-dom";
// layouts
import UserLayout from "@/shared/layouts/UserLayout";
import NotFoundLayout from "@/shared/layouts/NotFoundLayout";
// guards
// components
import LoadingScreen from "@/shared/components/LoadingScreen";
import UserProtectedRoute from "./guards/UserProtectedRoute";

const Loadable = (Component: any) => (props: any) => {
  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            top: 0,
            left: 0,
            width: 1,
            zIndex: 9999,
            position: "fixed",
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "*",
      element: <NotFoundLayout/>,
      children: [
        {path: "404", element: <NotFoundComponent/>},
        {path: "*", element: <Navigate to="/404" replace/>},
      ],
    },
    {
      path: '/',
      element: (
        // <UserProtectedRoute>
        <UserLayout/>
        // </UserProtectedRoute>
      ),
      children: [
        {path: '', element: <HomePage/>},
        {path: 'venta', element: <SellPage/>},
        {path: 'alquiler', element: <RentPage/>},
        {path: 'servicios', element: <ServicesPage/>},
        // {path: 'obra-nueva', element: <NewConstructionPage/>},
        // {path: 'registra-tu-vivienda', element: <RegisterHousingPage/>},
        {path: 'acerca-de-nosotros', element: <AboutPage/>},
        {path: 'contacto', element: <ContactPage/>},
        {path: 'contacto/trabaja-con-nosotros', element: <WorkWithUsPage/>},
      ]
    },
  ])
}


const NotFoundComponent = Loadable(lazy(() => import('../shared/components/NotFoundComponent')));

// home
const HomePage = Loadable(lazy(() => import('../features/home/pages/HomePage')));
const SellPage = Loadable(lazy(() => import('../features/sell/pages/SellListPage')));
const RentPage = Loadable(lazy(() => import('../features/rent/pages/RentListPage')));
const ServicesPage = Loadable(lazy(() => import('../features/services/pages/ServicesPage')));
// const NewConstructionPage = Loadable(lazy(() => import('../features/newConstruction/pages')));
// const RegisterHousingPage = Loadable(lazy(() => import('../features/registerHousing/pages')));
const AboutPage = Loadable(lazy(() => import('../features/about/pages/AboutPage')));
const ContactPage = Loadable(lazy(() => import('../features/contact/pages')));
const WorkWithUsPage = Loadable(lazy(() => import('../features/contact/pages/WorkWithUsPage')));

