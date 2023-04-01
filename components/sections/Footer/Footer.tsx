import { Button } from 'reakit/Button';

import useFirstMount from '~/hooks/useFirstMount';
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

const LAST_UPDATED = new Date(process.env.NEXT_PUBLIC_LAST_UPDATED);
const LAST_UPDATED_DATE_TIME = format.dateTime(LAST_UPDATED);
const LAST_UPDATED_RELATIVE = format.relativeTime(LAST_UPDATED);

const Footer: React.FC<Props> = ({
  onProgressChange,
  onNavigationHeaderTrigger,
  isNavigationHeaderHidden,
  onEmailDialogOpen,
}) => {
  const isFirstMount = useFirstMount();

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
          <span title={LAST_UPDATED_DATE_TIME}>
            Last published{' '}
            <time
              dateTime={LAST_UPDATED.toISOString()}
              itemProp="datePublished"
            >
              {isFirstMount
                ? LAST_UPDATED_DATE_TIME
                : LAST_UPDATED_RELATIVE}
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
