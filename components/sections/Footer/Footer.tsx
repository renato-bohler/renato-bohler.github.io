import styles from './Footer.module.css';
import FooterTransitionTrigger from './FooterTransitionTrigger/FooterTransitionTrigger';
import MadeBy from './MadeBy/MadeBy';

type Props = {
  onProgressChange: (progress: number) => void;
  onNavigationHeaderTrigger: (hide: boolean) => void;
};

const Footer: React.VFC<Props> = ({
  onProgressChange,
  onNavigationHeaderTrigger,
}) => {
  return (
    <>
      <FooterTransitionTrigger
        onProgressChange={onProgressChange}
        onNavigationHeaderTrigger={onNavigationHeaderTrigger}
      />

      {/* TODO: use progress to move footer up */}
      <footer className={styles.footer}>
        <MadeBy />
      </footer>
    </>
  );
};

export default Footer;
