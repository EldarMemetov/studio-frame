import s from './ListServicesSection.module.scss';
import ItemServicesSection from '../ItemServicesSection/ItemServicesSection';

export default function ListServicesSection({ items }) {
  return (
    <ul className={s.ulList}>
      {items.map((item, idx) => (
        <ItemServicesSection
          key={idx}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
}
