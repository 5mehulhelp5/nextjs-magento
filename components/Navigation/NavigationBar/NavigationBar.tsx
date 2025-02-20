'use client';
import NavigationButton from '@/components/Ui/Buttons/NavigationButton/NavigationButton';
import styles from './navigationBar.module.scss';
import BasketButton from '@/components/Ui/Buttons/BasketButton/BasketButton';
import NavigationMenu from '../NavigationMenu/Menu';
import {useState} from 'react';

const NavigationBar = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const showNavigationHandler = () => {
    setShowNavigation(true);
  };
  const hideNavigationHandler = () => {
    setShowNavigation(false);
  };
  return (
    <div className={styles.bar}>
      <NavigationButton onClick={showNavigationHandler} />
      <BasketButton />
      <NavigationMenu
        showMenu={showNavigation}
        hideMenu={hideNavigationHandler}
      />
    </div>
  );
};

export default NavigationBar;
