'use client';
import styles from './navigationButton.module.scss';
import MenuImg from '@/public/assets/icons/menu.svg';

interface NavigationButtonPropsType {
  onClick: () => void;
}

const NavigationButton = ({onClick}: NavigationButtonPropsType) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <img src={MenuImg.src} />
    </button>
  );
};

export default NavigationButton;
