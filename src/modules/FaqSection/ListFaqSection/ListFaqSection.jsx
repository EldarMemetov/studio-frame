'use client';

import { useState } from 'react';
import ItemFaqSection from '../ItemFaqSection/ItemFaqSection';
import s from './ListFaqSection.module.scss';

export default function ListFaqSection({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <ul className={s.ul}>
      {items.map((item, i) => (
        <ItemFaqSection
          key={i}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onToggle={() => handleToggle(i)}
        />
      ))}
    </ul>
  );
}
