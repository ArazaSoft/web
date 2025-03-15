import { AboutUsSection, BannerHeader, ContactSection, Footer, General, PartnersSection, ServicesSection } from '@arazaWeb/components';
import { META_DATA_HOME } from '@arazaWeb/constants';
import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <General>
      <BannerHeader />
      <main class="mx-auto w-full max-w-7xl">
        <AboutUsSection />
        <PartnersSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </General>
  );
});

export const head: DocumentHead = META_DATA_HOME;
