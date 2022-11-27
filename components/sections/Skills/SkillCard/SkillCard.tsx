import { useCallback, useRef, useState } from 'react';

import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { DialogDisclosure, useDialogState } from 'reakit/Dialog';
import { VisuallyHidden } from 'reakit/VisuallyHidden';

import ChevronDoubleDownIcon from '~/components/icons/ChevronDoubleDown';
import ChevronDoubleUpIcon from '~/components/icons/ChevronDoubleUp';
import ChevronDownIcon from '~/components/icons/ChevronDown';
import ChevronTripleDownIcon from '~/components/icons/ChevronTripleDown';
import ChevronTripleUpIcon from '~/components/icons/ChevronTripleUp';
import ChevronUpIcon from '~/components/icons/ChevronUp';
import OpenBookIcon from '~/components/icons/OpenBook';
import useTheme from '~/hooks/useTheme';

import styles from './SkillCard.module.css';
import SkillCardDialog from './SkillCardDialog/SkillCardDialog';

type Props = {
  id: string;
  name: string;
  description: React.ReactElement;
  teaser?: React.ReactElement;
  icon: React.ReactNode;
  favorite: boolean;
  backgroundColor: string;
  textColor: string;
  scrollBarTrackColor?: string;
  usageLevel: -3 | -2 | -1 | 1 | 2 | 3;
  yearsExperience?: number;
  studying: boolean;
};

const WAVE_PATHS = [
  'M0,32L48,42.7C96,53,192,75,288,96C384,117,480,139,576,133.3C672,128,768,96,864,69.3C960,43,1056,21,1152,16C1248,11,1344,21,1392,26.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
  'M0,192L48,213.3C96,235,192,277,288,261.3C384,245,480,171,576,149.3C672,128,768,160,864,176C960,192,1056,192,1152,165.3C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
  'M0,256L48,234.7C96,213,192,171,288,128C384,85,480,43,576,53.3C672,64,768,128,864,160C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
  'M0,96L48,106.7C96,117,192,139,288,144C384,149,480,139,576,149.3C672,160,768,192,864,218.7C960,245,1056,267,1152,250.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
  'M0,288L48,293.3C96,299,192,309,288,298.7C384,288,480,256,576,208C672,160,768,96,864,106.7C960,117,1056,203,1152,245.3C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
  'M0,224L48,234.7C96,245,192,267,288,256C384,245,480,203,576,192C672,181,768,203,864,213.3C960,224,1056,224,1152,218.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
  'M0,0L48,21.3C96,43,192,85,288,122.7C384,160,480,192,576,208C672,224,768,224,864,192C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
  'M0,288L48,272C96,256,192,224,288,186.7C384,149,480,107,576,96C672,85,768,107,864,144C960,181,1056,235,1152,266.7C1248,299,1344,309,1392,314.7L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
  'M0,128L48,128C96,128,192,128,288,117.3C384,107,480,85,576,85.3C672,85,768,107,864,117.3C960,128,1056,128,1152,128C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
  'M0,288L48,266.7C96,245,192,203,288,181.3C384,160,480,160,576,165.3C672,171,768,181,864,176C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
];

const USAGE = {
  [-3]: {
    Icon: ChevronTripleDownIcon,
    description: "I haven't used this in the last five years",
  },
  [-2]: {
    Icon: ChevronDoubleDownIcon,
    description: "I haven't used this in the last two years",
  },
  [-1]: {
    Icon: ChevronDownIcon,
    description: "I haven't used this in the last year",
  },
  1: {
    Icon: ChevronUpIcon,
    description: "I've used this it the last year",
  },
  2: {
    Icon: ChevronDoubleUpIcon,
    description: "I've been using this recently",
  },
  3: {
    Icon: ChevronTripleUpIcon,
    description: "I've been using this everyday",
  },
};

const STUDYING_LABEL = "I've been studying this recently";

const SkillCard: React.FC<Props> = ({
  id,
  name,
  description,
  teaser,
  icon,
  favorite,
  backgroundColor,
  textColor,
  scrollBarTrackColor,
  usageLevel,
  yearsExperience,
  studying,
}) => {
  const { isContrastMode } = useTheme();

  const cardRef = useRef<HTMLDivElement | null>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const setRefs = useCallback(
    (node: HTMLDivElement) => {
      cardRef.current = node;
      inViewRef(node);
    },
    [inViewRef],
  );

  const [wavePath] = useState(
    WAVE_PATHS[Math.floor(Math.random() * WAVE_PATHS.length)],
  );

  const { Icon, description: usageDescription } = USAGE[usageLevel];

  const dialog = useDialogState();

  return (
    <div
      ref={setRefs}
      className={classNames(styles.card, {
        [styles.large]: favorite,
        [styles.hidden]: !inView,
        [styles.border]: isContrastMode,
      })}
      style={{
        background: backgroundColor,
      }}
    >
      <div className={styles.content}>
        <SkillCardDialog
          cardRect={cardRef.current?.getBoundingClientRect()}
          dialog={dialog}
          id={id}
          name={name}
          description={description}
          icon={icon}
          backgroundColor={backgroundColor}
          textColor={textColor}
          scrollBarTrackColor={scrollBarTrackColor}
          yearsExperience={yearsExperience}
          wavePath={wavePath}
        />
        <DialogDisclosure
          {...dialog}
          className={styles.button}
          style={{ color: textColor }}
        >
          <div className={styles.image}>{icon}</div>

          <span className={styles.name}>
            {name}
            <VisuallyHidden>.</VisuallyHidden>
          </span>

          {favorite && teaser && (
            <div
              className={classNames(styles.teaser, {
                [styles.contrast]: isContrastMode,
              })}
            >
              {teaser}
            </div>
          )}

          <div className={styles.info}>
            <svg
              viewBox="0 0 1440 320"
              className={classNames(styles['wave-divider'], {
                [styles.contrast]: isContrastMode,
              })}
              aria-hidden
            >
              <path d={wavePath} />
            </svg>
            <div
              className={classNames(styles['content-wrapper'], {
                [styles.contrast]: isContrastMode,
              })}
            >
              {yearsExperience && (
                <>
                  <div className={styles.content}>
                    <span
                      className={styles['content-title']}
                      title="experience"
                    >
                      {favorite ? 'experience' : 'exp.'}
                    </span>
                    <span
                      title={`${yearsExperience} year${
                        yearsExperience > 1 ? 's' : ''
                      }`}
                    >
                      {yearsExperience} yr
                      {yearsExperience > 1 ? 's' : ''}
                    </span>
                    <VisuallyHidden>.</VisuallyHidden>
                  </div>

                  <span className={styles.divider} />
                </>
              )}
              <div className={styles.content}>
                <span
                  className={styles['content-title']}
                  title="usage"
                >
                  {favorite ? 'usage' : 'usg.'}
                </span>
                <span title={usageDescription}>
                  <Icon aria-label={usageDescription} />
                </span>
                <VisuallyHidden>.</VisuallyHidden>
              </div>
              {studying && (
                <>
                  <span className={styles.divider} />

                  <div className={styles.content}>
                    <span
                      className={styles['content-title']}
                      title="studying"
                    >
                      {favorite ? 'studying' : 'stu.'}
                    </span>
                    <span title={STUDYING_LABEL}>
                      <OpenBookIcon aria-label={STUDYING_LABEL} />
                    </span>
                    <VisuallyHidden>.</VisuallyHidden>
                  </div>
                </>
              )}
            </div>
          </div>
        </DialogDisclosure>
      </div>
    </div>
  );
};

export default SkillCard;
