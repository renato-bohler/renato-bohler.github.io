import styles from './Footer.module.css';
import MadeBy from './MadeBy/MadeBy';

const Footer: React.VFC = () => {
  return (
    <footer className={styles.footer}>
      <MadeBy />
    </footer>
  );
};

export default Footer;
