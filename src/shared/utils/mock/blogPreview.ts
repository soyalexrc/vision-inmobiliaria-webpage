import blog1 from '@/assets/images/blog/blog-1.jpg'
import blog2 from '@/assets/images/blog/blog-2.jpg'
import blog3 from '@/assets/images/blog/blog-3.jpg'

export const BLOG_PREVIEW_DATA = [
  {
    img: blog1,
    title: 'CONSEJOS PARA ESCOGER LA MEJOR HIPOTECA PARA TU NUEVO HOGAR',
    path: 'ref-1'
  },
  {
    img: blog2,
    title: 'TODAS LAS PREGUNTAS QUE TIENES QUE HACER EN LA VISITA DE UN PISO',
    path: 'ref-2'
  },
  {
    img: blog3,
    title: '¿QUE GASTOS SON LOS QUE CORRESPONDEN A UN ARRENDATARIO Y UN ARRENDADOR?',
    path: 'ref-3'
  }
]

export interface BlogPreview {
  img: string,
  title: string,
  path: string
}
