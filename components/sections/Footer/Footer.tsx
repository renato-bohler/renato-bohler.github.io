import { Button } from 'reakit/Button';

import useFirstMount from '~/hooks/useFirstMount';
import * as format from '~/utils/format';

import FooterTransitionTrigger from './FooterTransitionTrigger/FooterTransitionTrigger';
import MadeBy from './MadeBy/MadeBy';

import styles from './Footer.module.css';

type Props = {
  isNavigationHeaderHidden: boolean;
  onEmailDialogOpen: () => void;
  onNavigationHeaderTrigger: (hide: boolean) => void;
  onProgressChange: (progress: number) => void;
};

const Footer: React.FC<Props> = ({
  isNavigationHeaderHidden,
  onEmailDialogOpen,
  onNavigationHeaderTrigger,
  onProgressChange,
}) => {
  const lastUpdated = new Date(process.env.NEXT_PUBLIC_LAST_UPDATED);

  const isFirstMount = useFirstMount();

  return (
    <>
      <FooterTransitionTrigger
        onNavigationHeaderTrigger={onNavigationHeaderTrigger}
        onProgressChange={onProgressChange}
      />

      <footer className={styles.footer}>
        <Button
          className={styles.contactButton}
          onClick={onEmailDialogOpen}
        >
          <span>Contact me</span>
          <span
            aria-hidden
            className={styles.contactButtonDecoration}
          >
            {'>'}
          </span>
        </Button>

        <MadeBy />

        <div className={styles.details}>
          <span
            title={
              isFirstMount
                ? format.dateTimeUTC(lastUpdated)
                : format.dateTime(lastUpdated)
            }
          >
            Last published{' '}
            <time
              dateTime={lastUpdated.toISOString()}
              itemProp="datePublished"
            >
              {isFirstMount
                ? format.dateTimeUTC(lastUpdated)
                : format.relativeTime(lastUpdated)}
            </time>
          </span>

          <a
            href="https://github.com/renato-bohler/renato-bohler.github.io"
            rel="noopener noreferrer"
            target="_blank"
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
