import styles from './Experience.module.css';

const Experience: React.FC = () => {
  return (
    <section className={styles.section}>
      <div id="experience" aria-hidden className={styles.anchor} />

      <div className={styles['title-container']}>
        <h2 className={styles.title}>experience</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles['card-content']}>
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles['card-content']}>
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles['card-content']}>
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
            Card
            <br />
          </div>
        </div>
      </div>

      <div style={{ height: '50vh' }} />
    </section>
  );
};

export default Experience;
