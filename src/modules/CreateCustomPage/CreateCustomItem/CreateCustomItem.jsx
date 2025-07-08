import s from './CreateCustomItem.module.scss';
import Icon from '@/shared/Icon/Icon';

export default function CreateCustomItem({ icon, title, description }) {
  return (
    <li className={s.listItem}>
      <div className={s.containerIcon}>
        <Icon iconName={icon} className={s.icon} />
      </div>
      <h3 className={s.titleInfo}>{title}</h3>
      <p className={s.description}>{description}</p>
    </li>
  );
}
