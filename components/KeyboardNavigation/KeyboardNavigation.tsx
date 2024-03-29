import { SECTIONS } from '~/consts/sections.const';

import styles from './KeyboardNavigation.module.css';

export const KeyboardNavigation: React.FC = () => (
  <menu className={styles.navigation}>
    {SECTIONS.map((section) => (
      <li key={section.name}>
        <a className={styles.navigationButton} href={section.anchor}>
          Skip to {section.name}
        </a>
      </li>
    ))}
  </menu>
);
