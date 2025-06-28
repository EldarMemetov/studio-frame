import Container from '@/shared/container/Container';
import s from './AboutSection.module.scss';
export default function AboutSection() {
  return (
    <section id="about" className={s.section}>
      <Container>
        <div>
          <h2>AboutSection</h2>
        </div>
      </Container>
    </section>
  );
}
