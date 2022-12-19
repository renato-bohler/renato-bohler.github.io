import {
  Popover,
  PopoverArrow,
  PopoverDisclosure,
  usePopoverState,
} from 'reakit/Popover';

import AnimatedIcon from '~/components/icons/AnimatedIcon/AnimatedIcon';
import GitHubIcon from '~/components/icons/GitHub';
import LinkedInIcon from '~/components/icons/LinkedIn';
import SocialsIcon from '~/components/icons/Socials';
import TwitterIcon from '~/components/icons/Twitter';
import socials from '~/consts/socials.const';

import styles from './SocialLinks.module.css';

type LinksProps = {
  animate?: boolean;
};

const Links: React.FC<LinksProps> = ({ animate }) => (
  <>
    <a
      title="Twitter"
      href={socials.twitter}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.social}
    >
      <AnimatedIcon animationDelay={animate ? 3000 : 0}>
        <TwitterIcon />
      </AnimatedIcon>
    </a>
    <a
      title="LinkedIn"
      href={socials.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.social}
    >
      <AnimatedIcon animationDelay={animate ? 2500 : 0}>
        <LinkedInIcon />
      </AnimatedIcon>
    </a>
    <a
      title="GitHub"
      href={socials.github}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.social}
    >
      <AnimatedIcon animationDelay={animate ? 2000 : 0}>
        <GitHubIcon />
      </AnimatedIcon>
    </a>
  </>
);

const Socials: React.FC = () => {
  const popover = usePopoverState({
    placement: 'bottom-start',
    animated: 500,
  });

  return (
    <>
      <div className={styles.desktopButtons}>
        <Links animate />
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
            <Links />
          </div>
        </div>
      </Popover>
    </>
  );
};

export default Socials;
