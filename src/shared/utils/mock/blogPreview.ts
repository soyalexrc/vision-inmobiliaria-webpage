import asesor from '@/assets/images/asesor-comercial.jpg'

export const BLOG_PREVIEW_DATA = [
  {
    img: asesor,
    id: 1,
    // title: 'CONSEJOS PARA ESCOGER LA MEJOR HIPOTECA PARA TU NUEVO HOGAR',
    // path: 'ref-1'
  },
  {
    img: asesor,
    id: 2,
    // title: 'TODAS LAS PREGUNTAS QUE TIENES QUE HACER EN LA VISITA DE UN PISO',
    // path: 'ref-2'
  },
  {
    img: asesor,
    id: 3,
    // title: '¿QUE GASTOS SON LOS QUE CORRESPONDEN A UN ARRENDATARIO Y UN ARRENDADOR?',
    // path: 'ref-3'
  }
]

export interface BlogPreview {
  img: string,
  id: number
}
