import { Button } from 'reakit/Button';

import styles from './Footer.module.css';
import FooterTransitionTrigger from './FooterTransitionTrigger/FooterTransitionTrigger';
import MadeBy from './MadeBy/MadeBy';

type Props = {
  onProgressChange: (progress: number) => void;
  onNavigationHeaderTrigger: (hide: boolean) => void;
  isNavigationHeaderHidden: boolean;
  onEmailDialogOpen: () => void;
};

const Footer: React.FC<Props> = ({
  onProgressChange,
  onNavigationHeaderTrigger,
  isNavigationHeaderHidden,
  onEmailDialogOpen,
}) => {
  return (
    <>
      <FooterTransitionTrigger
        onProgressChange={onProgressChange}
        onNavigationHeaderTrigger={onNavigationHeaderTrigger}
      />

      <footer className={styles.footer}>
        <Button
          onClick={onEmailDialogOpen}
          className={styles.contactButton}
        >
          <span>Contact me</span>
          <span
            className={styles.contactButtonDecoration}
            aria-hidden
          >
            {'>'}
          </span>
        </Button>

        {isNavigationHeaderHidden && (
          <div className={styles.background} />
        )}
        <MadeBy />
      </footer>
    </>
  );
};

export default Footer;
