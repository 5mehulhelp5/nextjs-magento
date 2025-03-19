import styles from './loading.module.scss';
const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loader}></div>
      <h1>Ładowanie...</h1>
    </div>
  );
};
export default Loading;
