import s from './CreateCustomList.module.scss';
import CreateCustomItem from '../CreateCustomItem/CreateCustomItem';

export default function CreateCustomList({ items }) {
  return (
    <ul className={s.ulList}>
      {items.map((item, idx) => (
        <CreateCustomItem
          key={idx}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
}
