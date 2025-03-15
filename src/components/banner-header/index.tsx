import { $, component$ } from '@builder.io/qwik';
import { BackgroudHeader, LogoName } from '@arazaWeb/media/images';
import { HEADER_DESCRIPTION, HEADER_TITLE } from '@arazaWeb/constants';

export const BannerHeader = component$(() => {
  const scrollToHeaderEnd = $(() => {
    const header = document.getElementById('banner-header');
    if (header) {
      const headerHeight = header.offsetHeight;
      window.scrollTo({ top: headerHeight, behavior: 'smooth' });
    }
  });

  return (
    <header>
      <div id="banner-header" class="relative h-[80dvh] min-h-[600px] w-screen shadow-lg">
        <BackgroudHeader alt="Imagen cover fondo tecnológico" class="no-select absolute inset-0 h-full w-full object-cover object-left-bottom" />

        <div class="absolute inset-0 flex flex-col items-center justify-center px-6 py-16 pb-[100px] sm:px-8 md:px-12 lg:px-16">
          <div class="relative flex h-[200px] min-h-[100px] w-[300px] items-center justify-center p-4">
            <LogoName alt="Logo de Arazá, un cerebro en naranja y verde con circuitos" class="no-select absolute inset-0 h-full w-full object-contain object-center" />
          </div>

          <h1 class="text-orange mt-4 p-10 text-center text-2xl font-bold md:text-4xl">{HEADER_TITLE}</h1>

          <p class="mt-4 max-w-2xl text-center text-lg text-gray-200 md:text-xl">{HEADER_DESCRIPTION}</p>
        </div>

        <div class="absolute inset-x-0 bottom-[20px] flex justify-center">
          <button onClick$={scrollToHeaderEnd} class="cursor-pointer" aria-label="Continuar al contenido">
            <svg class="text-orange h-10 w-10 animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
});
