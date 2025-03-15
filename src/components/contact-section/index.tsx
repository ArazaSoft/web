import { ArazaLocation } from '@arazaWeb/media/images';
import { component$ } from '@builder.io/qwik';

export const ContactSection = component$(() => {
  return (
    <section class="py-16 px-6 max-w-4xl mx-auto text-center sm:text-left">
      <h2 class="text-4xl font-bold text-green">Contáctanos</h2>
      <p class="mt-2 text-lg text-gray-700">
        Estamos aquí para ayudarte.<br />
        ¡Hablemos y llevemos tu proyecto al siguiente nivel!
      </p>
      <div class="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-8">
        <div class="w-full sm:w-1/2 flex justify-center">
          <ArazaLocation alt="Oficina de Araza Tech"
            class="rounded-2xl shadow-lg inset-0 h-[250px] max-full w-full object-cover object-top"
          />
        </div>
        <div class="w-full sm:w-1/2 space-y-4 text-lg sm:mt-[55px] mt-0">
          <p class="flex items-center gap-3 justify-center sm:justify-start">
            📩{' '}
            <a href="mailto:contacto@araza.tech" class="hover:underline" target="_blank">
              contacto@araza.tech
            </a>
          </p>
          <p class="flex items-center gap-3 justify-center sm:justify-start">
            📞{' '}
            <a href="https://api.whatsapp.com/send?phone=573142991623" class="hover:underline" target="_blank">
              +57 314 299 1623
            </a>
          </p>
          <p class="flex items-center gap-3 justify-center sm:justify-start">
            📍 Calle 123 #45-67, Bogotá, Colombia
          </p>
        </div>
      </div>
    </section>
  );
});
