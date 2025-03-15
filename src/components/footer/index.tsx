import { LogoSmallHorizontal } from '@arazaWeb/media/images';
import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <footer class="text-green relative mt-10 p-4 text-center font-bold">
      <p>
        &copy; {new Date().getFullYear()} ARAZÁ S.A.S. · Diseñado con IA por <LogoSmallHorizontal alt="Araza" class="inline-block h-6 inset-0 h-[40px] w-[125px] mt-[-3px] object-contain object-left" />
      </p>

      {/* Sombra en la izquierda */}
      <div class="from-green/80 absolute bottom-0 left-0 h-full w-1/3 bg-gradient-to-r to-transparent blur-2xl lg:blur-3xl"></div>

      {/* Sombra en la derecha */}
      <div class="from-orange/80 absolute right-0 bottom-0 h-full w-1/3 bg-gradient-to-l to-transparent blur-2xl lg:blur-3xl"></div>
    </footer>
  );
});
