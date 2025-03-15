import { LazyLoadImages } from '@arazaWeb/services';
import { component$, Slot, useVisibleTask$ } from '@builder.io/qwik';

export const General = component$(() => {

  // eslint-disable-next-line
  useVisibleTask$(() => {
    LazyLoadImages();
  });

  return <Slot />;
});
