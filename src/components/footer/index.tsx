import { LogoSmallHorizontal } from '@arazaWeb/media/images';
import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <footer class="text-green relative mt-10 p-4 text-center font-bold">
      <p>
        &copy; {new Date().getFullYear()} ARAZÁ S.A.S. · Diseñado con IA por{' '}
        <LogoSmallHorizontal alt="Araza" class="inset-0 mt-[-3px] inline-block h-6 h-[40px] w-[125px] object-contain object-left" />
      </p>
      <div class="from-green/80 absolute bottom-0 left-0 h-full w-1/3 bg-gradient-to-r to-transparent blur-2xl lg:blur-3xl"></div>
      <div class="from-orange/80 absolute right-0 bottom-0 h-full w-1/3 bg-gradient-to-l to-transparent blur-2xl lg:blur-3xl"></div>
    </footer>
  );
});
