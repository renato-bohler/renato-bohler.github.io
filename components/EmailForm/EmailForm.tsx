import {
  forwardRef,
  useState,
  type FormEventHandler,
  type Ref,
} from 'react';

import classNames from 'classnames';
import { Button } from 'reakit/Button';

import { CheckIcon } from '~/components/icons/CheckIcon';
import { LoadingIcon } from '~/components/icons/LoadingIcon';
import { PaperPlaneIcon } from '~/components/icons/PaperPlaneIcon';

import styles from './EmailForm.module.css';

type FormData = {
  author: string;
  message: string;
  replyTo: string;
};

const sendEmail = async (formData: FormData) => {
  try {
    if (!formData.author || !formData.replyTo || !formData.message)
      throw new Error();

    const response = await fetch(
      process.env.NEXT_PUBLIC_CONTACT_ENDPOINT,
      {
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      },
    );

    return response.json();
  } catch {
    return Promise.reject();
  }
};

type FormState = 'error' | 'idle' | 'submitting' | 'success';

type Props = {
  className?: string;
};

export const BaseEmailForm = (
  { className }: Props,
  ref: Ref<HTMLFormElement>,
) => {
  const [formState, setFormState] = useState<FormState>('idle');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    event,
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      author: formData.get('author')?.toString() || '',
      message: formData.get('message')?.toString() || '',
      replyTo: formData.get('replyTo')?.toString() || '',
    };

    try {
      setFormState('submitting');
      await sendEmail(payload);
      setFormState('success');
    } catch {
      setFormState('error');
    }
  };

  const disabled =
    formState === 'submitting' || formState == 'success';

  return (
    <form
      className={classNames(styles.form, className)}
      onSubmit={handleSubmit}
      ref={ref}
    >
      <label className={styles.labelContainer}>
        <span className={styles.label}>What&apos;s your name?</span>
        <input
          autoComplete="name"
          className={styles.input}
          disabled={disabled}
          maxLength={100}
          name="author"
          placeholder="John Doe"
          required
          type="text"
        />
      </label>

      <label className={styles.labelContainer}>
        <span className={styles.label}>
          How should I get back to you?
        </span>
        <input
          autoComplete="email"
          className={styles.input}
          disabled={disabled}
          maxLength={300}
          name="replyTo"
          placeholder="E-mail, LinkedIn profile, Twitter, etc."
          required
          type="text"
        />
      </label>

      <label className={styles.labelContainer}>
        <span className={styles.label}>Speak your mind</span>
        <textarea
          className={classNames(styles.input, styles.textarea)}
          disabled={disabled}
          maxLength={1000}
          name="message"
          placeholder="Type your message here..."
          required
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
          className={styles.button}
          disabled={disabled}
          title="Send your message"
          type="submit"
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

export const EmailForm = forwardRef(BaseEmailForm);
