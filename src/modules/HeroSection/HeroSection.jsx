import Container from '@/shared/container/Container';
import s from './HeroSection.module.scss';
export default function HeroSection() {
  return (
    <section className={s.section}>
      <Container>
        <div>
          <h2>HeroSection</h2>
        </div>
      </Container>
    </section>
  );
}
