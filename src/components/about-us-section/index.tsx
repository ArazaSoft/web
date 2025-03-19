import { component$ } from '@builder.io/qwik';
import { CardInformation } from '@arazaWeb/components';
import { Logo } from '@arazaWeb/media/images';
import type { ICardInformation } from '@arazaWeb/interfaces';

export const AboutUsSection = component$(() => {
  const cardInformationData: ICardInformation[] = [
    {
      id: 'card-lider',
      title: '🚀 Liderando la Revolución Tecnológica',
      description:
        'No solo construimos software, diseñamos soluciones que transforman industrias. Con innovación y estrategia, convertimos ideas en tecnología que impulsa el cambio.',
      image: <Logo alt="icon ejemplo" class="arz-card-information-img" />,
    },
    {
      id: 'card-inteligencia',
      title: '🧠 Inteligencia Artificial con Propósito',
      description:
        'Desarrollamos inteligencia artificial aplicada a resolver desafíos reales. Optimizamos procesos, mejoramos la toma de decisiones y creamos soluciones eficientes para un mundo en constante evolución.',
      image: <Logo alt="icon ejemplo" class="arz-card-information-img" />,
    },
    {
      id: 'card-medida',
      title: '⚡ Software a la Medida, sin Límites',
      description:
        'Cada empresa es única, y su tecnología también debe serlo. Creamos software escalable y seguro que se ajusta a las necesidades estratégicas de cada negocio.',
      image: <Logo alt="icon ejemplo" class="arz-card-information-img" />,
    },
    {
      id: 'card-global',
      title: '🌍 Impacto Global, Enfoque Personalizado',
      description:
        'Trabajamos con visión global y un enfoque detallado en cada cliente. La excelencia, la innovación y la seguridad son la base de cada solución que desarrollamos.',
      image: <Logo alt="icon ejemplo" class="arz-card-information-img" />,
    },
    {
      id: 'card-futuro',
      title: '💡 Innovación que Impulsa el Futuro',
      description:
        'Exploramos nuevas posibilidades, desarrollamos soluciones vanguardistas y aseguramos que cada avance tecnológico se traduzca en valor real para nuestros clientes.',
      image: <Logo alt="icon ejemplo" class="arz-card-information-img" />,
    },
  ];

  return (
    <section class="p-4 pt-7 text-center md:p-10">
      <h2 class="text-orange text-3xl font-bold">
        Nuestra visión: <span class="text-green">Innovación sin limites</span>
      </h2>

      <div class="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {cardInformationData.map(card => (
          <CardInformation key={card.id} title={card.title} description={card.description} image={card.image} />
        ))}
      </div>
    </section>
  );
});
