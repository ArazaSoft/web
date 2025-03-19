import type { ICardInformation } from '@arazaWeb/interfaces';
import { component$ } from '@builder.io/qwik';

export const CardInformation = component$<ICardInformation>(props => {
  return (
    <article class="group transform rounded-lg bg-white p-6 shadow-lg transition hover:scale-105 focus:scale-105 active:scale-105">
      {props.image && <div class="no-select flex w-full flex-col items-center justify-center">{props.image}</div>}
      <h3 class="mt-4 text-xl font-semibold">{props.title}</h3>
      <p class="mt-2 text-gray-600">{props.description}</p>
    </article>
  );
});
