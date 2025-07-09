'use client';
import { useLanguageChanger } from '../../../i18n/utils/LanguageChanger';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const { handleChangeLanguage, currentLocale } = useLanguageChanger();

  const availableLanguages = ['ua', 'en', 'de'];

  const changeLanguage = () => {
    const currentIndex = availableLanguages.indexOf(currentLocale);
    const nextIndex = (currentIndex + 1) % availableLanguages.length;
    handleChangeLanguage(availableLanguages[nextIndex]);
  };

  return (
    <button
      className={styles.languageButton}
      onClick={changeLanguage}
      aria-label="Change language"
    >
      {currentLocale.toUpperCase()}
    </button>
  );
};

export default LanguageSwitcher;
