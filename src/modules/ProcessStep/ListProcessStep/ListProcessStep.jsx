import s from './ListProcessStep.module.scss';
import ItemProcessStep from '../ItemProcessStep/ItemProcessStep';
import CTAProcessStep from '../CtaProcessStep/CtaProcessStep';

export default function ListProcessStep({ items, ctaTitle, ctaText }) {
  return (
    <ul className={s.containerItemList}>
      {items.map((item, index) => (
        <ItemProcessStep
          key={index}
          number={index + 1}
          title={item.title}
          text={item.text}
        />
      ))}

      <CTAProcessStep title={ctaTitle} text={ctaText} />
    </ul>
  );
}
