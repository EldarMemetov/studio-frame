import Container from '@/shared/container/Container';
import s from './AboutSection.module.scss';
import Image from 'next/image';
import Button from '@/shared/components/button/Button';
import Icon from '@/shared/Icon/Icon';
export default function AboutSection() {
  return (
    <section id="about" className={s.section}>
      <Container>
        <div>
          <div>
            <span>Про мене</span>
            <div>
              <h2>DevMyst</h2>
              <h3>— мій персональний веб-проєкт для вашого бізнесу</h3>
              <Image
                src="/image/eldar.jpg"
                alt="eldar"
                width={400}
                height={550}
              />
              <h3>“Ваш сайт</h3>
              <h4>— моя особиста справа”</h4>
              <p>
                Я Ельдар — веброзробник і засновник DevMyst. Я створюю сайти під
                ключ — від ідеї до запуску. Моє завдання — зробити не просто
                гарний сайт, а інструмент, що реально працює: залучає клієнтів,
                допомагає бізнесу зростати і приносить результат.
              </p>
              <div>
                <Button variant="variant1">
                  Зв’язатись зі мною
                  <Icon iconName="icon-arrows-corner" className={s.icon} />
                </Button>

                <Button variant="variant2">
                  Переглянути мої проєкти
                  <Icon iconName="icon-arrows-corner" className={s.icon} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
