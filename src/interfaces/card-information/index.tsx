import type { JSXOutput } from '@builder.io/qwik';

export interface ICardInformation {
  id?: string;
  title: string;
  description: string;
  image?: JSXOutput;
}
