import { type FC } from 'react';

import { EmailForm } from '~/components/EmailForm/EmailForm';

import styles from './ContactFormChatMessage.module.css';

export const ContactFormChatMessage: FC = () => (
  <EmailForm className={styles.form} />
);
