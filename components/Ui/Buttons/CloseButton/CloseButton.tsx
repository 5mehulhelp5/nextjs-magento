'use client';
import styles from './closeButton.module.scss';
import CloseIconWhite from '@/public/assets/icons/close_white.svg';
import CloseIconGrey from '@/public/assets/icons/close_grey.svg';

export interface CloseButtonPropsType {
  color: 'white' | 'grey';
  onClick: () => void;
}

const BUTTONS_COLORS = {
  white: CloseIconWhite.src,
  grey: CloseIconGrey.src,
};

const CloseButton = ({color, onClick}: CloseButtonPropsType) => {
  const buttonIcon = BUTTONS_COLORS[color];
  return (
    <button className={styles.button} onClick={onClick}>
      <img src={buttonIcon} />
    </button>
  );
};
export default CloseButton;
