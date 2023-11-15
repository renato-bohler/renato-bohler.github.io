import { Button } from 'reakit/Button';
import {
  Popover,
  PopoverArrow,
  PopoverDisclosure,
  usePopoverState,
} from 'reakit/Popover';

import AnimatedIcon from '~/components/icons/AnimatedIcon/AnimatedIcon';
import EmailIcon from '~/components/icons/Email';
import GitHubIcon from '~/components/icons/GitHub';
import LinkedInIcon from '~/components/icons/LinkedIn';
import SocialsIcon from '~/components/icons/Socials';
import TwitterIcon from '~/components/icons/Twitter';
import socials from '~/consts/socials.const';

import styles from './SocialLinks.module.css';

type LinksProps = {
  animate?: boolean;
  onEmailDialogOpen: () => void;
};

const Links: React.FC<LinksProps> = ({
  animate,
  onEmailDialogOpen,
}) => (
  <>
    <Button
      className={styles.social}
      onClick={onEmailDialogOpen}
      title="E-mail"
    >
      <AnimatedIcon animationDelay={animate ? 3500 : 0}>
        <EmailIcon />
      </AnimatedIcon>
    </Button>
    <a
      className={styles.social}
      href={socials.twitter}
      rel="noopener noreferrer"
      target="_blank"
      title="Twitter"
    >
      <AnimatedIcon animationDelay={animate ? 3000 : 0}>
        <TwitterIcon />
      </AnimatedIcon>
    </a>
    <a
      className={styles.social}
      href={socials.linkedin}
      rel="noopener noreferrer"
      target="_blank"
      title="LinkedIn"
    >
      <AnimatedIcon animationDelay={animate ? 2500 : 0}>
        <LinkedInIcon />
      </AnimatedIcon>
    </a>
    <a
      className={styles.social}
      href={socials.github}
      rel="noopener noreferrer"
      target="_blank"
      title="GitHub"
    >
      <AnimatedIcon animationDelay={animate ? 2000 : 0}>
        <GitHubIcon />
      </AnimatedIcon>
    </a>
  </>
);

type Props = {
  onEmailDialogOpen: () => void;
};

const Socials: React.FC<Props> = ({ onEmailDialogOpen }) => {
  const popover = usePopoverState({
    animated: 500,
    placement: 'bottom-start',
  });

  return (
    <>
      <div className={styles.desktopButtons}>
        <Links animate onEmailDialogOpen={onEmailDialogOpen} />
      </div>
      <PopoverDisclosure
        {...popover}
        className={styles.mobileButton}
        title="Socials"
      >
        <AnimatedIcon animationDelay={2000}>
          <SocialsIcon />
        </AnimatedIcon>
      </PopoverDisclosure>
      <Popover {...popover} aria-label="Social links popover">
        <div className={styles.popover}>
          <PopoverArrow
            {...popover}
            className={styles.popoverArrow}
          />
          <span className={styles.title}>Socials</span>
          <div className={styles.grid}>
            <Links onEmailDialogOpen={onEmailDialogOpen} />
          </div>
        </div>
      </Popover>
    </>
  );
};

export default Socials;
