import styles from './Footer.module.css';
import FooterTransitionTrigger from './FooterTransitionTrigger/FooterTransitionTrigger';
import MadeBy from './MadeBy/MadeBy';

type Props = {
  onProgressChange: (progress: number) => void;
  onNavigationHeaderTrigger: (hide: boolean) => void;
  isNavigationHeaderHidden: boolean;
};

const Footer: React.FC<Props> = ({
  onProgressChange,
  onNavigationHeaderTrigger,
  isNavigationHeaderHidden,
}) => {
  return (
    <>
      <FooterTransitionTrigger
        onProgressChange={onProgressChange}
        onNavigationHeaderTrigger={onNavigationHeaderTrigger}
      />

      <footer className={styles.footer}>
        {isNavigationHeaderHidden && (
          <div className={styles.background} />
        )}
        <MadeBy />
      </footer>
    </>
  );
};

export default Footer;
