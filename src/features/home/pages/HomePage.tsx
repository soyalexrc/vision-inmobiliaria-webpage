import React from 'react';
import Page from "@/shared/components/Page";
import ContactBanner from "@/shared/components/ContactBanner";
import LifestyleBanner from "@/shared/components/LifestyleBanner";
import OurServices from "@/features/home/components/OurServices";
import BlogPreview from "@/features/home/components/BlogPreview";
import LatestElements from "@/features/home/components/LatestElements";

export default function HomePage() {
  return (
    <Page title='HomePage' description='Some Descripciionb'>
      <div>
        hello world from HomePage
        <LifestyleBanner />
        <ContactBanner />
        <LatestElements />
        <OurServices />
        <BlogPreview />
      </div>
    </Page>
  )
}
