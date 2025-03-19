import { Contact } from '@arazaWeb/media/images';
import { component$ } from '@builder.io/qwik';

export const ContactSection = component$(() => {
  return (
    <section class="mx-auto max-w-4xl px-6 py-16 text-center sm:text-left">
      <h2 class="text-green text-4xl font-bold">Contáctanos</h2>
      <p class="mt-2 text-lg text-gray-700">
        Estamos aquí para ayudarte.
        <br />
        ¡Hablemos y llevemos tu proyecto al siguiente nivel!
      </p>
      <div class="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
        <div class="flex w-full justify-center sm:w-1/2">
          <Contact alt="Oficina de Araza Tech" class="max-full inset-0 h-[250px] w-full rounded-2xl object-cover object-top shadow-lg" />
        </div>
        <div class="mt-0 w-full space-y-4 text-lg sm:mt-[65px] sm:w-1/2">
          <p class="flex items-center justify-center gap-3 sm:justify-start">
            📩{' '}
            <a href="mailto:contacto@araza.tech" class="hover:underline" target="_blank">
              contacto@araza.tech
            </a>
          </p>
          <p class="flex items-center justify-center gap-3 sm:justify-start">
            📞{' '}
            <a href="https://api.whatsapp.com/send?phone=573142991623" class="hover:underline" target="_blank">
              +57 314 299 1623
            </a>
          </p>
          { /* <p class="flex items-center justify-center gap-3 sm:justify-start">📍 Carrera 15 #36-70, Bogotá, Colombia</p> */}
        </div>
      </div>
    </section>
  );
});
