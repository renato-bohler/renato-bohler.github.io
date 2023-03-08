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
  brief?: React.ReactElement;
  icon: React.ReactNode;
  featured: boolean;
  backgroundColor: string;
  textColor: string;
  scrollBarTrackColor?: string;
  usageLevel: -3 | -2 | -1 | 1 | 2 | 3;
  yearsExperience?: number;
  studying: boolean;
};

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
  brief,
  icon,
  featured,
  backgroundColor,
  textColor,
  scrollBarTrackColor,
  usageLevel,
  yearsExperience,
  studying,
}) => {
  const { isDarkMode, isContrastMode } = useTheme();

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const { Icon, description: usageDescription } = USAGE[usageLevel];

  const dialog = useDialogState();

  return (
    <div
      ref={ref}
      className={classNames(styles.card, {
        [styles.featured]: featured,
        [styles.hidden]: !inView,
        [styles.border]: isContrastMode,
      })}
      style={{
        backgroundImage: `linear-gradient(var(--theme-background), var(--theme-background)), radial-gradient(circle at top, ${backgroundColor}, transparent 90%)`,
        borderColor: isContrastMode ? backgroundColor : '',
        boxShadow: `${backgroundColor}${
          isDarkMode ? 20 : 40
        } 0 5px 50px`,
      }}
    >
      <div className={styles.blurContainer}>
        <div
          className={classNames(styles.blur, {
            [styles.light]: !isDarkMode,
          })}
          style={{
            background: backgroundColor,
          }}
        />
      </div>
      <div className={styles.content}>
        <SkillCardDialog
          dialog={dialog}
          id={id}
          name={name}
          description={description}
          icon={icon}
          backgroundColor={backgroundColor}
          textColor={textColor}
          scrollBarTrackColor={scrollBarTrackColor}
          yearsExperience={yearsExperience}
        />
        <DialogDisclosure {...dialog} className={styles.button}>
          <div className={styles.image}>{icon}</div>

          <span className={styles.name}>
            {name}
            <VisuallyHidden>.</VisuallyHidden>
          </span>

          {featured && brief && (
            <div
              className={classNames(styles.brief, {
                [styles.contrast]: isContrastMode,
              })}
            >
              {brief}
            </div>
          )}

          <div className={styles.info}>
            <div
              className={classNames(styles.contentWrapper, {
                [styles.contrast]: isContrastMode,
              })}
            >
              {yearsExperience && (
                <>
                  <div className={styles.content}>
                    <span
                      className={styles.contentTitle}
                      title="experience"
                    >
                      {featured ? 'experience' : 'exp.'}
                    </span>
                    <span
                      title={`${yearsExperience} year${
                        yearsExperience >= 2 ? 's' : ''
                      }`}
                    >
                      {yearsExperience} yr
                      {yearsExperience >= 2 ? 's' : ''}
                    </span>
                    <VisuallyHidden>.</VisuallyHidden>
                  </div>

                  <span className={styles.divider} />
                </>
              )}
              <div className={styles.content}>
                <span className={styles.contentTitle} title="usage">
                  {featured ? 'usage' : 'usg.'}
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
                      className={styles.contentTitle}
                      title="studying"
                    >
                      {featured ? 'studying' : 'stu.'}
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
