'use client';
import { useState } from 'react';
import { useLanguageChanger } from '../../../i18n/utils/LanguageChanger';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const { handleChangeLanguage, currentLocale } = useLanguageChanger();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (locale) => {
    handleChangeLanguage(locale);
    setIsOpen(false);
  };

  const availableLanguages = ['ua', 'en', 'de'].filter(
    (lang) => lang !== currentLocale
  );

  return (
    <div
      className={styles.languageSwitcherContainer}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={styles.languageButton}>
        {currentLocale.toUpperCase()}
      </button>

      {isOpen && (
        <ul className={styles.languageList}>
          {availableLanguages.map((lang) => (
            <li key={lang}>
              <button
                className={styles.languageOption}
                onClick={() => changeLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;

// 'use client';
// import { useLanguageChanger } from '../../../i18n/utils/LanguageChanger';
// import styles from './LanguageSwitcher.module.scss';

// const LanguageSwitcher = () => {
//   const { handleChangeLanguage, currentLocale } = useLanguageChanger();

//   const availableLanguages = ['ua', 'en', 'de'];

//   const changeLanguage = () => {
//     const currentIndex = availableLanguages.indexOf(currentLocale);
//     const nextIndex = (currentIndex + 1) % availableLanguages.length;
//     handleChangeLanguage(availableLanguages[nextIndex]);
//   };

//   return (
//     <button
//       className={styles.languageButton}
//       onClick={changeLanguage}
//       aria-label="Change language"
//     >
//       {currentLocale.toUpperCase()}
//     </button>
//   );
// };

// export default LanguageSwitcher;
