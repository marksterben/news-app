import styles from './Error.module.css';

const Error = () => {
  return (
    <div className={styles.container}>
      <p className={styles.error}>There is an error!</p>
    </div>
  );
};

export default Error;