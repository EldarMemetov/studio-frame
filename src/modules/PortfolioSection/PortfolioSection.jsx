import Container from '@/shared/container/Container';
import s from './PortfolioSection.module.scss';
import Link from 'next/link';

const works = [
  { slug: 'site-1', title: 'Сайт для бизнеса' },
  { slug: 'site-2', title: 'Интернет-магазин' },
  { slug: 'site-3', title: 'Лендинг для продукта' },
];

export default function PortfolioSection({ locale }) {
  return (
    <section className={s.section}>
      <Container>
        <h2>Портфоліо</h2>
        <ul>
          {works.map((work) => (
            <li key={work.slug}>
              <Link href={`/${locale}/portfolio/${work.slug}`}>
                {work.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
