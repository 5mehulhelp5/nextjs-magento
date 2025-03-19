'use client';
import styles from './sizeProductButton.module.scss';

interface SizeProductButtonPropsType {
  onClick: () => void;
  title: string;
  id: number;
  selected: number | null;
  stock_status: string;
}

const SizeProductButton = ({
  onClick,
  title,
  id,
  selected,
  stock_status,
}: SizeProductButtonPropsType) => {
  // console.log('selected:', selected, 'id:', id, 'stock_status', stock_status);
  if (stock_status !== 'IN_STOCK')
    return <button className={styles.outOfStock}>{title}</button>;
  if (selected === null)
    return (
      <button className={styles.button} onClick={onClick}>
        {title}
      </button>
    );
  if (selected === id)
    return (
      <button className={styles.selected} onClick={onClick}>
        {title}
      </button>
    );
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default SizeProductButton;
