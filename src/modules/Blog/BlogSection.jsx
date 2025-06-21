import Container from '@/shared/container/Container';
import s from './BlogSection.module.scss';
export default function BlogSection() {
  return (
    <section className={s.section}>
      <Container>
        <div>
          <h2>BlogSection</h2>
        </div>
      </Container>
    </section>
  );
}
