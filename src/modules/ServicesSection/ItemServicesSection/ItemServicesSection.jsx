import s from './ItemServicesSection.module.scss';
import Icon from '@/shared/Icon/Icon';

export default function ItemServicesSection({ icon, title, description }) {
  return (
    <li className={s.listItem}>
      <div className={s.containerIcon}>
        <Icon iconName={icon} className={s.icon} />
        <h3 className={s.titleInfo}>{title}</h3>
      </div>

      <p className={s.description}>{description}</p>
    </li>
  );
}
