import { AboutUsSection, BannerHeader, ContactSection, Footer, General, PartnersSection, SectionContainer, ServicesSection } from '@arazaWeb/components';
import { META_DATA_HOME } from '@arazaWeb/constants';
import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <General>
      <BannerHeader />
      <SectionContainer>
        <AboutUsSection />
        <PartnersSection />
        <ServicesSection />
        <ContactSection />
      </SectionContainer>
      <Footer />
    </General>
  );
});

export const head: DocumentHead = META_DATA_HOME;
