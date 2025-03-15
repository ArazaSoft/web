import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <h1>No encontamos nada</h1>;
});

export const head: DocumentHead = {
  title: 'Oops! Página no encontrada | ARAZÁ',
  meta: [
    {
      name: 'description',
      content: 'La página que buscas no existe o ha sido movida. En ARAZÁ desarrollamos soluciones avanzadas en inteligencia artificial y software a la medida. 🚀',
    },
  ],
};
