import React, { forwardRef, Ref, useState } from 'react';

import classNames from 'classnames';
import { Button } from 'reakit/Button';

import CheckIcon from '~/components/icons/Check';
import LoadingIcon from '~/components/icons/Loading';
import PaperPlaneIcon from '~/components/icons/PaperPlane';

import styles from './EmailForm.module.css';

type FormData = {
  author: string;
  replyTo: string;
  message: string;
};

const sendEmail = async (formData: FormData) => {
  try {
    if (!formData.author || !formData.replyTo || !formData.message)
      throw new Error();

    const response = await fetch(
      'https://kixlofqgt4ph6k5zgdbtese7pa0dqwka.lambda-url.us-east-1.on.aws',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      },
    );

    return response.json();
  } catch (e) {
    return Promise.reject();
  }
};

type FormState = 'idle' | 'submitting' | 'success' | 'error';

type Props = {
  className?: string;
};

const EmailForm = (
  { className }: Props,
  ref: Ref<HTMLFormElement>,
) => {
  const [formState, setFormState] = useState<FormState>('idle');

  const handleSubmit: React.FormEventHandler<
    HTMLFormElement
  > = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      author: formData.get('author')?.toString() || '',
      replyTo: formData.get('replyTo')?.toString() || '',
      message: formData.get('message')?.toString() || '',
    };

    try {
      setFormState('submitting');
      await sendEmail(payload);
      setFormState('success');
    } catch (e) {
      setFormState('error');
    }
  };

  const disabled =
    formState === 'submitting' || formState == 'success';

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
      className={classNames(styles.form, className)}
    >
      <label className={styles.labelContainer}>
        <span className={styles.label}>What&apos;s your name?</span>
        <input
          name="author"
          type="text"
          required
          disabled={disabled}
          maxLength={100}
          placeholder="John Doe"
          className={styles.input}
        />
      </label>

      <label className={styles.labelContainer}>
        <span className={styles.label}>
          How should I get back to you?
        </span>
        <input
          name="replyTo"
          type="text"
          required
          disabled={disabled}
          maxLength={300}
          placeholder="E-mail, LinkedIn profile, Twitter, etc."
          className={styles.input}
        />
      </label>

      <label className={styles.labelContainer}>
        <span className={styles.label}>Speak your mind</span>
        <textarea
          name="message"
          required
          disabled={disabled}
          maxLength={1000}
          placeholder="Type your message here..."
          className={classNames(styles.input, styles.textarea)}
        />
      </label>

      <div className={styles.footer}>
        {(formState === 'success' || formState === 'error') && (
          <div className={styles.status}>
            {formState === 'success' && 'Thanks for your message!'}
            {formState === 'error' && 'Please try again'}
          </div>
        )}

        <Button
          type="submit"
          disabled={disabled}
          className={styles.button}
          title="Send your message"
        >
          {(formState === 'idle' || formState === 'error') && (
            <PaperPlaneIcon />
          )}
          {formState === 'submitting' && <LoadingIcon />}
          {formState === 'success' && <CheckIcon />}
        </Button>
      </div>
    </form>
  );
};

export default forwardRef(EmailForm);
