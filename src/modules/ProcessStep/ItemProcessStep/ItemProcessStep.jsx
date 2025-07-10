import s from './ItemProcessStep.module.scss';

export default function ItemProcessStep({ number, title, text }) {
  return (
    <li className={s.listItem}>
      <div className={s.containerContent}>
        <span className={s.number}>{number} |</span>
        <h4 className={s.info}>{title}</h4>
      </div>
      <p className={s.titleInfo}>{text}</p>
    </li>
  );
}
