import React from 'react';
import Page from "@/shared/components/Page";
import ContactBanner from "@/shared/components/ContactBanner";
import LifestyleBanner from "@/shared/components/LifestyleBanner";
import OurServices from "@/features/home/components/OurServices";
import BlogPreview from "@/features/home/components/BlogPreview";
import LatestElements from "@/features/home/components/LatestElements";
import CarouselBasic3 from "@/shared/components/carousel/CarouselBasic3";
import carousel1 from '@/assets/images/banners/carousel-1.jpg';
import carousel2 from '@/assets/images/banners/carousel-2.jpg';
import mainBanner1 from '@/assets/images/banners/mainbanner-1.jpg';
import Searcher from "@/features/home/components/Searcher";

const data = [
  {
    url: '/ventas',
    alt: 'alt',
    image: carousel1
  },
  {
    url: '/alquiler',
    alt: 'alt',
    image: carousel2
  },
]

const mainData = [
  {
    url: '',
    alt: '',
    image: mainBanner1
  }
]

export default function HomePage() {
  return (
    <Page title='HomePage' description='Some Descripciionb'>
      <div>
        <CarouselBasic3 items={mainData} type='banner' showArrows={false} showDots={false} />
        <Searcher />
        <LifestyleBanner />
        <ContactBanner />
        <LatestElements />
        {/*<CarouselBasic3 items={data} type='banner' showArrows={true} />*/}
        <OurServices />
        <BlogPreview />
      </div>
    </Page>
  )
}
