import React from 'react';

import EmailForm from '~/components/EmailForm/EmailForm';

import styles from './ContactFormChatMessage.module.css';

const ContactFormChatMessage: React.FC = () => (
  <EmailForm className={styles.form} />
);

export default ContactFormChatMessage;
