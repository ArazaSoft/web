import { LogoAlianzaJuridica, LogoBusinessCloud, LogoCloud2All, LogoGatewayHub } from '@arazaWeb/media/images/parthers';
import { component$ } from '@builder.io/qwik';

export const PartnersSection = component$(() => {
  const partners = [
    { name: 'Cloud2All', logo: <LogoCloud2All alt="Logo Cloud2All" class="arz-parther-logos" /> },
    { name: 'Business Cloud', logo: <LogoBusinessCloud alt="Logo Business Cloud" class="arz-parther-logos no-select" /> },
    { name: 'Gateway Hub', logo: <LogoGatewayHub alt="Logo Gateway Hub" class="arz-parther-logos" /> },
    { name: 'Alianza Juridica', logo: <LogoAlianzaJuridica alt="Logo Alianza Juridica" class="arz-parther-logos no-select" /> },
  ];

  return (
    <section class="px-5 py-5 text-center">
      <h2 class="text-green text-3xl font-bold">Nuestros Aliados</h2>
      <p class="mt-2 text-gray-600">Crecemos juntos con aliados estratégicos.</p>
      <div class="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,minmax(100px,1fr))]">
        {partners.map(partner => (
          <div key={partner.name} class="flex w-full flex-col items-center justify-center transition hover:scale-105 focus:scale-105 active:scale-105">
            {partner.logo}
          </div>
        ))}
      </div>
    </section>
  );
});
