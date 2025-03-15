import { component$, useVisibleTask$, useSignal } from '@builder.io/qwik';

export const ServicesSection = component$(() => {
  const scrollVisibleController = useSignal(0);
  const stylesBgServices = useSignal({});

  const imageBgServices = './src/images/bg-services.webp'

  // eslint-disable-next-line
  useVisibleTask$(() => {
    if (scrollVisibleController.value === 0) {
      scrollVisibleController.value = window.scrollY;
    }

    const handleScroll = () => {
      if (scrollVisibleController.value > 0) {
        const offset = (scrollVisibleController.value - window.scrollY) * 0.3;
        stylesBgServices.value = {
          backgroundImage: `url('${imageBgServices}')`,
          backgroundPosition: `center ${offset}px`
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const services = [
    {
      title: 'Software a la Medida: Tu Visión, Nuestro Código',
      desc: 'Diseñamos y desarrollamos aplicaciones a medida que se adaptan a las necesidades de tu empresa, optimizando procesos y brindando soluciones escalables con la última tecnología.',
      img: './src/images/service-dev.webp',
    },
    {
      title: 'Inteligencia Artificial: Potencia tu Negocio con IA',
      desc: 'Integramos inteligencia artificial en tus procesos para automatizar tareas, mejorar la toma de decisiones y ofrecer soluciones inteligentes que impulsan la eficiencia y la innovación.',
      img: './src/images/service-ia.webp',
    },
    {
      title: 'Consultoría Tecnológica: Transforma tu Empresa con Expertos',
      desc: 'Te guiamos en la adopción de tecnologías emergentes para optimizar tu negocio. Desde arquitectura de software hasta estrategias de transformación digital, nuestro equipo convierte desafíos en oportunidades.',
      img: './src/images/service-consulting.webp',
    },
  ];

  return (
    <section
      class="lazyloadBg x1:mx-0 relative mx-4 mt-7 rounded-2xl bg-cover bg-fixed p-4 pt-10 shadow-lg sm:p-10"
      data-arzload-bg={imageBgServices}
      data-arzload-style=''
      style={stylesBgServices.value}
    >
      <div class="absolute inset-0 rounded-2xl bg-black/70 shadow-lg"></div>

      <div class="relative text-white">
        <h2 class="text-orange mb-6 text-center text-3xl font-bold">Nuestros Servicios</h2>
        <p class="mx-auto max-w-2xl text-center text-lg text-white">
          Ofrecemos soluciones tecnológicas innovadoras utilizando inteligencia artificial y desarrollo de software a la medida. Transformamos ideas en productos
          digitales de alto impacto.
        </p>

        <div class="mt-8 grid gap-6 md:grid-cols-3">
          {services.map(service => (
            <div key={service.title} class="relative transform overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
              <div class="lazyloadBg h-40 bg-cover bg-center" data-arzload-bg={service.img}
                data-arzload-style=''></div>

              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-200">{service.title}</h3>
                <p class="mt-2 text-white">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
