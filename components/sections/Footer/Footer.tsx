import { Button } from 'reakit/Button';

import * as format from '~/utils/format';

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
  const lastUpdated = new Date(process.env.NEXT_PUBLIC_LAST_UPDATED);

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

        <MadeBy />

        <div className={styles.details}>
          <span title={format.dateTime(lastUpdated)}>
            Last published{' '}
            <time
              dateTime={lastUpdated.toISOString()}
              itemProp="datePublished"
            >
              {format.relativeTime(lastUpdated)}
            </time>
          </span>

          <a
            href="https://github.com/renato-bohler/renato-bohler.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </a>
        </div>

        {isNavigationHeaderHidden && (
          <div className={styles.background} />
        )}
      </footer>
    </>
  );
};

export default Footer;
