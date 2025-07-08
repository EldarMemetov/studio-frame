import Container from '@/shared/container/Container';
import s from './ProcessStep.module.scss';
import Link from 'next/link';
import Icon from '@/shared/Icon/Icon';
export default function ProcessStep() {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.bigContainer}>
          <div className={s.stepsContainer}>
            <span className={s.spanInfo}>Процес</span>
          </div>

          <h2 className={s.title}>
            Я створюю сайти, які допомагають залучати клієнтів і зростати онлайн
          </h2>
          <h3 className={s.description}>
            Від ідеї до запуску та підтримки — беру весь процес на себе:
          </h3>

          <ul className={s.containerItemList}>
            <li className={s.listItem}>
              <div className={s.containerContent}>
                <span className={s.number}>1 |</span>
                <h4 className={s.info}>Занурення в бізнес та стратегію</h4>
              </div>
              <p className={s.titleInfo}>
                Дослідження ринку, аналіз конкурентів, визначення цілей.
              </p>
            </li>
            <li className={s.listItem}>
              <div className={s.containerContent}>
                <span className={s.number}>2 |</span>
                <h4 className={s.info}>Дизайн та прототип</h4>
              </div>
              <p className={s.titleInfo}>
                UI/UX-дизайн під ваші задачі, адаптивність для всіх пристроїв.
              </p>
            </li>
            <li className={s.listItem}>
              <div className={s.containerContent}>
                <span className={s.number}>3 |</span>
                <h4 className={s.info}>Розробка та інтеграції</h4>
              </div>
              <p className={s.titleInfo}>
                Технічна реалізація, підключення CRM, платіжних систем.
              </p>
            </li>
            <li className={s.listItem}>
              <div className={s.containerContent}>
                <span className={s.number}>4 |</span>
                <h4 className={s.info}>Оптимізація та запуск</h4>
              </div>
              <p className={s.titleInfo}>
                Швидкість, SEO, тестування — і вихід у онлайн.
              </p>
            </li>
            <li className={s.listItem}>
              <div className={s.containerContent}>
                <span className={s.number}>5 |</span>
                <h4 className={s.info}>Підтримка та розвиток</h4>
              </div>
              <p className={s.titleInfo}>
                Оновлення, SEO-просування, масштабування.
              </p>
            </li>
            <li className={s.containerButton}>
              <h3 className={s.buttonTitle}>Готові обговорити ваш проєкт?</h3>
              <div className={s.containerItem}>
                <p className={s.buttonInfo}>Отримай безкоштовну консультацію</p>

                <Link href="/#contact" passHref>
                  <button className={s.button} type="button">
                    <Icon iconName="icon-arrows-right" className={s.icon} />
                  </button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
