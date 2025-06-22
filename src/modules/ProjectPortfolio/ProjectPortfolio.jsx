import Container from '@/shared/container/Container';

const works = [
  {
    slug: 'site-1',
    title: 'Сайт для бизнеса',
    description: 'Описание сайта для бизнеса',
  },
  {
    slug: 'site-2',
    title: 'Интернет-магазин',
    description: 'Описание интернет-магазина',
  },
  {
    slug: 'site-3',
    title: 'Лендинг для продукта',
    description: 'Описание лендинга',
  },
];

export default function ProjectPortfolio({ locale, slug }) {
  const work = works.find((w) => w.slug === slug);

  if (!work) {
    return (
      <Container>
        <h1>Работа не найдена</h1>
      </Container>
    );
  }

  return (
    <Container>
      <h1>{work.title}</h1>
      <p>{work.description}</p>
    </Container>
  );
}
