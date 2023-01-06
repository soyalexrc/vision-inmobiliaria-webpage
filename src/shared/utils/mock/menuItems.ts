export const NAVBAR_ITEMS = [
  {
    value: 'ALQUILER',
    label: 'Alquiler',
    path: '/alquiler'
  },
  // {
  //   value: 'OBRA_NUEVA',
  //   label: 'Obra Nueva',
  //   path: '/obra-nueva'
  // },
  // {
  //   value: 'REGISTRA_TU_VIVIENDA',
  //   label: 'Registra tu Vivienda',
  //   path: '/registra-tu-vivienda'
  // },
  {
    value: 'ACERCA_DE_NOSOTROS',
    label: 'Acerca de Induo',
    id: 'about-id',
    children: [
      {
        value: 'QUIENES_SOMOS',
        label: '¿Quiénes somos?',
        path: '/acerca-de-nosotros',
      },
      {
        value: 'EQUIPO_DE_TRABAJO',
        label: 'Equipo de trabajo',
        path: '/equipo-de-trabajo'
      }
    ]
  },
  {
    value: 'CONTACTO',
    label: 'Contacto',
    path: '/contacto'
  },
]
