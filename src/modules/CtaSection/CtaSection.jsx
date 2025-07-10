import Button from '@/shared/components/button/Button';
import Container from '@/shared/container/Container';
import Link from 'next/link';
import s from './CtaSection.module.scss';
export default function CtaSection() {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.containerContent}>
          <div className={s.contentText}>
            <h2 className={s.title}>
              Отримайте безкоштовну консультацію — підберемо оптимальне рішення
            </h2>
          </div>
          <Link href="/#contact" passHref>
            <Button variant={'variant1'}>Замовити консультацію</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
