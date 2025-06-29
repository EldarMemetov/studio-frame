import Container from '@/shared/container/Container';
import AnimatedCounter from '@/shared/components/AnimatedCounter/AnimatedCounter';
import s from './DisplayCompanyFacts.module.scss';
import Image from 'next/image';
import Particles from '@/shared/components/Particles/Particles';

export default function DisplayCompanyFacts() {
  return (
    <section className={s.factsSection}>
      <Particles />

      <Container>
        <div className={s.rays}>
          <span className={s.ray}></span>
          <span className={s.ray}></span>
          <span className={s.ray}></span>
        </div>
        <div className={s.factsWrapper}>
          <Image
            id="magic-planet"
            src="/image/planet.png"
            alt="planet"
            width={1150}
            height={226}
            className={s.image}
            priority
          />

          <ul className={s.factsList}>
            <li className={s.item}>
              <h3 className={s.number}>
                <AnimatedCounter targetNumber={3} duration={1000} />+
              </h3>
              <p className={s.info}>років досвіду</p>
            </li>
            <li className={s.item}>
              <h3 className={s.number}>
                <AnimatedCounter targetNumber={50} duration={1500} />+
              </h3>
              <p className={s.info}>реалізованих проєктів</p>
            </li>
            <li className={s.item}>
              <h3 className={s.number}>
                <AnimatedCounter targetNumber={92} duration={1800} />%
              </h3>
              <p className={s.info}>клієнтів рекомендують</p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
