'use client';

import { useRef, useEffect, useState } from 'react';
import s from './ItemFaqSection.module.scss';

export default function ItemFaqSection({ question, answer, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight + 'px' : '0px');
    }
  }, [isOpen]);

  return (
    <li className={`${s.list} ${isOpen ? s.open : ''}`}>
      <button className={s.button} onClick={onToggle} aria-expanded={isOpen}>
        <span className={s.icon}>{isOpen ? '−' : '+'}</span>
      </button>

      <div className={s.containerContent}>
        <h3 className={s.titleItem}>{question}</h3>

        <div
          className={s.answerWrapper}
          ref={contentRef}
          style={{ maxHeight: height }}
        >
          <p className={s.description}>{answer}</p>
        </div>
      </div>
    </li>
  );
}
