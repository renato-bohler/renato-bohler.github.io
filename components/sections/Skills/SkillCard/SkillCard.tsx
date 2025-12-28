import { type FC, type ReactElement, type ReactNode } from 'react';

import dynamic from 'next/dynamic';

import classNames from 'classnames';
import { DialogDisclosure, useDialogState } from 'reakit/Dialog';
import { VisuallyHidden } from 'reakit/VisuallyHidden';

import { ChevronDoubleDownIcon } from '~/components/icons/ChevronDoubleDownIcon';
import { ChevronDoubleUpIcon } from '~/components/icons/ChevronDoubleUpIcon';
import { ChevronDownIcon } from '~/components/icons/ChevronDownIcon';
import { ChevronTripleDownIcon } from '~/components/icons/ChevronTripleDownIcon';
import { ChevronTripleUpIcon } from '~/components/icons/ChevronTripleUpIcon';
import { ChevronUpIcon } from '~/components/icons/ChevronUpIcon';
import { OpenBookIcon } from '~/components/icons/OpenBookIcon';
import { useTheme } from '~/hooks/useTheme';

import styles from './SkillCard.module.css';

const SkillCardDialog = dynamic(() =>
  import('./SkillCardDialog/SkillCardDialog').then(
    ({ SkillCardDialog }) => SkillCardDialog,
  ),
);

type Props = {
  backgroundColor: string;
  brief?: ReactElement;
  description: ReactElement;
  featured: boolean;
  icon: ReactNode;
  id: string;
  name: string;
  scrollBarTrackColor?: string;
  studying: boolean;
  textColor: string;
  usageLevel: -3 | -2 | -1 | 1 | 2 | 3;
  yearsExperience?: number;
};

const USAGE = {
  [-3]: {
    description: "I haven't used this in the last five years",
    Icon: ChevronTripleDownIcon,
  },
  [-2]: {
    description: "I haven't used this in the last two years",
    Icon: ChevronDoubleDownIcon,
  },
  [-1]: {
    description: "I haven't used this in the last year",
    Icon: ChevronDownIcon,
  },
  1: {
    description: "I've used this it the last year",
    Icon: ChevronUpIcon,
  },
  2: {
    description: "I've been using this recently",
    Icon: ChevronDoubleUpIcon,
  },
  3: {
    description: "I've been using this everyday",
    Icon: ChevronTripleUpIcon,
  },
};

const STUDYING_LABEL = "I've been studying this recently";

export const SkillCard: FC<Props> = ({
  backgroundColor,
  brief,
  description,
  featured,
  icon,
  id,
  name,
  scrollBarTrackColor,
  studying,
  textColor,
  usageLevel,
  yearsExperience,
}) => {
  const { colorScheme, isContrastMode } = useTheme();

  const { description: usageDescription, Icon } = USAGE[usageLevel];

  const dialog = useDialogState();

  return (
    <div
      className={classNames(styles.card, {
        [styles.border]: isContrastMode,
        [styles.featured]: featured,
      })}
      style={{
        backgroundImage: `linear-gradient(var(--theme-background), var(--theme-background)), radial-gradient(circle at top, ${backgroundColor}, transparent 90%)`,
        borderColor: isContrastMode ? backgroundColor : '',
        boxShadow: `${backgroundColor}${
          colorScheme === 'dark' ? 20 : 40
        } 0 5px 50px`,
      }}
    >
      <div className={styles.blurContainer}>
        <div
          className={classNames(styles.blur, {
            [styles.light]: colorScheme === 'light',
          })}
          style={{
            background: backgroundColor,
          }}
        />
      </div>
      <div className={styles.content}>
        <SkillCardDialog
          backgroundColor={backgroundColor}
          description={description}
          dialog={dialog}
          icon={icon}
          id={id}
          name={name}
          scrollBarTrackColor={scrollBarTrackColor}
          textColor={textColor}
          yearsExperience={yearsExperience}
        />
        <DialogDisclosure {...dialog} className={styles.button}>
          <span className={styles.image}>{icon}</span>

          <span className={styles.name}>
            {name}
            <VisuallyHidden>.</VisuallyHidden>
          </span>

          {featured && brief && (
            <span
              className={classNames(styles.brief, {
                [styles.contrast]: isContrastMode,
              })}
            >
              {brief}
            </span>
          )}

          <span className={styles.info}>
            <span
              className={classNames(styles.contentWrapper, {
                [styles.contrast]: isContrastMode,
              })}
            >
              {yearsExperience && (
                <>
                  <span className={styles.content}>
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
                  </span>

                  <span className={styles.divider} />
                </>
              )}
              <span className={styles.content}>
                <span className={styles.contentTitle} title="usage">
                  {featured ? 'usage' : 'usg.'}
                </span>
                <span title={usageDescription}>
                  <Icon aria-label={usageDescription} />
                </span>
                <VisuallyHidden>.</VisuallyHidden>
              </span>
              {studying && (
                <>
                  <span className={styles.divider} />

                  <span className={styles.content}>
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
                  </span>
                </>
              )}
            </span>
          </span>
        </DialogDisclosure>
      </div>
    </div>
  );
};
