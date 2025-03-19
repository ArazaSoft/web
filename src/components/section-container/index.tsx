import { component$, Slot } from '@builder.io/qwik';

export const SectionContainer = component$(() => {
  return (
    <main class="mx-auto w-full max-w-7xl">
      <Slot />
    </main>
  );
});
