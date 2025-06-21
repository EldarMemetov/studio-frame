import Container from '@/shared/container/Container';
import s from './Footer.module.scss';
export default function Footer() {
  return (
    <footer className={s.section}>
      <Container>
        <div>
          <h2>Footer</h2>
        </div>
      </Container>
    </footer>
  );
}
