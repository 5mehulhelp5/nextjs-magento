'use client';
import styles from './deleteButton.module.scss';
import trashIcon from '@/public/assets/icons/trash_red.svg';
interface DeleteButtonPropsType {
  onClick: () => void;
}

const DeleteButton = ({onClick}: DeleteButtonPropsType) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <img src={trashIcon.src} /> Usuń
    </button>
  );
};

export default DeleteButton;
