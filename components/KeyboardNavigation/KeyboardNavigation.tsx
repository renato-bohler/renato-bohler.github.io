import classNames from 'classnames';

import { SECTIONS } from '~/consts/sections.const';

import styles from './KeyboardNavigation.module.css';

const KeyboardNavigation: React.FC = () => (
  <>
    {SECTIONS.map((section) => (
      <a
        key={section.name}
        className={classNames(
          styles.navigation,
          styles['navigation-button'],
        )}
        href={section.anchor}
      >
        Skip to {section.name}
      </a>
    ))}
  </>
);

export default KeyboardNavigation;
