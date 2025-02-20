'use client';
import styles from './addToBasketButton.module.scss';

interface AddToBasketButtonPropsType {
  onClick: () => void;
  title: string;
  active: boolean;
}

const AddToBasketButton = ({
  onClick,
  title,
  active,
}: AddToBasketButtonPropsType) => {
  if (active)
    return (
      <button className={styles.button} onClick={onClick}>
        {title}
      </button>
    );
  return (
    <button className={styles.disabled} onClick={onClick}>
      {title}
    </button>
  );
};

export default AddToBasketButton;
