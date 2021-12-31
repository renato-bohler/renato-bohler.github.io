import classNames from 'classnames';
import { Button } from 'reakit/Button';

import { SECTIONS } from '~/consts/sections.const';

import styles from './KeyboardNavigation.module.css';

const scrollTo = (anchorId: string) =>
  setTimeout(() => (location.hash = anchorId));

const KeyboardNavigation: React.VFC = () => (
  <>
    {SECTIONS.filter((section) => section.name !== 'header').map(
      (section) => (
        <Button
          key={section.name}
          className={classNames(
            styles.navigation,
            styles['navigation-button'],
          )}
          onClick={() => scrollTo(section.anchor)}
        >
          Skip to {section.name}
        </Button>
      ),
    )}
  </>
);

export default KeyboardNavigation;
